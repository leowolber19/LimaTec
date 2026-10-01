<template>
    <div class="barra-acao">
        <a :href="TELEFONE_LINK" class="botao-ligar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFF212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
            Ligar
        </a>
        <button class="botao-whatsapp" @click="$emit('abrir-chat')" title="Conversar pelo WhatsApp">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"/></svg>
            Conversar
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TELEFONE_LINK } from '@/uteis/contato';

export default defineComponent({
    name: 'BarraAcaoMobile',
    emits: ['abrir-chat'],
    data() {
        return {
            TELEFONE_LINK
        };
    }
});
</script>

<style scoped>

.barra-acao {
    display: none;
}

@media (max-width: 768px) {
    .barra-acao {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 11;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
        background: #1C1A1B;
        border-top: 1px solid #353233;
    }

    .botao-ligar,
    .botao-whatsapp {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 50px;
        border-radius: 999px;
        font-weight: 600;
        font-size: 16px;
        font-family: inherit;
        cursor: pointer;
    }

    .botao-ligar {
        border: 1px solid #5A5657;
        background: transparent;
        color: #F4F3EF;
    }

    .botao-whatsapp {
        border: none;
        background: #FFF212;
        color: #141213;
    }
}

</style>
