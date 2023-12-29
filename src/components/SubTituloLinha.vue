<template>
    <div class="title-sobre" v-if=!right> {{ Texto }} </div>
    <div class="title-sobre text-right" v-if=right> {{ Texto }} </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SubTituloLinha',
    props: {
        Texto: {
            type: String,
            default: ""
        },
        right: {
            type: Boolean,
            default: false
        }
    },
});
</script>
  
<style scoped>
  
.title-sobre{
    margin-bottom: 1em;
    border-bottom: 2px solid #fbcb2c;
    color: #fbcb2c;
    font-size: 1.4em;
    padding-bottom: 10px;
}

.text-right{
    text-align: right;
}

</style>