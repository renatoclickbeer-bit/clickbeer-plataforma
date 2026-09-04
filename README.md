# ClickBeer — Plataforma da Rede

Esboço de landing page para apresentar o clube de vantagens unificado da rede
ClickBeer (Campo Grande - MS): pontos, cashback, ofertas personalizadas, app
e delivery — inspirado na proposta Figital (CBM + Mercashop) recebida da
Mercafacil, mas com conteúdo e identidade da própria ClickBeer.

Site estático, sem build (HTML + CSS + JS puro) — abre direto no navegador e
sobe na Vercel sem nenhuma configuração.

## O que ainda precisa ser validado

Este é um rascunho. Os seguintes pontos foram levantados por pesquisa pública
e **precisam ser confirmados ou corrigidos**:

- **Lojas da rede** — nomes, endereços e horários em [`js/lojas.js`](js/lojas.js).
  A lista de 6 unidades (São Francisco, Chácara Cachoeira, Itanhangá/Royal
  Park, Via Park, Carandá Bosque, Joaquim Murtinho/Vila Rica) veio de sites
  de delivery e imprensa local — pode estar desatualizada.
- **Tempos e taxas de entrega** — marcados com a tag "confirmar" em
  [`index.html`](index.html), seção `#entrega`.
- **Número atual de lojas** — o texto assume 6+, mas a rede pode ter crescido.
- **Contato** (WhatsApp, e-mail) — ainda não preenchido no rodapé.
- **Cores, logo e fontes** — a paleta em [`css/styles.css`](css/styles.css)
  é um placeholder (âmbar + carvão). Troque pelas cores oficiais da marca
  assim que tiver o manual de identidade visual.
- **História da marca** (seção "Sobre") — resumida a partir de uma matéria
  pública sobre a fundação em 2013; revise datas e nomes.

Todo trecho incerto está com um comentário `<!-- ... -->` no HTML ou uma nota
em itálico visível na própria página.

## Estrutura

```
index.html        conteúdo da página (todas as seções)
css/styles.css     estilos e paleta de cores
js/lojas.js        dados das lojas (edite aqui para corrigir a rede)
js/main.js         menu mobile, ano do rodapé, renderização das lojas
```

## Como editar

Abra `index.html` em qualquer editor de código (ex.: VS Code) e edite o
texto diretamente — não precisa instalar nada para ver o resultado: dê
duplo clique no arquivo `index.html` e ele abre no navegador.

Para editar a lista de lojas, mexa só em `js/lojas.js`.

## Como subir no GitHub

Esta pasta ainda não é um repositório Git (o Git não está instalado nesta
máquina). Duas formas de colocar no GitHub:

**Opção A — pelo site do GitHub (sem instalar nada)**
1. Crie um repositório novo em https://github.com/new (ex.: `clickbeer-plataforma`).
2. Na página do repositório, clique em "uploading an existing file".
3. Arraste os arquivos desta pasta (mantendo a estrutura de pastas `css/` e `js/`).
4. Commit direto pela interface do site.

**Opção B — instalando o Git**
1. Instale o Git para Windows: https://git-scm.com/download/win
2. No terminal, dentro desta pasta:
   ```
   git init
   git add .
   git commit -m "Esboço inicial da plataforma ClickBeer"
   git branch -M main
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```

## Como publicar na Vercel

1. Entre em https://vercel.com com sua conta (pode logar com GitHub).
2. "Add New… → Project" e importe o repositório `clickbeer-plataforma`.
3. Como é um site estático, a Vercel detecta sozinha — não precisa mexer em
   "Build Command" nem "Output Directory". Clique em "Deploy".
4. A cada novo `git push` para o GitHub, a Vercel gera um novo deploy
   automaticamente.
