<template>
  <div class="main-menu">
      <div class="container-menu"> 
        <div class="container-logo"> 
            <div class="imagem-texto" @click="ScrollInicio()">
              <img class="logo" src="../../public/icon.svg" />
              <div class="texto-logo"> LimaTec </div>
            </div> 
            <span class="menu-list"> 
              <div class="item-menu" @click="ScrollInicio()"> Início </div>
              <div class="item-menu" @click="ScrollEmpresa()"> Empresa </div>
              <div class="item-menu" @click="ScrollServico()"> Serviços </div>
              <div class="item-menu" @click="ScrollContato()"> Contatos </div>
            </span>
        </div>
        <div class="contato-menu">
          <botao-acao Texto="ENTRAR EM CONTATO" @click="abreWhatsApp()" :title=TextoWhatsApp />
        </div>
      </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import BotaoAcao from './BotaoAcao.vue';
  
  export default defineComponent({
    name: 'MenuHorizontal',
    props: {
      Texto: {
          type: String,
          default: ""
      },
      TextoWhatsApp: {
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
      },
      ScrollInicio: function(){
        const input = document.getElementsByClassName('SCROLL_INICIO')[0];
        input?.scrollIntoView();
      },
      ScrollEmpresa: function(){
        const input = document.getElementsByClassName('SCROLL_EMPRESA')[0];
        input?.scrollIntoView();
        window.scrollBy(0, 280);
      },
      ScrollServico: function(){
        const input = document.getElementsByClassName('SCROLL_SERVICO')[0];
        input?.scrollIntoView();
        window.scrollBy(0, 50);
      },
      ScrollContato: function(){
        const input = document.getElementsByClassName('SCROLL_CONTATO')[0];
        input?.scrollIntoView();
        window.scrollBy(0, -20);
      }
    }
});

</script>
  
<style scoped>
  
.main-menu{
  position: fixed;
  z-index: 10;
  width: 100%;
  color:white;
  transition: all .25s ease-in;
}

.fundo-branco{
  background-color: white;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  color: #242424 !important;
}

.color-ckm {
  color: #373435 !important;
}

.container-menu{
  display: flex;
  align-items: center;
  padding: 1em 3em;
  justify-content: space-between;
}

.contato-menu{
  width: 15%;
  text-align: center;
}

.logo {
  height: 60px;
}

.container-logo{
  display: flex;
  align-items: center;
  gap: 1.5em;
  width: 80%;
  justify-content: space-between;
}

.menu-list {
  display: flex;
  align-items: center;
  gap: 2em;
}

.item-menu {
  padding: 0.75em;
  text-align: center;
  width: 20%;
  border-radius: 4px;
  font-size: 1.2em;
}

.item-menu:hover {
  color: #fff212;
  cursor: pointer;
  
}

.container-contato {
  display: flex;
  align-items: center;
  gap: 4em;
  font-size: .9em;
}

.icon-menu{
  font-size: 1.2em;
  margin-right: .5em;
}

.main-contato{
  display: flex;
  background-color: #373435;
  color: white;
  padding: 1em 3em;
  justify-content: space-between;
}

.main-contato img{
  height: 25px;
  cursor: pointer;
}

.images-contato{
  display: flex;
  align-items: center;
  gap: 1.5em;
}

.texto-logo{
  font-size: 30px;
  color: white;
  font-weight: 800;
  font-family: system-ui;
}

.imagem-texto{
  display: flex;
  align-items: center;
  gap: 1.2em;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .contato-menu{
    width: auto;
  }

  .button-home{
    font-size: .6em !important;
    padding: 0.5em 0.75em !important;
  }

  .menu-list{
    display: none;
  }

  .logo{
    height: 40px;
  }

  .container-menu{
    padding: 1em 1.5em;
  }

  .texto-logo{
    font-size: 20px;
  }

  .imagem-texto{
    gap: 1em;
  }
}

</style>