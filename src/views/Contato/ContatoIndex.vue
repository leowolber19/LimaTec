<template>
  <section id="contato" class="main-contatos">
    <div class="coluna-cartoes">
      <span class="rotulo-secao"> Contato </span>
      <h2 class="titulo-secao"> Fale com a LimaTec. </h2>

      <div class="lista-cartoes">
        <div class="cartao-contato">
          <div class="icone-contato">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
          </div>
          <div class="texto-contato">
            <span class="legenda-contato"> Telefone e WhatsApp </span>
            <span class="valor-destaque"> {{ TelefoneSecundario }} </span>
          </div>
          <a :href="TELEFONE_LINK" class="botao-pilula botao-ligar"> Ligar agora </a>
        </div>

        <div class="cartao-contato">
          <div class="icone-contato">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          </div>
          <div class="texto-contato">
            <span class="legenda-contato"> Endereço </span>
            <span class="valor-contato"> {{ Logradouro }} </span>
            <span class="detalhe-contato"> {{ Cidade }} · {{ Cep }} · {{ Pais }} </span>
          </div>
        </div>

        <div class="cartao-contato">
          <div class="icone-contato">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
          </div>
          <div class="texto-contato">
            <span class="legenda-contato"> Horário de funcionamento </span>
            <span class="valor-contato"> {{ HorasAtendimento }} </span>
            <span class="detalhe-contato"> {{ DiasAtendimento }} </span>
          </div>
        </div>
      </div>
    </div>

    <div class="coluna-mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.724627378872!2d-56.488052!3d-21.123541999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947c5f553c2264f1%3A0xae03f8707e275560!2sLimaTec%20-%20El%C3%A9trica%20-%20Automa%C3%A7%C3%A3o%20-%20Energia%20Solar!5e0!3m2!1spt-BR!2sbr!4v1703254480040!5m2!1spt-BR!2sbr" title="Mapa com a localização da LimaTec em Bonito/MS" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TELEFONE_LINK } from '@/uteis/contato';

export default defineComponent({
  name: 'ContatoIndex',
  props: {
    TelefonePrimario: {
        type: String,
        default: ""
    },
    TelefoneSecundario: {
        type: String,
        default: ""
    },
    Logradouro: {
        type: String,
        default: ""
    },
    Cidade: {
        type: String,
        default: ""
    },
    Cep: {
        type: String,
        default: ""
    },
    Pais: {
        type: String,
        default: ""
    },
    DiasAtendimento: {
        type: String,
        default: ""
    },
    HorasAtendimento: {
        type: String,
        default: ""
    },
    TextoWhatsApp: {
        type: String,
        default: ""
    }
  },
  data() {
    return {
      TELEFONE_LINK
    };
  }
});
</script>

<style scoped>

.main-contatos {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: stretch;
  padding: 96px 0;
  scroll-margin-top: 84px;
}

.coluna-cartoes {
  flex: 1 1 420px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.lista-cartoes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 8px;
}

.cartao-contato {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background: var(--cor-superficie);
  border: 1px solid var(--cor-linha);
  border-radius: 18px;
  align-items: center;
}

.icone-contato {
  flex: 0 0 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--cor-botao-fundo);
  color: var(--cor-botao-texto);
  display: flex;
  align-items: center;
  justify-content: center;
}

.texto-contato {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  line-height: 1.35;
}

.legenda-contato {
  font-size: 14px;
  color: var(--cor-texto-apagado);
}

.valor-destaque {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 22px;
}

.valor-contato {
  font-weight: 600;
  font-size: 17px;
}

.detalhe-contato {
  font-size: 15px;
  color: var(--cor-texto-suave);
}

.botao-ligar {
  height: 46px;
  padding: 0 20px;
  font-size: 15px;
}

.coluna-mapa {
  flex: 1 1 440px;
  min-width: 0;
  min-height: 460px;
  border-radius: 28px;
  border: 1px solid var(--cor-linha);
  overflow: hidden;
  background: var(--cor-mapa-fundo);
}

.coluna-mapa iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 1024px) {
  .main-contatos {
    padding: 56px 0 64px;
    gap: 24px;
    scroll-margin-top: 68px;
  }

  .coluna-mapa {
    min-height: 300px;
  }
}

</style>
