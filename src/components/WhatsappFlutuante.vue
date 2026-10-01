<template>
    <!-- JANELA DE CHAT (estilo WhatsApp) -->
    <transition name="chat">
        <div v-if="aberto" class="janela-chat" role="dialog" aria-label="Conversar com a LimaTec">
            <div class="cabecalho-chat">
                <div class="avatar-chat">
                    <LogoLimaTec Altura="30px" class="logo-chat" />
                </div>
                <div class="titulo-chat">
                    <span class="nome-chat"> LimaTec </span>
                    <span class="status-chat"> online </span>
                </div>
                <button class="fechar-chat" @click="aberto = false" aria-label="Fechar chat">
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
            </div>

            <div class="corpo-chat">
                <span class="data-chat"> Hoje </span>

                <div class="aviso-wa balao-0">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9z"/></svg>
                    Ao enviar, você continua a conversa no WhatsApp da LimaTec.
                </div>

                <div class="balao-recebido balao-1">
                    Olá! 👋 Como podemos ajudar?
                    <span class="hora-balao"> {{ hora }} </span>
                </div>

                <div class="atalhos-chat balao-2">
                    <button class="atalho" @click="enviarPronta('Preciso de um eletricista!')"> Preciso de um eletricista </button>
                    <button class="atalho" @click="enviarPronta('Olá, gostaria de fazer um orçamento')"> Quero um orçamento </button>
                    <button class="atalho" @click="enviarPronta('Olá, gostaria de saber mais sobre Energia Solar')"> Energia solar </button>
                </div>
            </div>

            <form class="rodape-chat" @submit.prevent="enviar()">
                <input
                    v-model="mensagem"
                    ref="campoMensagem"
                    class="campo-chat"
                    type="text"
                    placeholder="Mensagem"
                    aria-label="Sua mensagem">
                <button type="submit" class="botao-enviar" :disabled="!mensagem.trim()" aria-label="Enviar pelo WhatsApp">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg>
                </button>
            </form>
        </div>
    </transition>

    <!-- BOTÃO FLUTUANTE -->
    <button class="button-whatsapp" @click="alternar()" :title="TextoWhatsApp"
        :aria-label="aberto ? 'Fechar chat' : 'Conversar no WhatsApp'">
        <svg v-if="!aberto" viewBox="0 0 32 32" width="32" height="32" fill="#FFFFFF" aria-hidden="true"><path d="M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.2.58 4.35 1.68 6.25L3.5 28.5l6.93-1.62a12.46 12.46 0 0 0 5.57 1.37c6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3zm0 22.75c-1.86 0-3.68-.5-5.27-1.44l-.38-.22-3.91.91.95-3.8-.25-.4a10.1 10.1 0 0 1-1.54-5.4C5.6 9.84 10.26 5.25 16 5.25S26.4 9.84 26.4 15.5 21.74 25.75 16 25.75zm5.7-7.66c-.31-.16-1.85-.91-2.13-1.02-.29-.1-.5-.15-.7.16-.21.31-.81 1.02-1 1.23-.18.2-.36.23-.67.08-.31-.16-1.32-.49-2.5-1.55a9.4 9.4 0 0 1-1.74-2.16c-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.15-.19.2-.32.31-.53.1-.2.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57s1.1 2.98 1.26 3.19c.15.2 2.17 3.32 5.26 4.65.74.32 1.31.51 1.76.65.74.24 1.41.2 1.94.12.6-.09 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.49-.08-.13-.28-.2-.6-.36z"/></svg>
        <svg v-else viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { abreWhatsApp } from '@/uteis/contato';
  import LogoLimaTec from './LogoLimaTec.vue';

  export default defineComponent({
    name: 'WhatsappFlutuante',
    components: {
      LogoLimaTec
    },
    props: {
      Texto: {
        type: String,
        default: ""
      },
      TextoWhatsApp: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        aberto: false,
        mensagem: "",
        hora: ""
      };
    },
    methods: {
        // chamado de fora (barra mobile) via ref
        abrir() {
            if (!this.aberto) {
                this.alternar();
            }
        },
        alternar() {
            this.aberto = !this.aberto;
            if (this.aberto) {
                const agora = new Date();
                this.hora = `${String(agora.getHours()).padStart(2, '0')}:${String(agora.getMinutes()).padStart(2, '0')}`;
                this.$nextTick(() => {
                    (this.$refs.campoMensagem as HTMLInputElement | undefined)?.focus();
                });
            }
        },
        enviar() {
            const texto = this.mensagem.trim();
            if (!texto) {
                return;
            }
            abreWhatsApp(texto, 'Chat');
            this.mensagem = "";
            this.aberto = false;
        },
        enviarPronta(texto: string) {
            abreWhatsApp(texto, 'Chat');
            this.aberto = false;
        }
    }
  });
