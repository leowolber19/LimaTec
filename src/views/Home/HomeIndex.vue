<template>

  <!-- HERO PRINCIPAL (carrossel de obras; textos vêm do painel) -->
  <HeroPrincipal
    TextoWhatsApp="Olá, Gostaria de fazer um orçamento" />

  <!-- FAIXA DE NÚMEROS -->
  <FaixaNumeros />

  <!-- CONTEÚDO DO SITE -->
  <section class="module content">
    <div class="container-site">

      <!-- CLIENTES -->
      <div class="secao-clientes">
        <span class="rotulo-secao"> Quem confia na LimaTec </span>
        <!-- logos vêm do painel -->
        <div class="container-images">
            <CaixaCliente v-for="cliente in conteudo.clientes" :key="cliente.imagem + cliente.nome"
              :Imagem="urlDaImagem(cliente.imagem)"
              :Nome="cliente.nome"
              :height="`${cliente.altura ?? 80}px`" />
        </div>
      </div>

      <!-- EMPRESA (textos vêm do painel) -->
      <SobreEmpresa
        TituloPrimeiroParagrafo="SOBRE NÓS"
        :Titulo="conteudo.sobre.titulo"
        :TextoPrimerioPagrafo="conteudo.sobre.paragrafo1"
        :TextoSegundoPagrafo="conteudo.sobre.paragrafo2"
        />
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section id="servicos" class="secao-servicos fundo-grade">
    <div class="container-site">
      <div class="cabecalho-servicos">
        <div class="titulos-servicos">
          <span class="rotulo-secao rotulo-amarelo"> Serviços </span>
          <h2 class="titulo-secao"> {{ conteudo.servicosSecao.titulo }} </h2>
        </div>
        <p class="apoio-servicos"> {{ conteudo.servicosSecao.apoio }} </p>
      </div>

      <!-- textos vêm do painel; as ilustrações são fixas por posição -->
      <div class="main-servico">
        <CaixaServico v-for="(servico, i) in conteudo.servicos" :key="servico.numero"
          :Numero="servico.numero"
          :Imagem="imagensServicos[i % imagensServicos.length]"
          :Texto="servico.texto"
          :Titulo="servico.titulo"
          :TextoWhatsApp="servico.whatsapp" />
      </div>
    </div>
  </section>

  <!-- SIMULADOR DE ECONOMIA SOLAR -->
  <SimuladorSolar />

  <!-- CHAMADA PARA ORÇAMENTO (textos vêm do painel) -->
  <ChamadaOrcamento
    :Titulo="conteudo.chamada.titulo"
    :SubTitulo="conteudo.chamada.subtitulo"
    TextoWhatsApp="Olá, Gostaria de fazer um orçamento" />

  <!-- CONTATOS -->
  <section class="module content">
    <div class="container-site">
      <ContatoIndex
        TelefonePrimario=""
        :TelefoneSecundario="conteudo.contato.telefone"
        TextoWhatsApp="Preciso de um eletricista!"
        :Logradouro="conteudo.contato.logradouro"
        :Cidade="conteudo.contato.cidade"
        :Cep="conteudo.contato.cep"
        :Pais="conteudo.contato.pais"
        :DiasAtendimento="conteudo.contato.dias"
        :HorasAtendimento="conteudo.contato.horas" />
    </div>
  </section>

  <!-- AVALIAÇÕES DO GOOGLE (fecham a página) -->
  <AvaliacoesGoogle />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroPrincipal from '@/components/HeroPrincipal.vue';
import FaixaNumeros from '@/components/FaixaNumeros.vue';
import ContatoIndex from '../Contato/ContatoIndex.vue';
import CaixaServico from '@/components/CaixaServico.vue';
import ChamadaOrcamento from '@/components/ChamadaOrcamento.vue';
import SobreEmpresa from '@/components/SobreEmpresa.vue';
import CaixaCliente from '@/components/CaixaCliente.vue';
import AvaliacoesGoogle from '@/components/AvaliacoesGoogle.vue';
import SimuladorSolar from '@/components/SimuladorSolar.vue';
import { conteudoSite, urlDaImagem } from '@/uteis/conteudo';

export default defineComponent({
  name: 'HomeIndex',
  components:{
    HeroPrincipal,
    FaixaNumeros,
    ContatoIndex,
    CaixaServico,
    ChamadaOrcamento,
    SobreEmpresa,
    CaixaCliente,
    AvaliacoesGoogle,
    SimuladorSolar
},
  data() {
    return {
      conteudo: conteudoSite,
      // ilustrações fixas dos cartões de serviço, por posição
      imagensServicos: [
        'servicos/orcamento.svg',
        'servicos/projetos.svg',
        'servicos/execucao.svg',
        'servicos/automacao.svg',
        'servicos/solar.svg',
        'servicos/startup.svg'
      ]
    };
  },
  methods: {
    urlDaImagem
  }
});

</script>

<style scoped>

.secao-clientes {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 72px 0 16px;
}

.container-images {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.secao-servicos {
  background-color: var(--cor-fundo);
  border-top: 1px solid var(--cor-linha);
  border-bottom: 1px solid var(--cor-linha);
  padding: 128px 0;
  scroll-margin-top: 84px;
}

.cabecalho-servicos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
}

.titulos-servicos {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 640px;
}

.rotulo-amarelo {
  color: var(--cor-destaque-texto);
}

.apoio-servicos {
  margin: 0;
  max-width: 360px;
  color: var(--cor-texto-suave);
  font-size: 16px;
}

.main-servico {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1250px) {
  .main-servico {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .container-images {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .secao-servicos {
    padding: 56px 0;
    scroll-margin-top: 68px;
  }

  .cabecalho-servicos {
    margin-bottom: 28px;
  }
}

@media (max-width: 768px) {
  .main-servico {
    grid-template-columns: 1fr;
  }

  .container-images {
    gap: 12px;
  }
}

</style>
