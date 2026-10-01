---
description: Builda e publica o site da LimaTec na Cloudflare (limatecms.com)
---

Publique o site da LimaTec em produção:

1. Rode `npm run deploy` (faz o build de produção e sobe para a Cloudflare via wrangler).
2. Aguarde a conclusão e confira no output:
   - O build terminou com `DONE Build complete` (sem erros de compilação/lint)
   - O deploy listou os domínios `limatecms.com (custom domain)` e `www.limatecms.com (custom domain)`
   - Anote o `Current Version ID`
3. Se o build falhar, NÃO tente de novo às cegas: mostre o erro, corrija e só então repita o deploy.
4. Se o wrangler falhar por autenticação, peça para o usuário rodar `! npx wrangler login` e tente novamente após o login.
5. Ao final, informe em uma linha: sucesso/falha, o Version ID e o link https://limatecms.com.
