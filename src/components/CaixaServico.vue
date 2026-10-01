<template>
    <a class="container-servico" :href="linkWhatsApp(TextoWhatsApp)" target="_blank" rel="noopener">
        <div class="moldura-imagem">
            <img :src="require(`../assets/${Imagem}`)" :alt="`Ilustração: ${Titulo}`" class="imagem-servico" loading="lazy">
        </div>
        <div class="conteudo-servico">
            <span class="numero-servico"> {{ Numero }} </span>
            <h3 class="paragrafo-titulo"> {{ Titulo }} </h3>
            <p class="paragrafo-texto"> {{ Texto }} </p>
            <span class="saiba-mais">
                Saiba mais
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
        </div>
    </a>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { linkWhatsApp } from '@/uteis/contato';

  export default defineComponent({
    name: 'CaixaServico',
    props: {
        Numero: {
            type: String,
            default: ""
        },
        Titulo: {
            type: String,
            default: ""
        },
        Texto: {
            type: String,
            default: ""
        },
        Imagem: {
            type: String,
            default: ""
        },
        TextoWhatsApp: {
            type: String,
            default: ""
        }
    },
    methods: {
        linkWhatsApp
    }
  });
</script>

<style scoped>

.container-servico {
    display: flex;
    flex-direction: column;
    background: var(--cor-superficie);
    border: 1px solid var(--cor-linha);
    border-radius: 20px;
    overflow: hidden;
    transition: transform .25s ease, border-color .25s ease;
}

.container-servico:hover {
    transform: translateY(-6px);
    border-color: var(--cor-destaque-texto);
    cursor: pointer;
}

.moldura-imagem {
    height: 200px;
    overflow: hidden;
    background: #1A1819;
}

.imagem-servico {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .5s ease;
}

.container-servico:hover .imagem-servico {
    transform: scale(1.05);
}

.conteudo-servico {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 24px 24px 22px;
    flex-grow: 1;
}

.numero-servico {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--cor-destaque-texto);
}

.paragrafo-titulo {
    margin: 0;
    font-size: 22px;
    line-height: 1.2;
    font-weight: 700;
}

.paragrafo-texto {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--cor-texto-suave);
    flex-grow: 1;
}

.saiba-mais {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding-top: 12px;
    font-weight: 600;
    font-size: 15px;
    color: var(--cor-texto);
}

.saiba-mais svg {
    color: var(--cor-destaque-texto);
}

</style>
