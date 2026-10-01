<template>
    <div class="cartao-cliente">
        <img :src="Imagem" :style="{ maxHeight: height }" :alt="Nome" loading="lazy">
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CaixaCliente',
    props: {
        // URL já resolvida da imagem (ver uteis/conteudo.urlDaImagem)
        Imagem: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: "80px"
        },
        Nome: {
            type: String,
            default: "Cliente LimaTec"
        }
    }
  });
</script>

<style scoped>

.cartao-cliente {
    height: 112px;
    background: #FFFFFF;
    border: 1px solid var(--cor-linha);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
}

.cartao-cliente img {
    max-width: 100%;
}

@media (max-width: 768px) {
    .cartao-cliente {
        height: 96px;
    }
}

</style>
