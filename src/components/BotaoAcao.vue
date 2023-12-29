<template>
    <div class="button-home"> {{Texto}} </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BotaoAcao',
    props: {
      Texto: {
        type: String,
        default: ""
      },
      Onclick: {
        type: String,
        default: ""
      }
    }
  });
</script>
  
<style scoped>
  
.button-home{
  background: #fff212;
  padding: 0.75em 1.5em;
  border-radius: 5px;
  cursor: pointer;
  color: #373435;
  font-size: .9em;
  font-weight: 500;
  width: fit-content;
  z-index: 9 !important;
}


</style>