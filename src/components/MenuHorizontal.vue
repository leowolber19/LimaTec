<template>
  <header class="main-menu" :class="{ 'menu-rolado': rolado, 'menu-escondido': escondido }">
    <div class="container-site container-menu">

      <a href="#inicio" class="imagem-texto" aria-label="Voltar ao início" @click.prevent="irPara('inicio')">
        <LogoLimaTec Altura="46px" />
        <span class="texto-logo"> LimaTec </span>
      </a>

      <nav class="menu-list">
        <a class="item-menu" :class="{ 'item-ativo': secaoAtiva === 'empresa' }"
          href="#empresa" @click.prevent="irPara('empresa')"> Sobre nós </a>
        <a class="item-menu" :class="{ 'item-ativo': secaoAtiva === 'servicos' }"
          href="#servicos" @click.prevent="irPara('servicos')"> Serviços </a>
        <a class="item-menu" :class="{ 'item-ativo': secaoAtiva === 'orcamento' }"
          href="#orcamento" @click.prevent="irPara('orcamento')"> Orçamento </a>
        <a class="item-menu" :class="{ 'item-ativo': secaoAtiva === 'contato' }"
          href="#contato" @click.prevent="irPara('contato')"> Contato </a>
      </nav>

      <div class="acoes-menu">
        <a class="telefone-menu" :href="TELEFONE_LINK">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
          {{ TELEFONE_FORMATADO }}
        </a>

        <button class="botao-tema" @click="$emit('alternar-tema')"
          aria-label="Alternar entre modo escuro e claro" title="Alternar modo escuro / claro">
          <svg class="quando-escuro" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>
          <svg class="quando-claro" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>
        </button>

        <button class="botao-pilula botao-contato" @click="abrirWhatsApp()" :title="TextoWhatsApp">
          Entrar em contato
        </button>

        <button class="botao-hamburguer" @click="menuAberto = !menuAberto"
          :aria-expanded="menuAberto" aria-label="Abrir menu">
          <svg v-if="!menuAberto" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
    </div>

    <!-- MENU CELULAR -->
    <nav v-if="menuAberto" class="menu-celular">
      <a href="#empresa" @click.prevent="irPara('empresa')"> Sobre nós </a>
      <a href="#servicos" @click.prevent="irPara('servicos')"> Serviços </a>
      <a href="#orcamento" @click.prevent="irPara('orcamento')"> Orçamento </a>
      <a href="#contato" @click.prevent="irPara('contato')"> Contato </a>
      <a :href="TELEFONE_LINK" @click="menuAberto = false" class="telefone-celular"> Ligar: {{ TELEFONE_FORMATADO }} </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoLimaTec from './LogoLimaTec.vue';
import { abreWhatsApp, TELEFONE_FORMATADO, TELEFONE_LINK } from '@/uteis/contato';
import { rolarPara } from '@/uteis/navegacao';

const SECOES = ['empresa', 'servicos', 'orcamento', 'contato'];

export default defineComponent({
  name: 'MenuHorizontal',
  props: {
    TextoWhatsApp: {
      type: String,
      default: ""
    },
    temaEscuro: {
      type: Boolean,
      default: true
    }
  },
  emits: ['alternar-tema'],
  components: {
    LogoLimaTec
  },
  data() {
    return {
      menuAberto: false,
      rolado: false,
      escondido: false,
      secaoAtiva: '',
      ultimoY: 0,
      TELEFONE_FORMATADO,
      TELEFONE_LINK
    };
  },
  mounted() {
    window.addEventListener('scroll', this.aoRolar, { passive: true });
    this.aoRolar();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.aoRolar);
  },
  methods: {
    abrirWhatsApp() {
      abreWhatsApp(this.TextoWhatsApp, 'Menu — Entrar em contato');
    },
    irPara(id: string) {
      this.menuAberto = false;
      rolarPara(id);
    },
    aoRolar() {
      const y = window.scrollY;
      this.rolado = y > 8;

      // auto-esconder (só tem efeito no celular, via CSS):
      // descendo esconde, subindo mostra
      this.escondido = !this.menuAberto && y > 140 && y > this.ultimoY;
      this.ultimoY = y;

      this.atualizarSecaoAtiva();
    },
    atualizarSecaoAtiva() {
      // no topo da página nenhum item fica aceso
      let atual = '';
      for (const id of SECOES) {
        const secao = document.getElementById(id);
        if (secao && secao.getBoundingClientRect().top <= 130) {
          atual = id;
        }
      }
      // chegou ao fim da página: marca a última seção
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        atual = SECOES[SECOES.length - 1];
      }
      this.secaoAtiva = atual;
    }
  }
});
</script>

