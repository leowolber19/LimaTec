# LimaTec — Site institucional

Site one-page da LimaTec (Elétrica, Automação e Energia Solar — Bonito/MS).
Vue 3 + TypeScript (Options API) via Vue CLI. Produção: Cloudflare Workers (static assets) em https://limatecms.com.

## Comandos

| Comando | O quê |
|---|---|
| `npm run serve` | dev server em http://localhost:8080 |
| `npm run build` | build de produção em `dist/` |
| `npm run deploy` | build + publica na Cloudflare (ou use o slash command `/deploy`) |

## Estrutura

- `src/views/Home/HomeIndex.vue` — única página; monta as seções e concentra os TEXTOS (props)
- `src/components/` — um componente por seção/peça (nomes em PT-BR: `CaixaServico`, `BarraAcaoMobile`...)
- `src/uteis/contato.ts` — telefone/WhatsApp centralizados. NUNCA hardcodar o número em componente
- `src/uteis/navegacao.ts` — rolagem para seções (sem #hash na URL) e limpeza de URL
- `src/assets/servicos/*.svg` — ilustrações próprias dos cartões de serviço
- `public/` — index.html (metas OG/JSON-LD), og.jpg, robots.txt, sitemap.xml, ícones
- `docs/adr/` — decisões de arquitetura (LER antes de mudar padrão; registrar novas decisões lá)

## Design system (seguir sempre — ver ADR-0003)

- **Temas**: escuro é o PADRÃO; claro via `:root[data-tema='claro']`. TODA cor nova entra como
  CSS variable nos DOIS blocos de tokens em `src/App.vue` (`--cor-*`) — nunca hex solto em componente,
  exceto os fixos da marca (#FFF212, #141213) em superfícies que não mudam com o tema (rodapé, faixa amarela, chat).
- **Fontes**: títulos `'Archivo'` (weight 700–800, font-stretch 108–112%, letter-spacing negativo);
  texto `'Instrument Sans'`. Carregadas no `public/index.html` — não adicionar outras.
- **Formas**: botões-pílula (`border-radius: 999px`, classes globais `.botao-pilula`/`.botao-contorno`),
  cartões com `border-radius` 14–28px + `border: 1px solid var(--cor-linha)`.
- **Utilitários globais** (App.vue): `.container-site` (max 1240px), `.fundo-grade`, `.rotulo-secao`,
  `.titulo-secao`, `.quando-escuro`/`.quando-claro` (alternância por tema). Reusar antes de criar.
- **Ícones**: SVG inline stroke 2px (estilo Lucide). PROIBIDO FontAwesome/lib de ícones (removido — ADR-0004).
- **Logo**: só as variantes oficiais via `LogoLimaTec.vue`. Não redesenhar o logo.
- **Responsivo**: breakpoints 1024px e 768px; colunas flex sempre com `min-width: 0`;
  nada pode causar scroll horizontal no mobile. Mobile tem barra fixa inferior (Ligar/Conversar).

## Convenções de código

- Código, nomes de componentes, props, comentários e textos: **português**. Props em PascalCase
  (`TextoWhatsApp`) como o código legado; data/methods em camelCase.
- Options API com `defineComponent` + `lang="ts"`. Estilos `scoped` por componente; só tokens/utilitários no App.vue.
- Antes de criar componente/estilo novo: verificar se já existe um que sirva e estender (props), não duplicar.
- Imagens: otimizar antes de colocar em `src/assets` (máx ~1600px de largura, ~400KB). O `require()`
  dinâmico embarca TUDO da pasta assets no build — não deixar arquivo órfão lá.
- Novas dependências npm: evitar; o site é leve de propósito (~50KB JS gzip).

## Regras de trabalho (padrões do Leonardo)

1. **NUNCA commitar/push sem autorização explícita** — implementar, buildar e rodar é ok; commit é decisão dele.
2. **Mudança visual**: mostrar/descrever o resultado e aguardar validação; print do usuário é a fonte da verdade.
3. **Conteúdo do cliente**: textos/fotos placeholder são marcados com comentário — não publicar como definitivo;
   avaliações do Google são reais (não inventar novas).
4. Deploy em produção só quando o usuário pedir (`/deploy`).

## Futuro app administrativo (ADR-0008)

Quando for desenvolvido o app de administração para o cliente LimaTec: **repo separado**,
publicado em **`app.limatecms.com`** (mesma conta Cloudflare), stack 100% Cloudflare free —
front Vue (static assets) + API Worker em **TypeScript com Hono** + banco **D1** (KV/R2/Cron
conforme a necessidade; Postgres só via Hyperdrive+Neon se um caso real exigir). **Não usar
.NET nesse app** — decisão registrada no ADR-0008; ler antes de iniciar.
**Requisito:** tela de login com usuário e senha (hash PBKDF2/WebCrypto no D1, sessão em cookie
HttpOnly — detalhes no ADR-0008).

## Hospedagem (ADR-0007)

Domínio na Hostinger → nameservers Cloudflare → Worker `lima-tec` (static assets de `dist/`) com
custom domains `limatecms.com` e `www`. Hospedagem antiga (InfinityFree) descontinuada — o anti-bot
dela quebrava a prévia do WhatsApp. Metas OG/JSON-LD vivem em `public/index.html`; se mudar endereço/
telefone, atualizar lá TAMBÉM (JSON-LD + seção Contato + uteis/contato.ts).