</script>

<style scoped>

/* Cores fixas no padrão do WhatsApp, independentes do tema do site */

.button-whatsapp {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  z-index: 12;
  border: none;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(0, 0, 0, .3);
  transition: transform .2s ease;
}

.button-whatsapp:hover {
  transform: translateY(-3px) scale(1.05);
}

.janela-chat {
  position: fixed;
  bottom: 100px;
  right: 24px;
  z-index: 12;
  width: 360px;
  max-width: calc(100vw - 32px);
  display: flex;
  flex-direction: column;
  background: #ECE5DD;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, .35);
}

.cabecalho-chat {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #008069;
  color: #FFFFFF;
}

.avatar-chat {
  flex: 0 0 40px;
  height: 40px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* no avatar sempre aparece o logo original (fundo branco), em qualquer tema */
.logo-chat :deep(.quando-escuro) {
  display: none !important;
}

.logo-chat :deep(.quando-claro) {
  display: block !important;
}

.titulo-chat {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  flex-grow: 1;
}

.nome-chat {
  font-weight: 600;
  font-size: 16px;
}

.status-chat {
  font-size: 13px;
  color: rgba(255, 255, 255, .85);
}

.fechar-chat {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, .9);
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
}

.fechar-chat:hover {
  background: rgba(255, 255, 255, .12);
}

.corpo-chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  min-height: 170px;
  /* textura sutil, como o papel de parede do WhatsApp */
  background-image: radial-gradient(rgba(0, 0, 0, .03) 1px, transparent 1px);
  background-size: 16px 16px;
}

.aviso-wa {
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 92%;
  padding: 6px 12px;
  background: #FDF3C7;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  color: #54656F;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
}

.aviso-wa svg {
  flex: 0 0 12px;
}

.data-chat {
  align-self: center;
  padding: 4px 12px;
  background: rgba(255, 255, 255, .9);
  border-radius: 8px;
  font-size: 11.5px;
  font-weight: 500;
  color: #54656F;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
}

.balao-recebido {
  position: relative;
  align-self: flex-start;
  max-width: 85%;
  padding: 8px 12px 6px;
  background: #FFFFFF;
  border-radius: 0 10px 10px 10px;
  font-size: 14.5px;
  line-height: 1.45;
  color: #111B21;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.hora-balao {
  display: inline-block;
  margin-left: 8px;
  font-size: 11px;
  color: #8696A0;
  float: right;
  margin-top: 8px;
}

.atalhos-chat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 6px;
}

.atalho {
  padding: 9px 16px;
  border: 1px solid #008069;
  border-radius: 999px;
  background: #FFFFFF;
  color: #008069;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .06);
  transition: background-color .2s ease, color .2s ease;
}

.atalho:hover {
  background: #008069;
  color: #FFFFFF;
}

/* entrada escalonada */
.balao-0, .balao-1, .atalhos-chat {
  animation: surgir .3s ease both;
}

.balao-1 { animation-delay: .12s; }
.atalhos-chat { animation-delay: .24s; }

@keyframes surgir {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rodape-chat {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: #F0F2F5;
}

.campo-chat {
  flex-grow: 1;
  height: 44px;
  padding: 0 16px;
  border: none;
  border-radius: 999px;
  background: #FFFFFF;
  color: #111B21;
  font-family: inherit;
  font-size: 15px;
  outline: none;
}

.campo-chat::placeholder {
  color: #8696A0;
}

.botao-enviar {
  flex: 0 0 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: #00A884;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform .15s ease, opacity .2s ease;
}

.botao-enviar:hover:not(:disabled) {
  transform: scale(1.06);
}

.botao-enviar:disabled {
  opacity: .45;
  cursor: default;
}

/* Animação de abertura */
.chat-enter-active,
.chat-leave-active {
  transition: opacity .22s ease, transform .22s ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(14px) scale(.98);
}

@media (max-width: 768px) {
  /* no celular o chat abre acima da barra fixa de ação */
  .button-whatsapp {
    display: none;
  }

  .janela-chat {
    right: 16px;
    bottom: calc(86px + env(safe-area-inset-bottom));
  }
}

</style>
