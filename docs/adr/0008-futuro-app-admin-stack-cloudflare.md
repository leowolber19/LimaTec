# ADR-0008 — Futuro app administrativo: stack 100% Cloudflare em app.limatecms.com

**Status:** Aceita (aguardando início do projeto) · **Data:** 2026-10-01

## Contexto
O cliente (LimaTec) provavelmente vai querer um app administrativo (painel para ele acessar e
gerenciar o negócio — ex.: clientes, orçamentos, ordens de serviço). Avaliou-se .NET 10 + Vue +
Postgres, mas essa stack não roda na Cloudflare (Workers não executam .NET) e exigiria somar
fornecedores (Cloud Run/Azure para a API + Neon/Supabase para o banco), com cold starts e mais
pontos de falha. A diretriz do Leonardo é usar sempre o free tier e concentrar tudo na Cloudflare:
"a ideia é morar tudo na cloudflare mesmo".

## Decisão
Quando o app nascer, ele será 100% Cloudflare, no free tier, publicado em **`app.limatecms.com`**
(custom domain na mesma conta/zona do site):

- **Repositório/projeto separado** deste site (este repo continua sendo só o institucional).
- **Front:** Vue servido como static assets (mesmo fluxo deste site).
- **API:** Cloudflare Worker em **TypeScript com Hono**.
- **Banco:** **D1** (SQL/SQLite serverless). Se um caso real exigir Postgres, usar Hyperdrive +
  Neon a partir do Worker — nunca mover a API para fora da Cloudflare por causa disso.
- **Autenticação (requisito do Leonardo, 01/10/2026):** o app TERÁ tela de login com usuário e
  senha própria (não Cloudflare Access, que exige conta externa — o cliente quer login simples).
  Implementação na stack: tabela `usuarios` no D1 com senha em hash **PBKDF2 via WebCrypto**
  (Workers não rodam bcrypt nativo; alternativa pronta: biblioteca **better-auth**, que suporta
  Hono + D1); sessão em cookie **HttpOnly/Secure/SameSite** com registro em KV ou D1 e expiração;
  rate-limit nas tentativas de login; toda rota da API protegida por middleware de sessão.
- **Apoio conforme a necessidade:** KV (sessão/cache), R2 (upload de arquivos), Cron triggers
  (rotinas agendadas).
- **Deploy:** `wrangler deploy` na mesma conta Cloudflare do site (login do Leonardo via
  `wrangler login`); criar um comando `/deploy` próprio no novo repo.

## Consequências
- Custo zero, um deploy só, sem cold start e um único fornecedor de infraestrutura.
- Backend em TypeScript, não .NET — decisão consciente: painel CRUD não justifica a stack .NET
  completa fora da Cloudflare. Se os requisitos mudarem (processamento pesado, libs .NET
  obrigatórias), escrever novo ADR revendo esta decisão.
- Limites do free tier valem para a CONTA inteira (site + apps somam): 100 mil req/dia no Worker,
  5 GB no D1 — folgado para painel administrativo; monitorar se escalar.
- O novo repo deve nascer com `CLAUDE.md` e `docs/adr/` próprios, espelhando os padrões deste
  (design system da marca LimaTec incluso, se o painel seguir a identidade visual).
