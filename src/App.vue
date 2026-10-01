<template>

  <!-- MENU HORIZONTAL DO SITE -->
  <MenuHorizontal
    TextoWhatsApp="Preciso de um eletricista!"
    :temaEscuro="temaEscuro"
    @alternar-tema="alternarTema" />

  <!-- CONTEUDO DO SITE (HomeIndex.Vue) -->
  <router-view> </router-view>

  <!-- FOOTER DO SITE -->
  <FooterPagina
    LinkLinkedin="https://www.linkedin.com/in/viniciusdeol/"
    LinkFacebook="https://www.facebook.com/limatecbonitoms/"
    LinkInstagram="https://www.instagram.com/limatec_bonito_ms/"
    Titulo="©2026 LimaTec - Elétrica / Automação / Energia Solar" />

  <!-- CHAT DO WHATSAPP (flutuante no desktop; no celular abre pela barra fixa) -->
  <WhatsappFlutuante ref="chat" TextoWhatsApp="Preciso de um eletricista!" />

  <!-- BARRA FIXA DE LIGAR/CONVERSAR (SOMENTE CELULAR) -->
  <BarraAcaoMobile @abrir-chat="abrirChat()" />

  <!-- BOTÃO VOLTAR AO TOPO (canto inferior esquerdo, longe do chat) -->
  <BotaoTopo />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuHorizontal from './components/MenuHorizontal.vue';
import FooterPagina from './components/FooterPagina.vue';
import BarraAcaoMobile from './components/BarraAcaoMobile.vue';
import BotaoTopo from './components/BotaoTopo.vue';
import WhatsappFlutuante from './components/WhatsappFlutuante.vue';
import { limparUrl } from './uteis/navegacao';

const CHAVE_TEMA = 'limatec-tema';

export default defineComponent({
  name: 'App',
  components: {
    MenuHorizontal,
    FooterPagina,
    BarraAcaoMobile,
    BotaoTopo,
    WhatsappFlutuante
  },
  data() {
    return {
      temaEscuro: true
    };
  },
  created() {
    let salvo = null;
    try {
      salvo = localStorage.getItem(CHAVE_TEMA);
    } catch {
      salvo = null;
    }
    this.temaEscuro = salvo ? salvo === 'escuro' : true;
    this.aplicarTema();
  },
  mounted() {
    // tira o #hash e o ?i=1 (anexado pela hospedagem) da barra de endereço
    limparUrl();
  },
  methods: {
    alternarTema() {
      this.temaEscuro = !this.temaEscuro;
      try {
        localStorage.setItem(CHAVE_TEMA, this.temaEscuro ? 'escuro' : 'claro');
      } catch {
        // sem armazenamento disponível, só aplica o tema na sessão
      }
      this.aplicarTema();
    },
    aplicarTema() {
      document.documentElement.setAttribute('data-tema', this.temaEscuro ? 'escuro' : 'claro');
      // barra do navegador no celular acompanha o tema
      document.querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', this.temaEscuro ? '#141213' : '#F4F3EF');
    },
    abrirChat() {
      (this.$refs.chat as InstanceType<typeof WhatsappFlutuante>)?.abrir();
    }
  }
});
</script>

<style>

/* ===== TOKENS DO TEMA (escuro é o padrão) ===== */
:root {
  --cor-fundo: #141213;
  --cor-fundo-2: #1B191A;
  --cor-superficie: #232021;
  --cor-linha: #353233;
  --cor-linha-forte: #5A5657;
  --cor-texto: #F4F3EF;
  --cor-texto-suave: #C9C6C1;
  --cor-texto-apagado: #A9A6A1;
  --cor-destaque: #FFF212;
  --cor-destaque-texto: #FFF212;
  --cor-marcacao: transparent;
  --cor-botao-fundo: #FFF212;
  --cor-botao-texto: #141213;
  --cor-grade: rgba(244, 243, 239, .045);
  --cor-mapa-fundo: #201E1F;
  --cor-balao: #2B2829;
  --cor-menu-vidro: rgba(20, 18, 19, .72);
}

:root[data-tema='claro'] {
  --cor-fundo: #F4F3EF;
  --cor-fundo-2: #EAE8E1;
  --cor-superficie: #FFFFFF;
  --cor-linha: #D9D6CF;
  --cor-linha-forte: #141213;
  --cor-texto: #141213;
  --cor-texto-suave: #3B3839;
  --cor-texto-apagado: #55524F;
  --cor-destaque-texto: #141213;
  --cor-marcacao: #FFF212;
  --cor-botao-fundo: #141213;
  --cor-botao-texto: #F4F3EF;
  --cor-grade: rgba(20, 18, 19, .05);
  --cor-mapa-fundo: #E7E5DF;
  --cor-balao: #FFFFFF;
  --cor-menu-vidro: rgba(244, 243, 239, .72);
}

/* ===== BASE ===== */
html {
  scroll-behavior: smooth;
  /* trava qualquer rolagem lateral no celular */
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  font-family: 'Instrument Sans', system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow-x: hidden;
  transition: background-color .3s ease, color .3s ease;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-stretch: 110%;
  color: var(--cor-texto);
  letter-spacing: -0.02em;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
}

/* ===== UTILITÁRIOS COMPARTILHADOS ===== */
.container-site {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
}

.fundo-grade {
  background-image:
    linear-gradient(var(--cor-grade) 1px, transparent 1px),
    linear-gradient(90deg, var(--cor-grade) 1px, transparent 1px);
  background-size: 56px 56px;
}

.rotulo-secao {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cor-texto-apagado);
}

.titulo-secao {
  margin: 0;
  font-size: clamp(32px, 3.4vw, 48px);
  line-height: 1.08;
}

.botao-pilula {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 56px;
  padding: 0 28px;
  border: none;
  border-radius: 999px;
  background: var(--cor-botao-fundo);
  color: var(--cor-botao-texto);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, background-color .3s ease, color .3s ease;
}

.botao-pilula:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .25);
}

.botao-contorno {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 56px;
  padding: 0 28px;
  border: 1px solid var(--cor-linha-forte);
  border-radius: 999px;
  background: transparent;
  color: var(--cor-texto);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color .2s ease, border-color .3s ease, color .3s ease;
}

.botao-contorno:hover {
  background: var(--cor-grade);
}

/* Mostra/esconde elementos conforme o tema (ex.: variações do logo) */
:root[data-tema='claro'] .quando-escuro {
  display: none !important;
}

:root:not([data-tema='claro']) .quando-claro {
  display: none !important;
}

@media (max-width: 768px) {
  .container-site {
    padding: 0 20px;
  }
}

</style>
