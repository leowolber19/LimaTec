<template>
    <section id="inicio" class="main-hero fundo-grade">
        <div class="container-site conteudo-hero">
            <div class="coluna-texto">
                <div class="selo-local">
                    <span class="ponto-amarelo"></span>
                    {{ conteudo.hero.selo }}
                </div>
                <h1 class="titulo-hero">
                    {{ conteudo.hero.titulo }} <span class="marcacao">{{ conteudo.hero.tituloDestaque }}</span>
                </h1>
                <p class="subtitulo-hero"> {{ conteudo.hero.subtitulo }} </p>
                <div class="botoes-hero">
                    <button class="botao-pilula" @click="abrirWhatsApp()" :title="TextoWhatsApp">
                        Fazer um orçamento
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </button>
                    <a class="botao-contorno" href="#servicos" @click.prevent="rolarPara('servicos')"> Ver serviços </a>
                </div>
            </div>

            <!-- CARROSSEL DE OBRAS (avança sozinho; pausa com o mouse em cima) -->
            <div class="coluna-imagem" @mouseenter="pausar()" @mouseleave="retomar()">
                <div class="moldura-amarela"></div>

                <div class="carrossel">
                    <img v-for="(slide, i) in slides" :key="`${i}-${slide.imagem}`"
                        :src="urlDaImagem(slide.imagem)"
                        :alt="slide.titulo"
                        class="imagem-hero"
                        :class="{ 'slide-ativo': i === indice }">
                </div>

                <transition name="troca" mode="out-in">
                    <div class="cartao-flutuante" :key="indice">
                        <div class="icone-cartao">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#141213" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4.5 13h5L10 22l8.5-11h-5z"/></svg>
                        </div>
                        <div class="texto-cartao">
                            <span class="titulo-cartao"> {{ slideAtual.titulo }} </span>
                            <span class="subtitulo-cartao"> {{ slideAtual.subtitulo }} </span>
                        </div>
                    </div>
                </transition>

                <div class="pontos-carrossel">
                    <button v-for="(slide, i) in slides" :key="`ponto-${slide.imagem}`"
                        class="ponto"
                        :class="{ 'ponto-ativo': i === indice }"
                        @click="irParaSlide(i)"
                        :aria-label="`Ver foto ${i + 1}: ${slide.titulo}`"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { abreWhatsApp } from '@/uteis/contato';
import { rolarPara } from '@/uteis/navegacao';
import { conteudoSite, urlDaImagem, Slide } from '@/uteis/conteudo';

const INTERVALO_MS = 3500;

export default defineComponent({
    name: 'HeroPrincipal',
    props: {
        TextoWhatsApp: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            indice: 0,
            temporizador: 0,
            conteudo: conteudoSite
        };
    },
    computed: {
        slides(): Slide[] {
            return this.conteudo.hero.slides;
        },
        slideAtual(): Slide {
            return this.slides[this.indice % this.slides.length] ?? this.slides[0];
        }
    },
    mounted() {
        this.retomar();
    },
    beforeUnmount() {
        this.pausar();
    },
    methods: {
        abrirWhatsApp() {
            abreWhatsApp(this.TextoWhatsApp, 'Orçamento (topo)');
        },
        rolarPara,
        urlDaImagem,
        avancar() {
            this.indice = (this.indice + 1) % Math.max(this.slides.length, 1);
        },
        irParaSlide(i: number) {
            this.indice = i;
            this.pausar();
            this.retomar();
        },
        pausar() {
            if (this.temporizador) {
                window.clearInterval(this.temporizador);
                this.temporizador = 0;
            }
        },
        retomar() {
            if (!this.temporizador) {
                this.temporizador = window.setInterval(this.avancar, INTERVALO_MS);
            }
        }
    }
});
</script>

<style scoped>

.main-hero {
    background-color: var(--cor-fundo);
    padding-top: 84px;
    overflow: hidden;
}

