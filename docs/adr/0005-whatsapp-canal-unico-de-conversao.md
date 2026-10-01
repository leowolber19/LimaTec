# ADR-0005 — WhatsApp como canal único de conversão

**Status:** Aceita · **Data:** 2026-10-01

## Contexto
O negócio fecha contato por WhatsApp/telefone; não há backend próprio nem interesse em formulário
de e-mail. O número estava hardcodado em 5+ componentes.

## Decisão
- Todo CTA converte para WhatsApp (`wa.me`) com mensagem pré-preenchida por contexto
  (serviço clicado, simulador com o valor da conta, chat com texto digitado).
- Número e helpers centralizados em `src/uteis/contato.ts` (`TELEFONE_FORMATADO`, `TELEFONE_LINK`,
  `linkWhatsApp()`, `abreWhatsApp()`). Mudança de número = 1 arquivo (+ JSON-LD no index.html).
- Desktop: chat flutuante estilo WhatsApp (`WhatsappFlutuante.vue`) que abre a conversa com a
  mensagem digitada. Mobile: barra fixa inferior (Ligar / Conversar) que abre o mesmo chat.

## Consequências
- Sem formulário/backend para manter; lead já chega qualificado na conversa.
- O chat usa cores fixas do WhatsApp (verde #008069 etc.) de propósito — não seguem o tema do site.
- Métricas de clique não existem por padrão; se necessário, adicionar analytics (decisão futura).
