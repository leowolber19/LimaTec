import { registrarClique } from "./metricas";
import { conteudoSite } from "./conteudo";

export function linkWhatsApp(texto: string): string {
    const numero = conteudoSite.contato.whatsapp.replace(/\D/g, "");
    return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

export function abreWhatsApp(texto: string, rotulo = "WhatsApp"): void {
    registrarClique(rotulo);
    window.open(linkWhatsApp(texto));
}
