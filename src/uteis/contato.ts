import { registrarClique } from "./metricas";

export const TELEFONE_FORMATADO = "(67) 99987-1739";
export const TELEFONE_LINK = "tel:+5567999871739";

export function linkWhatsApp(texto: string): string {
    return `https://wa.me/5567999871739?text=${encodeURIComponent(texto)}`;
}

export function abreWhatsApp(texto: string, rotulo = "WhatsApp"): void {
    registrarClique(rotulo);
    window.open(linkWhatsApp(texto));
}