.conteudo-hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 64px;
    padding-top: 64px;
    padding-bottom: 96px;
}

.coluna-texto {
    flex: 1 1 480px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: flex-start;
}

.selo-local {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border: 1px solid var(--cor-linha);
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-texto-suave);
    background: var(--cor-superficie);
}

.ponto-amarelo {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FFF212;
    border: 1px solid var(--cor-destaque-texto);
    display: inline-block;
}

.titulo-hero {
    margin: 0;
    font-size: clamp(44px, 5.4vw, 78px);
    line-height: 1.04;
    letter-spacing: -0.025em;
}

.marcacao {
    color: var(--cor-destaque-texto);
    background: var(--cor-marcacao);
    border-radius: 10px;
    padding: 0 0.1em;
    margin: 0 -0.1em;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
}

.subtitulo-hero {
    margin: 0;
    font-size: 20px;
    line-height: 1.55;
    color: var(--cor-texto-suave);
    max-width: 520px;
}

.botoes-hero {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding-top: 8px;
}

.coluna-imagem {
    flex: 1 1 440px;
    min-width: 0;
    position: relative;
    min-height: 520px;
}

.moldura-amarela {
    position: absolute;
    top: -18px;
    right: -18px;
    width: 62%;
    height: 62%;
    border: 2px solid #FFF212;
    border-radius: 28px;
}

.carrossel {
    position: relative;
    width: 100%;
    height: 520px;
    border-radius: 28px;
    overflow: hidden;
    /* fundo sólido: evita a moldura amarela "vazar" durante o crossfade das fotos */
    background: var(--cor-fundo-2);
}

.imagem-hero {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 60%;
    opacity: 0;
    transition: opacity .9s ease;
}

.slide-ativo {
    opacity: 1;
}

.cartao-flutuante {
    position: absolute;
    left: -28px;
    bottom: 56px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    background: #F4F3EF;
    color: #141213;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, .35);
}

.icone-cartao {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #FFF212;
    display: flex;
    align-items: center;
    justify-content: center;
}

.texto-cartao {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
}

.titulo-cartao {
    font-weight: 600;
    font-size: 16px;
}

.subtitulo-cartao {
    font-size: 14px;
    color: #55524F;
}

/* troca suave do cartão junto com o slide */
.troca-enter-active,
.troca-leave-active {
    transition: opacity .3s ease, transform .3s ease;
}

.troca-enter-from,
.troca-leave-to {
    opacity: 0;
    transform: translateY(8px);
}

.pontos-carrossel {
    position: absolute;
    right: 20px;
    bottom: 18px;
    display: flex;
    gap: 8px;
}

.ponto {
    width: 9px;
    height: 9px;
    border: none;
    border-radius: 50%;
    background: rgba(244, 243, 239, .5);
    cursor: pointer;
    padding: 0;
    transition: background-color .25s ease, width .25s ease;
}

.ponto-ativo {
    width: 26px;
    border-radius: 999px;
    background: #FFF212;
}

@media (max-width: 1024px) {
    .main-hero {
        padding-top: 68px;
    }

    .conteudo-hero {
        padding-top: 36px;
        padding-bottom: 48px;
        gap: 32px;
    }

    .titulo-hero {
        font-size: 42px;
    }

    .subtitulo-hero {
        font-size: 17px;
    }

    .coluna-imagem {
        min-height: 0;
    }

    .carrossel {
        height: 280px;
        border-radius: 22px;
    }

    .moldura-amarela {
        display: none;
    }

    .cartao-flutuante {
        left: 12px;
        bottom: 12px;
        padding: 12px 14px;
    }

    .titulo-cartao {
        font-size: 14px;
    }

    .subtitulo-cartao {
        font-size: 12px;
    }

    .pontos-carrossel {
        right: 14px;
        bottom: 14px;
    }

    .botoes-hero {
        width: 100%;
    }

    .botoes-hero .botao-pilula,
    .botoes-hero .botao-contorno {
        width: 100%;
    }
}

</style>
