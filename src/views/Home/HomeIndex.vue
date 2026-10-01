<template>

  <!-- HERO PRINCIPAL (carrossel de obras) -->
  <HeroPrincipal
    TextoWhatsApp="Olá, Gostaria de fazer um orçamento"
    SubTitulo="Do projeto ao start-up, para os setores industrial, rural, comercial e residencial." />

  <!-- FAIXA DE NÚMEROS -->
  <FaixaNumeros />

  <!-- CONTEÚDO DO SITE -->
  <section class="module content">
    <div class="container-site">

      <!-- CLIENTES -->
      <div class="secao-clientes">
        <span class="rotulo-secao"> Quem confia na LimaTec </span>
        <div class="container-images">
            <CaixaCliente
              Imagem="Cliente1.jpeg"
              Nome="Laudejá Agronegócio"
              height="78px" />

            <CaixaCliente
              Imagem="Cliente2.jpeg"
              Nome="Vale Urucum"
              height="78px" />

            <CaixaCliente
              Imagem="Cliente3.jpeg"
              Nome="Curicaca Armazéns Gerais"
              height="80px" />

            <CaixaCliente
              Imagem="Cliente4.svg"
              Nome="Cliente LimaTec"
              height="62px" />
        </div>
      </div>

      <!-- EMPRESA -->
      <SobreEmpresa
        TituloPrimeiroParagrafo="SOBRE NÓS"
        TextoPrimerioPagrafo="Desde 2010 na execução de instalações elétricas e automações industriais, a LimaTec firmou sua marca com mais de 500 obras por todo o Brasil, atuando nos setores industrial, rural, comercial e fotovoltaico."
        TituloSegundoParagrafo="ÁREAS ATUANTES"
        TextoSegundoPagrafo="Construímos usinas fotovoltaicas, sistemas de controle e automação industrial e soluções para data centers e telecomunicações — instalações bem executadas, com segurança e sem comprometer o andamento da obra."
        />
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section id="servicos" class="secao-servicos fundo-grade">
    <div class="container-site">
      <div class="cabecalho-servicos">
        <div class="titulos-servicos">
          <span class="rotulo-secao rotulo-amarelo"> Serviços </span>
          <h2 class="titulo-secao"> Do primeiro orçamento à operação em plena carga. </h2>
        </div>
        <p class="apoio-servicos"> Toque em um serviço para falar direto com a equipe pelo WhatsApp. </p>
      </div>

      <div class="main-servico">
        <CaixaServico
          Numero="01"
          Imagem="servicos/orcamento.svg"
          Texto="Nossa equipe faz visita no local e levantamento dos pontos importantes para um orçamento preciso."
          Titulo="Orçamento e proposta"
          TextoWhatsApp="Olá gostaria de saber mais sobre Orçamento e Proposta" />

        <CaixaServico
          Numero="02"
          Imagem="servicos/projetos.svg"
          Texto="Projetos elétricos, fotovoltaicos, de incêndio e pânico, conforme as normativas de segurança."
          Titulo="Elaboração de projetos"
          TextoWhatsApp="Olá gostaria de saber mais sobre Elaboração de Projetos" />

        <CaixaServico
          Numero="03"
          Imagem="servicos/execucao.svg"
          Texto="Instalações e montagens elétricas e de automação industrial, predial, comercial e residencial."
          Titulo="Execução de projetos"
          TextoWhatsApp="Olá gostaria de saber mais sobre Execução de projetos" />

        <CaixaServico
          Numero="04"
          Imagem="servicos/automacao.svg"
          Texto="Sistemas de controle e automação personalizados, da indústria à casa inteligente: iluminação, climatização e segurança residencial."
          Titulo="Automação"
          TextoWhatsApp="Olá gostaria de saber mais sobre Automação" />

        <CaixaServico
          Numero="05"
          Imagem="servicos/solar.svg"
          Texto="Deixe o sol pagar sua conta de energia! Faça um orçamento conosco."
          Titulo="Energia solar"
          TextoWhatsApp="Olá gostaria de saber mais sobre Energia Solar" />

        <CaixaServico
          Numero="06"
          Imagem="servicos/startup.svg"
          Texto="Planejamento para comissionamento, start-up e operação assistida de todo o sistema."
          Titulo="Comissionamento e start-up"
          TextoWhatsApp="Olá gostaria de saber mais sobre Comissionamento e Start-up" />
      </div>
    </div>
  </section>

  <!-- SIMULADOR DE ECONOMIA SOLAR -->
  <SimuladorSolar />

  <!-- AVALIAÇÕES DO GOOGLE -->
  <AvaliacoesGoogle />

  <!-- CHAMADA PARA ORÇAMENTO -->
  <ChamadaOrcamento
    Titulo="Procura alguma solução ou precisa de um orçamento?"
    SubTitulo="Entre em contato conosco."
    TextoWhatsApp="Olá, Gostaria de fazer um orçamento" />

  <!-- CONTATOS -->
  <section class="module content">
    <div class="container-site">
      <ContatoIndex
        TelefonePrimario=""
        TelefoneSecundario="(67) 99987-1739"
        TextoWhatsApp="Preciso de um eletricista!"
        Logradouro="R. Vinte de Setembro - Rincão Bonito"
        Cidade="Bonito - MS"
        Cep="79290-000"
        Pais="Brasil"
        DiasAtendimento="Segunda à Domingo"
        HorasAtendimento="Atendimento 24 horas" />
    </div>
  </section>

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
}
});

</script>

<style scoped>

.secao-clientes {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 48px 0 8px;
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
  padding: 96px 0;
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
