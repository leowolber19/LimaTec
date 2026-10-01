<template>
    <section class="main-chamada">
        <div class="container-site conteudo-chamada">
            <div class="texto-chamada">
                <h2 class="titulo-chamada"> {{ Titulo }} </h2>
                <p class="subtitulo-chamada"> {{ SubTitulo }} </p>
            </div>
            <button class="botao-chamada" @click="abrirWhatsApp()" :title="TextoWhatsApp">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFF212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"/></svg>
                Chamar no WhatsApp
            </button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { abreWhatsApp } from '@/uteis/contato';

export default defineComponent({
    name: 'ChamadaOrcamento',
    props: {
        Titulo: {
            type: String,
            default: ""
        },
        SubTitulo: {
            type: String,
            default: ""
        },
        TextoWhatsApp: {
            type: String,
            default: ""
        }
    },
    methods: {
        abrirWhatsApp() {
            abreWhatsApp(this.TextoWhatsApp, 'Faixa amarela');
        }
    }
});
</script>

<style scoped>

.main-chamada {
    background: #FFF212;
    color: #141213;
}

.conteudo-chamada {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
}

.texto-chamada {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 720px;
}

.titulo-chamada {
    margin: 0;
    font-size: clamp(30px, 3.2vw, 44px);
    line-height: 1.1;
    color: #141213;
}

.subtitulo-chamada {
    margin: 0;
    font-size: 19px;
    color: #2B2829;
}

.botao-chamada {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    height: 60px;
    padding: 0 32px;
    border: none;
    border-radius: 999px;
    background: #141213;
    color: #F4F3EF;
    font-weight: 600;
    font-size: 17px;
    font-family: inherit;
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease;
}

.botao-chamada:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, .3);
}

@media (max-width: 768px) {
    .conteudo-chamada {
        padding-top: 44px;
        padding-bottom: 44px;
    }

    .botao-chamada {
        width: 100%;
        justify-content: center;
    }
}

</style>
