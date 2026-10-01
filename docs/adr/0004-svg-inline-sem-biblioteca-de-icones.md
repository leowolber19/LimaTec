# ADR-0004 — SVGs inline e ilustrações próprias; sem biblioteca de ícones

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
O site antigo importava `@fortawesome/fontawesome-free/css/all.css` (pacote que nem constava no
package.json — build quebradiço) e usava fotos stock pesadas nos cartões de serviço
(até 1,6MB; prints de CAD; fotos genéricas).

## Decisão
- Ícones: SVG inline no template (stroke 2px, estilo Lucide), coloridos via `currentColor`/tokens.
- Ilustrações dos serviços: SVGs próprios em `src/assets/servicos/` (~1–2KB cada), no estilo da marca
  (traço claro + amarelo sobre grafite #1A1819).
- Logo: somente via componente `LogoLimaTec.vue` (variante original no claro; variante de contorno
  fino no escuro). Proibido redesenhar.
- FontAwesome removido do projeto.

## Consequências
- Sem dependência de fontes de ícones; ícones têm a cor do tema automaticamente.
- Fotos reais do cliente continuam sendo usadas onde são prova social (carrossel do hero);
  imagens novas devem ser otimizadas (~máx 1600px/400KB) antes de entrar em `src/assets`
  (o `require()` dinâmico embarca a pasta inteira no build).
