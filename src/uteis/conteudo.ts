// Conteúdo dinâmico do site, administrado pelo painel (app.limatecms.com).
// Os textos abaixo são o FALLBACK: o site funciona igual se o painel estiver fora do ar.
import { reactive } from 'vue';

const URL_PAINEL = 'https://app.limatecms.com';

export interface Slide { imagem: string; titulo: string; subtitulo: string; }
export interface Servico { numero: string; titulo: string; texto: string; whatsapp: string; }
export interface Avaliacao { nome: string; texto: string; }
export interface Cliente { imagem: string; nome: string; altura?: number; }
export interface Numero { valor: string; legenda: string; }

export const conteudoSite = reactive({
    hero: {
        selo: 'Bonito · MS — atendimento 24 horas',
        titulo: 'Elétrica, automação e',
        tituloDestaque: 'energia solar.',
        subtitulo: 'Do projeto ao start-up, para os setores industrial, rural, comercial e residencial.',
        slides: [
            { imagem: 'usina', titulo: 'Usinas fotovoltaicas', subtitulo: 'Projeto, execução e start-up' },
            { imagem: 'silos', titulo: 'Instalações industriais', subtitulo: 'Elétrica e automação em plena carga' },
            { imagem: 'quadro', titulo: 'Quadros de distribuição', subtitulo: 'Montagem conforme as normas' },
            { imagem: 'equipe', titulo: 'Equipe em campo', subtitulo: 'Atendimento 24 horas' }
        ] as Slide[]
    },
    numeros: [
        { valor: '2010', legenda: 'Atuando desde' },
        { valor: '+500', legenda: 'Obras por todo o Brasil' },
        { valor: '24h', legenda: 'Atendimento, de segunda a domingo' },
        { valor: '4 setores', legenda: 'Industrial, rural, comercial e residencial' }
    ] as Numero[],
    sobre: {
        titulo: 'Solidez e confiança desde 2010.',
        paragrafo1: 'Desde 2010 na execução de instalações elétricas e automações industriais, a LimaTec firmou sua marca com mais de 500 obras por todo o Brasil, atuando nos setores industrial, rural, comercial e fotovoltaico.',
        paragrafo2: 'Construímos usinas fotovoltaicas, sistemas de controle e automação industrial e soluções para data centers e telecomunicações — instalações bem executadas, com segurança e sem comprometer o andamento da obra.'
    },
    servicos: [
        { numero: '01', titulo: 'Orçamento e proposta', texto: 'Nossa equipe faz visita no local e levantamento dos pontos importantes para um orçamento preciso.', whatsapp: 'Olá gostaria de saber mais sobre Orçamento e Proposta' },
        { numero: '02', titulo: 'Elaboração de projetos', texto: 'Projetos elétricos, fotovoltaicos, de incêndio e pânico, conforme as normativas de segurança.', whatsapp: 'Olá gostaria de saber mais sobre Elaboração de Projetos' },
        { numero: '03', titulo: 'Execução de projetos', texto: 'Instalações e montagens elétricas e de automação industrial, predial, comercial e residencial.', whatsapp: 'Olá gostaria de saber mais sobre Execução de projetos' },
        { numero: '04', titulo: 'Automação', texto: 'Sistemas de controle e automação personalizados, da indústria à casa inteligente: iluminação, climatização e segurança residencial.', whatsapp: 'Olá gostaria de saber mais sobre Automação' },
        { numero: '05', titulo: 'Energia solar', texto: 'Deixe o sol pagar sua conta de energia! Faça um orçamento conosco.', whatsapp: 'Olá gostaria de saber mais sobre Energia Solar' },
        { numero: '06', titulo: 'Comissionamento e start-up', texto: 'Planejamento para comissionamento, start-up e operação assistida de todo o sistema.', whatsapp: 'Olá gostaria de saber mais sobre Comissionamento e Start-up' }
    ] as Servico[],
    clientes: [
        { imagem: 'cliente1', nome: 'Laudejá Agronegócio', altura: 78 },
        { imagem: 'cliente2', nome: 'Vale Urucum', altura: 78 },
        { imagem: 'cliente3', nome: 'Curicaca Armazéns Gerais', altura: 80 },
        { imagem: 'cliente4', nome: 'Cliente LimaTec', altura: 62 }
    ] as Cliente[],
    avaliacoes: [
        { nome: 'Leonardo Reis', texto: '“Excelente atendimento e pontualidade no prazo do serviço contratado. Fiz toda a energia solar da empresa com eles, na pessoa do Vinicius. Recomendo a todos!”' },
        { nome: 'Igor Valenzuela Leite', texto: '“O melhor da região, super recomendo. Agilidade e qualidade no serviço. Muito profissional, serviço de qualidade.”' },
        { nome: 'Marcio Neis', texto: '“Profissional qualificado, experiente, sabe o que faz e de melhor qualidade.”' }
    ] as Avaliacao[],
    servicosSecao: {
        titulo: 'Do primeiro orçamento à operação em plena carga.',
        apoio: 'Toque em um serviço para falar direto com a equipe pelo WhatsApp.'
    },
    chamada: {
        titulo: 'Procura alguma solução ou precisa de um orçamento?',
        subtitulo: 'Entre em contato conosco.'
    },
    contato: {
        telefone: '(67) 99987-1739',
        whatsapp: '5567999871739',
        logradouro: 'R. Vinte de Setembro - Rincão Bonito',
        cidade: 'Bonito - MS',
        cep: '79290-000',
        pais: 'Brasil',
        dias: 'Segunda à Domingo',
        horas: 'Atendimento 24 horas'
    },
    rodape: {
        copyright: '©2026 LimaTec - Elétrica / Automação / Energia Solar'
    }
});

