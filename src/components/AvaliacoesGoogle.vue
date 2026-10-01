<template>
    <section class="main-avaliacoes">
        <div class="container-site">
            <div class="cabecalho-avaliacoes">
                <div class="titulos-avaliacoes">
                    <span class="rotulo-secao"> Avaliações </span>
                    <h2 class="titulo-secao"> O que dizem os clientes. </h2>
                </div>
                <a class="link-google" href="https://www.google.com/maps/search/?api=1&amp;query=LimaTec+Bonito+MS" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3a7.25 7.25 0 0 1-10.8-3.81H1.27v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.26 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.27a12 12 0 0 0 0 10.76l3.99-3.1z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43A11.97 11.97 0 0 0 1.27 6.62l3.99 3.1A7.2 7.2 0 0 1 12 4.75z"/></svg>
                    Ver avaliações no Google
                </a>
            </div>

            <div class="grade-avaliacoes">
                <article class="cartao-avaliacao" v-for="avaliacao in avaliacoes" :key="avaliacao.nome">
                    <div class="estrelas" aria-label="5 de 5 estrelas">
                        <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" width="18" height="18" fill="#FBBC05" aria-hidden="true"><path d="M12 2l2.9 6.26 6.6.7-4.95 4.5 1.4 6.54L12 16.77 6.05 20l1.4-6.54L2.5 8.96l6.6-.7z"/></svg>
                    </div>
                    <p class="texto-avaliacao"> {{ avaliacao.texto }} </p>
                    <div class="autor-avaliacao">
                        <span class="inicial-autor"> {{ avaliacao.nome.charAt(0) }} </span>
                        <div class="dados-autor">
                            <span class="nome-autor"> {{ avaliacao.nome }} </span>
                            <span class="origem-autor"> Avaliação no Google </span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AvaliacoesGoogle',
    data() {
        return {
            // Avaliações do perfil da LimaTec no Google
            avaliacoes: [
                {
                    nome: 'Leonardo Reis',
                    texto: '“Excelente atendimento e pontualidade no prazo do serviço contratado. Fiz toda a energia solar da empresa com eles, na pessoa do Vinicius. Recomendo a todos!”'
                },
                {
                    nome: 'Igor Valenzuela Leite',
                    texto: '“O melhor da região, super recomendo. Agilidade e qualidade no serviço. Muito profissional, serviço de qualidade.”'
                },
                {
                    nome: 'Marcio Neis',
                    texto: '“Profissional qualificado, experiente, sabe o que faz e de melhor qualidade.”'
                }
            ]
        };
    }
});
</script>

<style scoped>

.main-avaliacoes {
    background: var(--cor-fundo-2);
    padding: 96px 0;
}

.cabecalho-avaliacoes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 48px;
}

.titulos-avaliacoes {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.link-google {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 48px;
    padding: 0 20px;
    border: 1px solid var(--cor-linha-forte);
    border-radius: 999px;
    font-weight: 600;
    font-size: 15px;
    color: var(--cor-texto);
    background: var(--cor-superficie);
    transition: background-color .2s ease;
}

.link-google:hover {
    background: var(--cor-grade);
}

.grade-avaliacoes {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
}

.cartao-avaliacao {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 26px;
    background: var(--cor-superficie);
    border: 1px solid var(--cor-linha);
    border-radius: 20px;
}

.estrelas {
    display: flex;
    gap: 3px;
}

.texto-avaliacao {
    margin: 0;
    font-size: 15.5px;
    line-height: 1.65;
    color: var(--cor-texto-suave);
    flex-grow: 1;
}

.autor-avaliacao {
    display: flex;
    align-items: center;
    gap: 12px;
}

.inicial-autor {
    flex: 0 0 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--cor-botao-fundo);
    color: var(--cor-botao-texto);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 17px;
}

.dados-autor {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
}

.nome-autor {
    font-weight: 600;
    font-size: 15px;
}

.origem-autor {
    font-size: 13px;
    color: var(--cor-texto-apagado);
}

@media (max-width: 1024px) {
    .main-avaliacoes {
        padding: 56px 0;
    }

    .cabecalho-avaliacoes {
        margin-bottom: 28px;
    }

    .grade-avaliacoes {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}

</style>
