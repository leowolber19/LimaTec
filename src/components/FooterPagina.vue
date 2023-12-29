<template>
  <div class="footer-main">
      <div class="footer-midias">
        <a :href=LinkFacebook target="_blank"> <i class="fab fa-facebook-f"> </i></a>
        <a :href=LinkLinkedin target="_blank"> <i class="fab fa-linkedin-in"> </i> </a>
        <a :href=LinkInstagram target="_blank"><i class="fab fa-instagram"> </i> </a>
      </div>
      <p class="footer-title"> {{ Titulo }} </p>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'FooterPagina',
props: {
    Titulo: {
        type: String,
        default: ""
    },
    LinkLinkedin: {
        type: String,
        default: ""
    },
    LinkFacebook: {
        type: String,
        default: ""
    },
    LinkInstagram: {
        type: String,
        default: ""
    }
},

});
</script>
  
<style scoped>

.fa-instagram:hover{
  color:#ff0073;
  cursor: pointer;
  transition: .5s;
}

.fa-linkedin-in:hover{
  color:#005fff;
  cursor: pointer;
  transition: .5s;
}

.fa-facebook-f:hover{
  color:#0c4cb8;
  cursor: pointer;
  transition: .5s;
}

.footer-title{
  margin-top: 2em;
  font-size: .9em;
}

.footer-midias{
  justify-content: center;
  display: flex;
  gap: 1.5em;
  align-items: center;
}

.footer-main{
  margin-top: 3em;
  background-color: #f8f8f8;
  padding: 2em;
  color: darkslateblue;
  text-align: center;
}

@media (max-width: 1250px) {
    .footer-title{
      font-size: .75em;;
    }
}

</style>