<template>
  <div class="main-contatos">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.724627378872!2d-56.488052!3d-21.123541999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947c5f553c2264f1%3A0xae03f8707e275560!2sLimaTec%20-%20El%C3%A9trica%20-%20Automa%C3%A7%C3%A3o%20-%20Energia%20Solar!5e0!3m2!1spt-BR!2sbr!4v1703254480040!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    <div class="container-contatos"> 
      <div class="w-30"> 
        <h3> Telefones </h3>
        <p> {{ TelefonePrimario }} </p>
        <p class="telefone-whatsapp"> 
          {{ TelefoneSecundario }} 
          <img src="../../assets/whatsapp.png" class="img-whatsapp" @click="abreWhatsApp()" :title=TextoWhatsApp>
        </p> 
        <a href="tel:+5567999871739"> <BotaoAcao Texto="Ligar Agora" style="margin-top: 2em;" /> </a>
      </div>
      <div class="w-33"> 
        <h3> Endereço </h3>
        <p> {{ Logradouro }} </p>
        <p> {{ Cidade }} </p>
        <p> {{ Cep }} </p>
        <p> {{ Pais }} </p>
      </div>
      <div class="w-30">
        <h3> Horário de Funcionamento </h3>   
        <p> {{ DiasAtendimento }} </p>
        <p> {{ HorasAtendimento }} </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BotaoAcao from '../../components/BotaoAcao.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContatoIndex',
  components: {
    BotaoAcao
  },
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
    }
    ,
    HorasAtendimento: {
        type: String,
        default: ""
    },
    TextoWhatsApp: {
        type: String,
        default: ""
    }
  },
  methods: {
    abreWhatsApp : function() {
      window.open(`https://wa.me//5567999871739?text=${this.TextoWhatsApp.replaceAll(" ", "%20")}`)
    }
  }
});
</script>

<style scoped>

iframe {
  width: 100%;
}

h3 {
  font-family: sans-serif;
  font-weight: 700;
  color: #373435;
  font-size: 1.2em;
}

.container-contatos{
  display: flex;
  margin-top: 2em;
}

.container-contatos p{
  margin: .65em 0em;
}

.main-contatos{
  margin-top: 3em;
}

.telefone-whatsapp{
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.img-whatsapp{
  margin-bottom: 4px;
  height: 20px;
  cursor: pointer;
}

.w-30{
  width: 30%;
}

.w-33{
  width: 33%;
}

@media (max-width: 1250px) {
    .container-contatos {
       flex-direction: column;
       gap: 2em;
    }

    .w-30, .w-33{
      width: 100%;
    }
}

</style>