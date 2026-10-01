<template>
    <div class="main-numeros">
        <!-- números vêm do painel -->
        <div class="container-site grade-numeros">
            <div class="item-numero" v-for="numero in numeros" :key="numero.legenda">
                <span class="valor-numero"> {{ numero.valor }} </span>
                <span class="legenda-numero"> {{ numero.legenda }} </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { conteudoSite, Numero } from '@/uteis/conteudo';

export default defineComponent({
    name: 'FaixaNumeros',
    computed: {
        numeros(): Numero[] {
            return conteudoSite.numeros;
        }
    }
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
