<template>
    <img src="../assets/whatsapp.png" class="button-whatsapp" @click="abreWhatsApp()" :title=TextoWhatsApp> 
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'WhatsappFlutuante',
    props: {
      Texto: {
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

.button-whatsapp {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 60px;
  z-index: 11; 
  cursor: pointer;
}


</style>