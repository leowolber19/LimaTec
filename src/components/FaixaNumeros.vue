<template>
    <div class="main-numeros">
        <div class="container-site grade-numeros">
            <div class="item-numero">
                <span class="valor-numero"> 2010 </span>
                <span class="legenda-numero"> Atuando desde </span>
            </div>
            <div class="item-numero">
                <span class="valor-numero"> +500 </span>
                <span class="legenda-numero"> Obras por todo o Brasil </span>
            </div>
            <div class="item-numero">
                <span class="valor-numero"> 24h </span>
                <span class="legenda-numero"> Atendimento, de segunda a domingo </span>
            </div>
            <div class="item-numero">
                <span class="valor-numero"> 4 setores </span>
                <span class="legenda-numero"> Industrial, rural, comercial e residencial </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FaixaNumeros'
});
</script>

<style scoped>

.main-numeros {
    border-top: 1px solid var(--cor-linha);
    border-bottom: 1px solid var(--cor-linha);
    background: var(--cor-fundo);
}

.grade-numeros {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.item-numero {
    padding: 36px 24px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-left: 1px solid var(--cor-linha);
}

.item-numero:first-child {
    border-left: none;
    padding-left: 0;
}

.valor-numero {
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-stretch: 110%;
    font-size: 44px;
    line-height: 1;
    color: var(--cor-destaque-texto);
}

.legenda-numero {
    font-size: 15px;
    color: var(--cor-texto-suave);
}

@media (max-width: 1024px) {
    .grade-numeros {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .item-numero {
        padding: 24px 20px;
    }

    .item-numero:nth-child(odd) {
        border-left: none;
        padding-left: 0;
    }

    .item-numero:nth-child(-n+2) {
        border-bottom: 1px solid var(--cor-linha);
    }

    .valor-numero {
        font-size: 32px;
    }

    .legenda-numero {
        font-size: 14px;
    }
}

</style>
