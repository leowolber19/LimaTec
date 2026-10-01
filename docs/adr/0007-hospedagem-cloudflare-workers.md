# ADR-0007 — Hospedagem na Cloudflare (Workers static assets)

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
A hospedagem anterior (InfinityFree) interceptava TODO acesso com um desafio JavaScript anti-bot
(cookie `__test`, sufixo `?i=1`). Consequências: o crawler do WhatsApp nunca via as metas OG
(prévia de link jamais funcionaria), sem HTTPS confiável e deploy manual por upload no htdocs.

## Decisão
- Servir o site como static assets de `dist/` num Worker da Cloudflare (projeto `lima-tec`,
  config em `wrangler.jsonc`), com custom domains `limatecms.com` e `www.limatecms.com`.
- DNS do domínio na Cloudflare (nameservers trocados na Hostinger, onde o domínio é registrado).
- Deploy: `npm run deploy` (build + `wrangler deploy`), ou o slash command `/deploy` no Claude Code.
  Autenticação via `wrangler login` (OAuth, fica na máquina).

## Consequências
- HTTPS automático, sem `?i=1`, prévia OG funcionando, CDN global, custo zero.
- URLs de preview: `limatec.lima-tec.workers.dev` (mesmo conteúdo).
- A InfinityFree ficou como cópia de segurança durante a propagação de DNS (out/2026) e pode ser
  desativada depois; o registro DNS `cpanel.limatecms.com` é resquício dela.
- E-mail `@limatecms.com` não existe (sem MX); se um dia for criado, configurar MX na Cloudflare.
- O `.htaccess` em `public/` ficou sem efeito (era para Apache); mantido por ora, remoção é inócua.
