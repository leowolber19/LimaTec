<template>
  <p class="title"> {{Texto}} </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubTituloPagina',
  props: {
    Texto: {
      type: String,
      default: ""
    }
  },
  
});
</script>

<style scoped>

.title {
  text-align: center;
  font-size: 30px;color: #fbcb2c;
  margin: 3em 0 2em;
  font-weight: 300;
  text-transform: uppercase;
}

</style>