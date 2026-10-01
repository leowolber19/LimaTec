// Métricas simples do site, enviadas para o painel (app.limatecms.com).
// Fire-and-forget: nunca atrapalha a navegação nem quebra se o painel cair.

const URL_PAINEL = 'https://app.limatecms.com';

function enviar(tipo: 'visita' | 'clique', rotulo?: string): void {
    try {
        fetch(`${URL_PAINEL}/api/publico/evento`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tipo, rotulo }),
            keepalive: true
        }).catch(() => undefined);
    } catch {
        // sem rede/bloqueado: ignora
    }
}

// conta 1 visita por aba/sessão
export function registrarVisita(): void {
    try {
        if (sessionStorage.getItem('limatec-visita')) return;
        sessionStorage.setItem('limatec-visita', '1');
    } catch {
        // sem sessionStorage: registra mesmo assim
    }
    enviar('visita');
}

export function registrarClique(rotulo: string): void {
    enviar('clique', rotulo);
}
