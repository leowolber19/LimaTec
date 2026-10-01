# ADR-0006 — Navegação one-page por scroll, sem hash na URL

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
Links de âncora (`#servicos`) sujavam a URL, e a hospedagem antiga ainda anexava `?i=1`.
O Leonardo pediu URL sempre limpa (`limatecms.com/`).

## Decisão
- Navegação via `rolarPara(id)` em `src/uteis/navegacao.ts` (`scrollIntoView` + `scroll-margin-top`),
  com `@click.prevent` nos links — o `href="#id"` permanece por acessibilidade, mas a URL não muda.
- `limparUrl()` roda no mount do App e remove `#hash` e o parâmetro `i` via `history.replaceState`.
- Scroll spy no menu (`MenuHorizontal.vue`): seção visível acende o item; no topo nenhum item ativo.
- Menu: itens "Sobre nós · Serviços · Orçamento · Contato" (sem "Início" — o logo volta ao topo).

## Consequências
- Seção nova no menu = dar `id` + `scroll-margin-top` à seção e adicionar em `SECOES` no menu,
  no menu mobile e no rodapé.
- Links diretos com âncora (ex.: compartilhar `limatecms.com/#servicos`) continuam funcionando
  ao carregar, mas o hash é limpo em seguida.