<style scoped>

.main-menu {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: var(--cor-fundo);
  border-bottom: 1px solid transparent;
  transition: background-color .3s ease, border-color .3s ease, box-shadow .3s ease, transform .3s ease;
}

/* rolou: encolhe e vira "vidro" com o conteúdo desfocado atrás */
.menu-rolado {
  background-color: var(--cor-menu-vidro);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--cor-linha);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .15);
}

.container-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 84px;
  transition: height .3s ease;
}

.menu-rolado .container-menu {
  height: 64px;
}

.imagem-texto {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transform-origin: left center;
  transition: transform .3s ease;
}

.menu-rolado .imagem-texto {
  transform: scale(.85);
}

.texto-logo {
  font-family: 'Archivo', sans-serif;
  font-stretch: 112%;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--cor-texto);
}

.menu-list {
  display: flex;
  align-items: center;
  gap: 36px;
}

.item-menu {
  position: relative;
  padding: 0.75em 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--cor-texto-suave);
  transition: color .2s ease;
}

/* sublinhado animado */
.item-menu::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 8px;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  background: #FFF212;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform .25s ease;
}

.item-menu:hover {
  color: var(--cor-texto);
}

.item-menu:hover::after {
  transform: scaleX(1);
}

/* seção ativa (scroll spy) */
.item-ativo {
  color: var(--cor-texto);
  font-weight: 600;
}

.item-ativo::after {
  transform: scaleX(1);
}

.acoes-menu {
  display: flex;
  align-items: center;
  gap: 18px;
}

.telefone-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
}

.telefone-menu svg {
  color: var(--cor-destaque-texto);
}

.botao-tema {
  width: 44px;
  height: 44px;
  border: 1px solid var(--cor-linha-forte);
  border-radius: 50%;
  background: transparent;
  color: var(--cor-texto);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  transition: background-color .2s ease;
}

.botao-tema:hover {
  background: var(--cor-grade);
}

.botao-contato {
  height: 46px;
  padding: 0 22px;
  font-size: 15px;
}

.botao-hamburguer {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--cor-linha);
  border-radius: 14px;
  background: var(--cor-superficie);
  color: var(--cor-texto);
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
}

.menu-celular {
  display: none;
}

@media (max-width: 1024px) {
  .container-menu {
    height: 68px;
  }

  .menu-rolado .container-menu {
    height: 60px;
  }

  /* auto-esconder: descendo some, subindo volta */
  .menu-escondido {
    transform: translateY(-100%);
  }

  .menu-list,
  .telefone-menu,
  .botao-contato {
    display: none;
  }

  .botao-hamburguer {
    display: flex;
  }

  .texto-logo {
    font-size: 20px;
  }

  .menu-celular {
    display: flex;
    flex-direction: column;
    padding: 8px 20px 16px;
    border-top: 1px solid var(--cor-linha);
    background-color: var(--cor-fundo);
  }

  .menu-celular a {
    padding: 14px 4px;
    font-size: 17px;
    font-weight: 500;
    color: var(--cor-texto);
    border-bottom: 1px solid var(--cor-linha);
  }

  .menu-celular a:last-child {
    border-bottom: none;
  }

  .telefone-celular {
    color: var(--cor-destaque-texto) !important;
    font-weight: 600;
  }
}

</style>
