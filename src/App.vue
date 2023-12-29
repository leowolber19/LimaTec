<template>
  
  <!-- MENU HORIZONTAL DO SITE -->
  <MenuHorizontal
    TextoWhatsApp="Preciso de um eletricista!" />

  <!-- CONTEUDO DO SITE (HomeIndex.Vue) -->
  <router-view> </router-view>

  <!-- FOOTER DO SITE -->
  <FooterPagina 
    LinkLinkedin="https://www.linkedin.com/in/viniciusdeol/"
    LinkFacebook="https://www.facebook.com/limatecbonitoms/"
    LinkInstagram="https://www.instagram.com/limatec_bonito_ms/"
    Titulo="©2024 LimaTec - Elétrica / Automação / Energia Solar" />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuHorizontal from './components/MenuHorizontal.vue';
import FooterPagina from './components/FooterPagina.vue';

export default defineComponent({
  name: 'App',
  components: {
    MenuHorizontal,
    FooterPagina
  }
});
</script>

<style>

body {
  margin:0;
  padding:0;
  color: #242424;
  font-family: sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 900;
  color: #000;
}

a {
  text-decoration: none;
  color: #242424;
}

</style>
