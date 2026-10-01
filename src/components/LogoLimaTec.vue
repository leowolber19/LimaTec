<template>
    <!-- Logo original da LimaTec. No tema escuro usa a variante com contorno claro
         (traço reduzido para ficar leve); no claro, o logo original sem contorno. -->
    <svg class="quando-escuro" :style="{ height: Altura }" viewBox="0 0 1174.25 1271.08"
        fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
        <g fill="#373435" stroke="#FEFEFE" stroke-opacity=".8" stroke-width="30" stroke-miterlimit="22.9256">
            <path d="M454.79 1168.75l395.55 -685.25 -175.21 -0.37 44.02 -377.98 0.33 -2.81 0.32 0.18 54.75 31.6 76.55 44.2 153.92 88.86c70,40.41 110.06,109.8 110.06,190.63l0 157.39 -0.01 199.49c-0.47,79.88 -40.14,148.46 -109.2,188.7l-310.69 179.36c-69.52,39.28 -148.79,38.91 -218.13,-1.12l-22.28 -12.88z"/>
            <path d="M59.15 615.21l0.01 -158.52c0.38,-80.34 40.39,-149.27 110.06,-189.5l153.92 -88.86 153.93 -88.87c69.62,-40.2 149.27,-40.4 219,-0.63l23.4 13.51 -396.31 685.62 176 0 -44.36 380.8 0 0.02 -131.65 -76 -153.92 -88.86c-70,-40.41 -110.06,-109.8 -110.06,-190.63l0 -177.72 0 -20.34z"/>
        </g>
        <g fill="#373435">
            <path d="M454.79 1168.75l395.55 -685.25 -175.21 -0.37 44.02 -377.98 0.33 -2.81 0.32 0.18 54.75 31.6 76.55 44.2 153.92 88.86c70,40.41 110.06,109.8 110.06,190.63l0 157.39 -0.01 199.49c-0.47,79.88 -40.14,148.46 -109.2,188.7l-310.69 179.36c-69.52,39.28 -148.79,38.91 -218.13,-1.12l-22.28 -12.88z"/>
            <path d="M59.15 615.21l0.01 -158.52c0.38,-80.34 40.39,-149.27 110.06,-189.5l153.92 -88.86 153.93 -88.87c69.62,-40.2 149.27,-40.4 219,-0.63l23.4 13.51 -396.31 685.62 176 0 -44.36 380.8 0 0.02 -131.65 -76 -153.92 -88.86c-70,-40.41 -110.06,-109.8 -110.06,-190.63l0 -177.72 0 -20.34z"/>
            <polygon fill="#FFF212" points="499.53,787.97 455.17,1168.77 850.72,483.52 675.51,483.15 719.87,102.31 323.53,787.97"/>
            <polygon stroke="#FFF212" stroke-width="4.19" points="587.14,765.94 361.25,765.94 511.92,505.27 455.14,711.73"/>
            <polygon stroke="#FFF212" stroke-width="4.19" points="719.12,559.32 586.75,505.14 812.38,505.51 662,765.94"/>
        </g>
    </svg>
    <img class="quando-claro" :style="{ height: Altura }" src="../../public/icon.svg" alt="" aria-hidden="true">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LogoLimaTec',
    props: {
        Altura: {
            type: String,
            default: "48px"
        }
    }
});
</script>

<style scoped>

svg, img {
    width: auto;
    display: block;
}

</style>
