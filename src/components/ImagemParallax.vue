<template>
    <div class="module-parallax SCROLL_INICIO" :style="{ backgroundImage: 'url(' + require(`../assets/${Imagem}`) + ')', height: Height }">
      <p class="title-parallax"> {{ Titulo }} </p>
      <p class="sub-title-parallax"> {{ SubTitulo }} </p>
      <BotaoAcao v-if="TextoWhatsApp" Texto="FAZER UM ORÇAMENTO" @click="abreWhatsApp()" :title=TextoWhatsApp class="SCROLL_EMPRESA" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import BotaoAcao from './BotaoAcao.vue';
  
  export default defineComponent({
    name: 'ImagemParallax',
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
        },
        Imagem: {
          type: String,
          default: "SemImagem.png"
        },
        Height: {
          type: String,
          default: ""
        }
    },
    components: { 
        BotaoAcao
    },
    methods: {
      abreWhatsApp : function() {
        window.open(`https://wa.me//5567999871739?text=${this.TextoWhatsApp.replaceAll(" ", "%20")}`)
      }
    }
});
</script>
  
<style scoped>
  
.module-parallax {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 70%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  align-items: center;
}

.module-parallax:after {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 8;
  background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100% );
  background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100% );
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 5%, #000 100% );
}

section.module.parallax h1 {
  color: #FFF;
  text-align: center;
  font-size: 78px;
  z-index: 50;
  text-transform: uppercase;
}

.title-parallax{
  line-height: 1.6;
  font-size: 42px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-bottom: 0px;
  text-align: center;
  margin-top: -60px;
  z-index: 9;
  max-width: none;
  margin-bottom: 0 !important;
}

.sub-title-parallax{
    margin: 1em 0 1.5em;
    font-size: 25px;
    z-index: 9;
    color: white;
}

@media all and (max-width: 1024px) {
  section.module h2 {
    font-size: 32px;
  }

  .module h2, p {
    padding: 0 8px;
  }

  .container {
    margin:0;
    padding:0;
  }

  section.module.parallax h1 {
    font-size: 36px;
  }

  section.module.parallax{
    background-position: 80% 80%;
  }

  .title-parallax{
    font-size: 22px;
    width: 70%;
  }

  .sub-title-parallax{
    font-size: 15px;
    padding: 0px 3em;
    text-align: center;
  }

  .button-home{
    font-size: .7em !important;
    padding: 1em !important;
  }

  .module-parallax{
    height: 110vh !important;
  }
}

</style>