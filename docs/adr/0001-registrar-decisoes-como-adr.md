# ADR-0001 — Registrar decisões como ADRs

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
O site passou por um redesign completo em out/2026 com várias decisões técnicas tomadas em conversa
(Claude Code + Leonardo). Sem registro, essas decisões se perdem e padrões são quebrados sem querer.

## Decisão
Toda decisão de arquitetura/padrão relevante é registrada em `docs/adr/NNNN-titulo.md`
(Contexto → Decisão → Consequências) e listada no README da pasta. Decisão revertida não é
apagada: ganha status "Substituída por ADR-XXXX".

## Consequências
- Quem for desenvolver (humano ou IA) lê os ADRs antes de mudar um padrão.
- O `CLAUDE.md` na raiz resume os padrões operacionais e aponta para cá.
