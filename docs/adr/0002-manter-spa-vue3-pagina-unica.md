# ADR-0002 — Manter SPA Vue 3 de página única

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
No redesign de out/2026 havia a opção de migrar para um framework com SSR/SSG (Nuxt, Astro) ou
reescrever do zero. O site é institucional, de uma página, mantido esporadicamente.

## Decisão
Manter a stack existente: Vue 3 + TypeScript (Options API, `defineComponent`) + Vue CLI + vue-router,
como página única (`HomeIndex.vue` monta as seções). Sem Pinia/Vuex, sem SSR.

## Consequências
- Menor curva para manutenção; o redesign foi feito trocando componentes, não a fundação.
- SEO de conteúdo dinâmico é limitado (SPA), mitigado com metas OG e JSON-LD estáticos no `public/index.html`.
- Textos das seções ficam como props em `HomeIndex.vue` — editar conteúdo = editar um arquivo só.
- Se um dia o site virar multi-página com necessidade de SEO por página, reavaliar (novo ADR).
