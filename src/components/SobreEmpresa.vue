<template>
    <section id="empresa" class="main-sobre">
        <div class="container-sobre">
            <div class="coluna-imagem">
                <img src="/conteudo/silos.jpg" alt="Instalação industrial em silos de armazenagem" class="imagem-sobre" loading="lazy">
                <div class="cartao-obras">
                    <span class="numero-obras"> +500 </span>
                    <span class="legenda-obras"> obras entregues </span>
                </div>
            </div>
            <div class="coluna-texto">
                <span class="rotulo-secao"> {{ TituloPrimeiroParagrafo }} </span>
                <h2 class="titulo-secao"> {{ Titulo }} </h2>
                <p class="paragrafo"> {{ TextoPrimerioPagrafo }} </p>
                <p class="paragrafo"> {{ TextoSegundoPagrafo }} </p>
                <div class="grade-areas">
                    <div class="item-area"> <span class="ponto-area"></span> Usinas fotovoltaicas </div>
                    <div class="item-area"> <span class="ponto-area"></span> Automação industrial </div>
                    <div class="item-area"> <span class="ponto-area"></span> Data centers </div>
                    <div class="item-area"> <span class="ponto-area"></span> Telecomunicações e dados </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SobreEmpresa',
    props: {
        Titulo: {
            type: String,
            default: "Solidez e confiança desde 2010."
        },
        TextoPrimerioPagrafo: {
            type: String,
            default: ""
        },
        TituloPrimeiroParagrafo: {
            type: String,
            default: ""
        },
        TextoSegundoPagrafo: {
            type: String,
            default: ""
        },
        TituloSegundoParagrafo: {
            type: String,
            default: ""
        },
    }
});
</script>

<style scoped>

.main-sobre {
    padding: 72px 0 128px;
    scroll-margin-top: 84px;
}

.container-sobre {
    display: flex;
    flex-wrap: wrap;
    gap: 72px;
    align-items: center;
}

.coluna-imagem {
    flex: 1 1 400px;
    min-width: 0;
    position: relative;
}

.imagem-sobre {
    display: block;
    width: 100%;
    height: 520px;
    object-fit: cover;
    object-position: 70% 50%;
    border-radius: 28px;
}

.cartao-obras {
    position: absolute;
    right: -20px;
    bottom: -20px;
    padding: 22px 26px;
    background: #141213;
    border: 1px solid #353233;
    color: #F4F3EF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.numero-obras {
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-stretch: 110%;
    font-size: 40px;
    line-height: 1;
    color: #FFF212;
}

.legenda-obras {
    font-size: 14px;
    color: #D6D3CE;
}

.coluna-texto {
    flex: 1 1 440px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.paragrafo {
    margin: 0;
    color: var(--cor-texto-suave);
}

.grade-areas {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    padding-top: 8px;
}

.item-area {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: var(--cor-superficie);
    border: 1px solid var(--cor-linha);
    border-radius: 14px;
    font-weight: 600;
    font-size: 15px;
}

.ponto-area {
    flex: 0 0 10px;
    width: 10px;
    height: 10px;
    background: #FFF212;
    border: 1px solid var(--cor-destaque-texto);
    border-radius: 50%;
    display: inline-block;
}

@media (max-width: 1024px) {
    .main-sobre {
        padding: 40px 0 64px;
        scroll-margin-top: 68px;
    }

    .container-sobre {
        gap: 24px;
    }

    .imagem-sobre {
        height: 240px;
    }

    .cartao-obras {
        right: 12px;
        bottom: 12px;
        padding: 14px 18px;
    }

    .numero-obras {
        font-size: 30px;
    }

    .grade-areas {
        grid-template-columns: 1fr;
    }
}

</style>
