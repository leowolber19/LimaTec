<template>

  <!-- IMAGEM PRINCIPAL -->
  <ImagemParallax 
    Imagem="ImagemPrincipal.jpg"
    TextoWhatsApp="Olá, Gostaria de fazer um orçamento"
    Titulo="Elétrica, Automação e Energia Solar"
    SubTitulo="Industrial, Rural, Comercial e Residencial" />

  <!-- CONTEÚDO DO SITE -->
  <section class="module content">
    <div class="container-module">

      <!-- EMPRESA -->
      <SobreEmpresa
        TituloPrimeiroParagrafo="SOBRE NÓS"
        TextoPrimerioPagrafo="Desde 2010 atuando seriamente na execução de Instalações Elétricas e Automações Industriais, a LimaTec conseguiu firmar sua marca nesse mercado com participação em mais de 500 obras por todo Brasil e conquistar uma imagem de solidez e confiança. Ao longo desses anos, nos dedicamos em expandir nossa área de atuação, trabalhando também no setor industrial, rural e fotovoltaico."
        TituloSegundoParagrafo="ÁREAS ATUANTES"
        TextoSegundoPagrafo="A LimaTec se orgulha em ter desenvolvido know-how suficiente para construir usinas fotovoltaicas, sistemas de controle e automação industrial, sistemas especiais para Data Centers, telecomunicações e dados. E o mais importante: orgulho de tornar as edificações habitáveis e as indústrias prontas para operar em plena carga, realizando as instalações da melhor maneira possível, sem comprometer o andamento do trabalho e a segurança." 
        />
      
      <!-- CLIENTES -->
      <SubTituloLinha Texto="ALGUNS CLIENTES" />

      <div class="container-images SCROLL_SERVICO">
          <CaixaCliente 
            Imagem="Cliente1.jpeg"
            height="120px" />

          <CaixaCliente 
            Imagem="Cliente2.jpeg"
            height="100px" />

          <CaixaCliente 
            Imagem="Cliente3.jpeg"
            height="100px" />

          <CaixaCliente 
            Imagem="Cliente4.svg" 
            height="95px"/>
      </div>
      
      <!-- SERVIÇOS -->
      <SubTituloPagina Texto="Serviços" />

      <div class="main-servico"> 
        <CaixaServico 
          Imagem="Servico1.jpg"
          Texto="Nossa equipe faz visita no local e levantamento dos pontos importantes para um orçamento preciso."
          Titulo="ORÇAMENTO E PROPOSTA"
          TextoWhatsApp="Olá gostaria de saber mais sobre Orçamento e Proposta" />

        <CaixaServico 
          Imagem="Servico2.png"
          Texto="Projetos elétricos, fotovoltaicos, incendio e pânico conforme as normativas de segurança."
          Titulo="ELABORAÇÃO DE PROJETOS"
          TextoWhatsApp="Olá gostaria de saber mais sobre Elaboração de Projetos" />

        <CaixaServico 
          Imagem="Servico3.jpg"
          Texto="Instalaçoes e montagens eletricas e e automação industrial, predial, comercial e residencial."
          Titulo="EXECUÇÃO DE PROJETOS"
          TextoWhatsApp="Olá gostaria de saber mais sobre Execução de projetos" />

        <CaixaServico 
          Imagem="Servico4.jpg"
          Texto="Desenvolvimento de sistemas de controle e automação personalizados."
          Titulo="AUTOMAÇÃO"
          TextoWhatsApp="Olá gostaria de saber mais sobre Automação" />

        <CaixaServico 
          Imagem="Servico5.jpg"
          Texto="Deixe o sol pagar sua conta de energia! Faça um orçamento conosco."
          Titulo="ENERGIA SOLAR"
          TextoWhatsApp="Olá gostaria de saber mais sobre Energia Solar" />

        <CaixaServico 
          Imagem="Servico6.jpg"
          Texto="Planejamento para comissionamento, start-up e operação assistida de todo o sistema."
          Titulo="COMISSIONAMENTO E START-UP"
          TextoWhatsApp="Olá gostaria de saber mais sobre Comissionamento e Start-up" />
      </div>
      
      <TextoCentralizado 
        Texto1=""
        Texto2="Procura alguma solução ou precisa de um orçamento?"
        Texto3="Entre em contato conosco." />

        
      <!-- CONTATOS -->
      <SubTituloPagina Texto="Contatos" />

      <ContatoIndex 
        TelefonePrimario=""
        TelefoneSecundario="(67) 99987-1739"
        TextoWhatsApp="Preciso de um eletricista!"
        Logradouro="Rua 31 de março, 1600 - Centro"
        Cidade="Bonito - MS"
        Cep="79290-000"
        Pais="Brasil"
        DiasAtendimento="Segunda à Domingo"
        HorasAtendimento="Atendimento 24 horas" />
        
    </div>
  </section>

  <WhatsappFlutuante TextoWhatsApp="Preciso de um eletricista!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImagemParallax from '../../components/ImagemParallax.vue';
import ContatoIndex from '../Contato/ContatoIndex.vue';
import CaixaServico from '@/components/CaixaServico.vue';
import SubTituloPagina from '@/components/SubTituloPagina.vue';
import WhatsappFlutuante from '@/components/WhatsappFlutuante.vue';
import TextoCentralizado from '@/components/TextoCentralizado.vue';
import SobreEmpresa from '@/components/SobreEmpresa.vue';
import CaixaCliente from '@/components/CaixaCliente.vue';
import SubTituloLinha from '@/components/SubTituloLinha.vue';

export default defineComponent({
  name: 'HomeIndex',
  components:{
    ImagemParallax,
    ContatoIndex,
    CaixaServico,
    SubTituloPagina,
    WhatsappFlutuante,
    TextoCentralizado,
    SobreEmpresa,
    CaixaCliente,
    SubTituloLinha
}
});

</script>

<style scoped>

.container-module {
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
}

.main-servico{
  display:flex;
  gap: 5em 3em;
  flex-wrap: wrap;
  justify-content:center;
}

.container-images{
    display: flex;
    gap: 3em 4em;
    justify-content: space-around;
    flex-wrap: wrap;
}

.w-100{
    width: 100%;
}

</style>
