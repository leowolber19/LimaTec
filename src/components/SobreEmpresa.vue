<template>
    <div class="main-sobre">
        <div class="container-sobre">
          <div class="w-45">
            <SubTituloLinha :Texto=TituloPrimeiroParagrafo />
            <p class="paragrafo">  {{ TextoPrimerioPagrafo }} </p>
          </div>
          <div class="w-45">
            <SubTituloLinha :Texto=TituloSegundoParagrafo :right=true />
            <p class="paragrafo"> {{ TextoSegundoPagrafo }} </p>
          </div>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
import SubTituloLinha from './SubTituloLinha.vue';
  
  export default defineComponent({
    name: 'SobreEmpresa',
    props: {
        TextoPrimerioPagrafo: {
            type: String,
            default: ""
        },
        TituloPrimeiroParagrafo: {
            type: String,
            default: ""
        },
        TextoSegundoPagrafo: {
            type: String,
            default: ""
        },
        TituloSegundoParagrafo: {
            type: String,
            default: ""
        },
    },
    components: { SubTituloLinha }
});
</script>
  
<style scoped>

.main-sobre{
    margin-bottom:5em;
}

.container-sobre{
    display: flex;
    line-height: 1.85em;
    padding: 6em 0 4em;
    gap: 4em; 
    text-align: justify;
    flex-wrap: wrap;
}

.title-sobre{
    margin-bottom: 1em;
    border-bottom: 2px solid #fbcb2c;
    color: #fbcb2c;
    font-size: 1.2em;
    padding-bottom: 10px;
}

.w-45{
    width: 45%;
}

.paragrafo{
    margin: 0;
    font-size: 16px;
}

@media (max-width: 1250px) {
    .w-45 {
        width: 100%;
    }
}

</style>