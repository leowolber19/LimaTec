<template>
    <img :src="require(`../assets/${Imagem}`)" :style="{ height: height }">
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CaixaCliente',
    props: {
        Imagem: {
            type: String,
            default: "logo.png"
        },
        height: {
            type: String,
            default: "120px"
        }
    }
  });
</script>
  
<style scoped>

</style>