export function telefoneLink(): string {
    return `tel:+${conteudoSite.contato.whatsapp.replace(/\D/g, '')}`;
}

// fotos padrão do site, servidas em /conteudo/* (URLs estáveis — o painel usa as mesmas)
const IMAGENS_EMBUTIDAS: Record<string, string> = {
    usina: '/conteudo/usina.jpg',
    silos: '/conteudo/silos.jpg',
    quadro: '/conteudo/quadro.jpg',
    equipe: '/conteudo/equipe.jpg',
    cliente1: '/conteudo/cliente1.jpg',
    cliente2: '/conteudo/cliente2.jpg',
    cliente3: '/conteudo/cliente3.jpg',
    cliente4: '/conteudo/cliente4.svg'
};

export function urlDaImagem(chave: string): string {
    if (chave.startsWith('http')) return chave;
    if (chave.startsWith('/api/')) return URL_PAINEL + chave;
    return IMAGENS_EMBUTIDAS[chave] ?? IMAGENS_EMBUTIDAS.usina;
}

function mesclar(destino: Record<string, unknown>, origem: Record<string, unknown>) {
    for (const chave of Object.keys(origem)) {
        const valor = origem[chave];
        if (valor === null || valor === undefined) continue;
        if (Array.isArray(valor) || typeof valor !== 'object') {
            destino[chave] = valor;
        } else if (typeof destino[chave] === 'object' && destino[chave] !== null) {
            mesclar(destino[chave] as Record<string, unknown>, valor as Record<string, unknown>);
        } else {
            destino[chave] = valor;
        }
    }
}

// Busca o conteúdo publicado pelo painel; em erro/timeout, o fallback acima permanece
export async function carregarConteudo(): Promise<void> {
    try {
        const controlador = new AbortController();
        const temporizador = window.setTimeout(() => controlador.abort(), 5000);
        const resposta = await fetch(`${URL_PAINEL}/api/publico/conteudo`, { signal: controlador.signal });
        window.clearTimeout(temporizador);
        if (!resposta.ok) return;
        const corpo = await resposta.json();
        if (corpo?.conteudo && typeof corpo.conteudo === 'object') {
            mesclar(conteudoSite as unknown as Record<string, unknown>, corpo.conteudo);
        }
    } catch {
        // painel indisponível: segue com o conteúdo embutido
    }
}
