# ADR-0003 — Design system próprio com CSS variables e tema escuro padrão

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
O redesign precisava de identidade forte (marca: amarelo #FFF212 + grafite #141213/#373435) com
modo escuro e claro, sem adicionar peso de framework CSS (Tailwind, Bootstrap).

## Decisão
- Tokens como CSS variables (`--cor-*`) definidos em `src/App.vue`, em dois blocos:
  `:root` (tema ESCURO, o padrão) e `:root[data-tema='claro']`.
- O tema é aplicado por `App.vue` via atributo `data-tema` no `<html>`, persistido em
  `localStorage` (chave `limatec-tema`); a meta `theme-color` acompanha.
- Classes utilitárias globais no App.vue: `.container-site`, `.fundo-grade`, `.rotulo-secao`,
  `.titulo-secao`, `.botao-pilula`, `.botao-contorno`, `.quando-escuro`/`.quando-claro`.
- Tipografia: Archivo (títulos, weight 700–800, stretch 108–112%) + Instrument Sans (texto),
  via Google Fonts com preconnect no `public/index.html`.
- Formas: botões-pílula (radius 999px) e cartões com radius 14–28px e borda `var(--cor-linha)`.

## Consequências
- Cor nova = adicionar o token NOS DOIS temas; nunca hex solto em componente (exceto superfícies
  fixas da marca: faixa amarela, rodapé escuro, chat estilo WhatsApp).
- Qualquer componente novo deve funcionar nos dois temas sem CSS extra (só usar os tokens).
- Sem dependência de CSS externa; bundle de estilos ~31KB.
