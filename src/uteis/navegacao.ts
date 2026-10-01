// Rola até uma seção sem alterar a URL (sem #hash)
export function rolarPara(id: string): void {
    if (id === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Remove da barra de endereço o #hash e o ?i=1 que a hospedagem anexa,
// sem recarregar a página
export function limparUrl(): void {
    const { pathname, search, hash } = window.location;
    const params = new URLSearchParams(search);
    params.delete('i');
    const query = params.toString();
    const urlLimpa = pathname + (query ? `?${query}` : '');
    if (hash || urlLimpa !== pathname + search) {
        history.replaceState(history.state, '', urlLimpa);
    }
}
