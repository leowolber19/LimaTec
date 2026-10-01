<template>
    <section id="orcamento" class="main-simulador">
        <div class="container-site">
            <div class="cartao-simulador">
                <div class="coluna-chamada">
                    <span class="rotulo-secao rotulo-amarelo"> Simulador </span>
                    <h2 class="titulo-secao"> Quanto dá para economizar com energia solar? </h2>
                    <p class="texto-chamada"> Digite o valor da sua conta de luz e veja uma estimativa na hora. Depois é só pedir a simulação completa, sem compromisso. </p>
                </div>

                <div class="coluna-calculo">
                    <label class="rotulo-campo" for="conta-luz"> Sua conta de luz por mês </label>
                    <div class="campo-valor">
                        <span class="prefixo"> R$ </span>
                        <input id="conta-luz" type="number" inputmode="numeric" min="0" step="50"
                            v-model.number="conta" placeholder="500">
                    </div>
                    <div class="valores-rapidos">
                        <button v-for="valor in [300, 500, 1000]" :key="valor"
                            class="chip-valor" :class="{ 'chip-ativo': conta === valor }"
                            @click="conta = valor"> R$ {{ valor }} </button>
                    </div>

                    <div class="resultados" v-if="contaValida">
                        <div class="resultado">
                            <span class="valor-resultado"> {{ formatar(economiaMensal) }} </span>
                            <span class="legenda-resultado"> por mês </span>
                        </div>
                        <div class="resultado">
                            <span class="valor-resultado"> {{ formatar(economiaMensal * 12) }} </span>
                            <span class="legenda-resultado"> por ano </span>
                        </div>
                        <div class="resultado">
                            <span class="valor-resultado"> {{ formatar(economiaMensal * 12 * 25) }} </span>
                            <span class="legenda-resultado"> em 25 anos </span>
                        </div>
                    </div>

                    <button class="botao-pilula botao-simular" :disabled="!contaValida" @click="pedirSimulacao()">
                        Receber simulação completa
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"/></svg>
                    </button>

                    <p class="aviso-simulador"> Estimativa com economia de até {{ PERCENTUAL_ECONOMIA * 100 }}% da conta. O valor real depende do projeto e do local. </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { abreWhatsApp } from '@/uteis/contato';

// Percentual estimado de economia da conta de luz com energia solar
const PERCENTUAL_ECONOMIA = 0.9;

export default defineComponent({
    name: 'SimuladorSolar',
    data() {
        return {
            conta: null as number | null,
            PERCENTUAL_ECONOMIA
        };
    },
    computed: {
        contaValida(): boolean {
            return typeof this.conta === 'number' && this.conta >= 50;
        },
        economiaMensal(): number {
            return (this.conta ?? 0) * PERCENTUAL_ECONOMIA;
        }
    },
    methods: {
        formatar(valor: number): string {
            // valores grandes viram "R$ 270 mil" para não estourar o cartão
            if (valor >= 100000) {
                return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact', maximumFractionDigits: 1 });
            }
            return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
        },
        pedirSimulacao() {
            abreWhatsApp(`Olá! Pago cerca de R$ ${this.conta} por mês de energia e gostaria de uma simulação de energia solar.`, 'Simulador solar');
        }
    }
});
</script>

<style scoped>

.main-simulador {
    background: var(--cor-fundo);
    padding: 96px 0;
    scroll-margin-top: 64px;
}

.cartao-simulador {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    padding: 56px;
    background: var(--cor-superficie);
    border: 1px solid var(--cor-linha);
    border-radius: 28px;
    overflow: hidden;
    box-sizing: border-box;
}

.coluna-chamada {
    flex: 1 1 380px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
}

.rotulo-amarelo {
    color: var(--cor-destaque-texto);
}

.texto-chamada {
    margin: 0;
    color: var(--cor-texto-suave);
    font-size: 17px;
}

.coluna-calculo {
    flex: 1 1 380px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.rotulo-campo {
    font-weight: 600;
    font-size: 15px;
}

.campo-valor {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 62px;
    padding: 0 20px;
    background: var(--cor-fundo-2);
    border: 1px solid var(--cor-linha-forte);
    border-radius: 16px;
    transition: border-color .2s ease, box-shadow .2s ease;
}

.campo-valor:focus-within {
    border-color: var(--cor-destaque-texto);
    box-shadow: 0 0 0 3px rgba(255, 242, 18, .15);
}

.prefixo {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--cor-texto-apagado);
}

.campo-valor input {
    flex-grow: 1;
    border: none;
    background: transparent;
    color: var(--cor-texto);
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 26px;
    outline: none;
    min-width: 0;
}

.campo-valor input::placeholder {
    color: var(--cor-texto-apagado);
    opacity: .5;
}

/* esconde as setinhas do input number */
.campo-valor input::-webkit-outer-spin-button,
.campo-valor input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.campo-valor input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
}

.valores-rapidos {
    display: flex;
    gap: 8px;
}

.chip-valor {
    padding: 8px 16px;
    border: 1px solid var(--cor-linha-forte);
    border-radius: 999px;
    background: transparent;
    color: var(--cor-texto);
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .2s ease, border-color .2s ease, color .2s ease;
}

.chip-valor:hover {
    border-color: var(--cor-destaque-texto);
}

.chip-ativo {
    background: #FFF212;
    border-color: #FFF212;
    color: #141213;
}

.resultados {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding-top: 4px;
}

.resultado {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 16px 14px;
    background: var(--cor-fundo-2);
    border: 1px solid var(--cor-linha);
    border-radius: 14px;
}

.valor-resultado {
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-stretch: 110%;
    font-size: clamp(16px, 1.5vw, 22px);
    line-height: 1.1;
    color: var(--cor-destaque-texto);
    white-space: nowrap;
}

.legenda-resultado {
    font-size: 13px;
    color: var(--cor-texto-suave);
}

.botao-simular {
    margin-top: 6px;
}

.botao-simular:disabled {
    opacity: .45;
    cursor: default;
    transform: none;
    box-shadow: none;
}

.aviso-simulador {
    margin: 0;
    font-size: 13px;
    color: var(--cor-texto-apagado);
}

@media (max-width: 1024px) {
    .main-simulador {
        padding: 56px 0;
    }

    .cartao-simulador {
        padding: 28px 18px;
        gap: 24px;
        border-radius: 22px;
    }

    .resultados {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
    }

    .resultado {
        padding: 12px 8px;
    }

    .valor-resultado {
        font-size: 15px;
    }

    .legenda-resultado {
        font-size: 12px;
    }

    .aviso-simulador {
        font-size: 12px;
    }
}

</style>
