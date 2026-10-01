<template>
    <transition name="topo">
        <button v-if="visivel" class="botao-topo" @click="subir()" aria-label="Voltar ao topo">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
        </button>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BotaoTopo',
    data() {
        return {
            visivel: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.aoRolar, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.aoRolar);
    },
    methods: {
        aoRolar() {
            this.visivel = window.scrollY > 600;
        },
        subir() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});
</script>

<style scoped>

.botao-topo {
    position: fixed;
    bottom: 24px;
    left: 24px;
    z-index: 11;
    width: 48px;
    height: 48px;
    border: 1px solid var(--cor-linha-forte);
    border-radius: 50%;
    background: var(--cor-superficie);
    color: var(--cor-texto);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .25);
    transition: transform .2s ease, background-color .2s ease;
}

.botao-topo:hover {
    transform: translateY(-3px);
    background: var(--cor-grade);
}

.topo-enter-active,
.topo-leave-active {
    transition: opacity .25s ease, transform .25s ease;
}

.topo-enter-from,
.topo-leave-to {
    opacity: 0;
    transform: translateY(12px);
}

@media (max-width: 768px) {
    /* no celular o chat flutuante some, então a direita fica livre:
       fica acima da barra fixa de ligar/whatsapp, à direita */
    .botao-topo {
        bottom: calc(86px + env(safe-area-inset-bottom));
        left: auto;
        right: 16px;
    }
}

</style>
