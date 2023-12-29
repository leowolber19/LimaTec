<template>
    <div class="container-servico" @click="abreWhatsApp(TextoWhatsApp)"> 
        <img :src="require(`../assets/${Imagem}`)" class="imagem-servico" />
        <div style="display: flex;flex-direction: column;justify-content: space-between;">
            <p class="paragrafo-titulo"> {{ Titulo }} </p>
            <p class="paragrafo-texto"> {{ Texto }} </p>
            <p class="saiba-mais"> Saiba Mais </p>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CaixaServico',
    props: {
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
        abreWhatsApp : function(e: string) {
            window.open(`https://wa.me//5567999871739?text=${e.replaceAll(" ", "%20")}`)
        }
    }
  });
</script>
  
<style scoped>

.imagem-servico{
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 100% 0%;
    border-radius: 10px 10px 0 0;
}

.container-servico{
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #373435;
    font-weight: 500;
    transition: .25s;
    align-items: center;
    max-width: 30%;
    box-shadow: 0px 9px 13px -11px #969696, 5px 5px 10px 5px rgba(0,0,0,0);
    border: 1px solid #ebebeb;
    border-radius: 10px;
}

.container-servico:hover{
    scale: 1.05;
    cursor: pointer;
    background: #37343508;
}

.saiba-mais{
    margin: 3em 0;
    font-size: .9em;
    text-decoration: underline;
}

.paragrafo-texto{
    margin: 0px 2em;
    line-height: 1.75em;
    font-size: 14px;
    height: 100px;
}

.paragrafo-titulo{
    height: 65px;
    margin: 2em 2em 2em;
    font-size: 18px;
    line-height: 1.75em;
    font-weight: 600;
}

@media (max-width: 1250px) {
    .container-servico {
        max-width: 100%;
        width: 50%;
    }

    .main-servico{
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .container-servico {
        max-width: 100%;
        width: 100%;
    }

    .main-servico{
        flex-direction: column;
    }
}

</style>