<template>
    <div class="entrar-contato">
        <p> {{ Texto1 }} </p>
        <p> {{ Texto2 }} </p>
        <p class="SCROLL_CONTATO"> {{ Texto3 }} </p>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TextoCentralizado',
    props: {
      Texto1: {
        type: String,
        default: ""
      },
      Texto2: {
        type: String,
        default: ""
      },
      Texto3: {
        type: String,
        default: ""
      },
    }
  });
</script>
  
<style scoped>

.entrar-contato {
  font-size: 22px;
  text-align: center;
  margin: 5em 0 4em;
}


@media (max-width: 1250px) {
    .entrar-contato {
      font-size: 18px;
    }
}

</style>