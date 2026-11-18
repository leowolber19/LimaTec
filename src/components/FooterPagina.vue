<template>
  <footer class="footer-main">
    <div class="container-site conteudo-footer">
      <div class="linha-footer">
        <div class="marca-footer">
          <LogoLimaTec Altura="46px" class="logo-footer" />
          <div class="texto-marca">
            <span class="nome-marca"> LimaTec </span>
            <span class="slogan-marca"> Elétrica · Automação · Energia Solar </span>
          </div>
        </div>

        <nav class="links-footer">
          <a href="#empresa" @click.prevent="rolarPara('empresa')"> Sobre nós </a>
          <a href="#servicos" @click.prevent="rolarPara('servicos')"> Serviços </a>
          <a href="#orcamento" @click.prevent="rolarPara('orcamento')"> Orçamento </a>
          <a href="#contato" @click.prevent="rolarPara('contato')"> Contato </a>
        </nav>

        <div class="footer-midias">
          <a :href="LinkFacebook" target="_blank" rel="noopener" aria-label="Facebook da LimaTec">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h-2a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/></svg>
          </a>
          <a :href="LinkInstagram" target="_blank" rel="noopener" aria-label="Instagram da LimaTec">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.6"/></svg>
          </a>
          <a :href="LinkLinkedin" target="_blank" rel="noopener" aria-label="LinkedIn da LimaTec">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10v7M7 7v.01M11 17v-4a2.5 2.5 0 0 1 5 0v4M11 10v7"/><rect x="3.5" y="3.5" width="17" height="17" rx="3"/></svg>
          </a>
        </div>
      </div>

      <div class="rodape-final">
        <p class="footer-title"> {{ Titulo }} </p>
        <p class="footer-dev"> Desenvolvido por <strong>LimaTec</strong> </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoLimaTec from './LogoLimaTec.vue';
import { rolarPara } from '@/uteis/navegacao';

export default defineComponent({
name: 'FooterPagina',
components: {
    LogoLimaTec
},
methods: {
    rolarPara
},
props: {
    Titulo: {
        type: String,
        default: ""
    },
    LinkLinkedin: {
        type: String,
        default: ""
    },
    LinkFacebook: {
        type: String,
        default: ""
    },
    LinkInstagram: {
        type: String,
        default: ""
    }
},

});
</script>

<style scoped>

.footer-main {
  background-color: #141213;
  color: #F4F3EF;
  border-top: 1px solid #2E2B2C;
}

.conteudo-footer {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 48px;
  padding-bottom: 36px;
}

.linha-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.marca-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* No rodapé o fundo é sempre escuro: força a variante clara do logo */
.logo-footer :deep(.quando-claro) {
  display: none !important;
}

.logo-footer :deep(.quando-escuro) {
  display: block !important;
}

.texto-marca {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.nome-marca {
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-stretch: 112%;
  font-size: 22px;
}

.slogan-marca {
  font-size: 14px;
  color: #C9C6C1;
}

.links-footer {
  display: flex;
  gap: 28px;
  font-size: 15px;
  font-weight: 500;
  color: #D6D3CE;
}

.links-footer a:hover {
  opacity: .65;
}

.footer-midias {
  display: flex;
  gap: 10px;
  align-items: center;
}

.footer-midias a {
  width: 46px;
  height: 46px;
  border: 1px solid #3D3A3B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .25s ease, color .25s ease;
}

.footer-midias a:hover {
  background: #FFF212;
  color: #141213;
}

.rodape-final {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid #2E2B2C;
  padding-top: 22px;
}

.footer-title {
  margin: 0;
  font-size: 14px;
  color: #A9A6A1;
}

.footer-dev {
  margin: 0;
  font-size: 13px;
  color: #A9A6A1;
}

.footer-dev strong {
  color: #C9C6C1;
  font-weight: 600;
}

@media (max-width: 768px) {
  .links-footer {
    display: none;
  }

  .footer-main {
    /* espaço para a barra fixa de ligar/whatsapp */
    padding-bottom: 76px;
  }

  .footer-title {
    font-size: 13px;
  }
}

</style>
