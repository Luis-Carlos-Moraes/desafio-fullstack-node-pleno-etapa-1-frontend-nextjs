# Etapa 1 (Apresentação + Frontend)

## Desafio

Implementar um **layout responsivo em Next.js** com base na imagem de referência **`Layout.jpg`**, incluindo um **carrossel responsivo** que se comporta de forma diferente em telas pequenas.

**Tempo sugerido:** \~30 min
**Stack:** Next.js (JavaScript, sem TypeScript)

## O que você vai entregar

* Um projeto Next.js que replica o visual de `Layout.jpg`.
* Um carrossel de imagens:

  * **Desktop/Tablet (≥ 768px):** carrossel ativo.
  * **Mobile (< 768px):** carrossel desativado e exibição de **apenas 1 imagem** estática.
* README com instruções de instalação e execução.

> **Antes de começar (2–5 min):** faça uma apresentação rápida: quem é você, experiências relevantes e principais escolhas técnicas que costuma fazer no dia a dia.

## Requisitos

1. **Adesão ao Design:** Reproduza o layout de `Layout.jpg` (tipografia aproximada e espaçamentos consistentes).
2. **Fontes:** Use fontes semelhantes (ex.: Google Fonts).
3. **Imagens:** Evite imagens supérfluas; priorize CSS para elementos visuais (sombras, gradientes, shapes).
4. **Carrossel Responsivo:**

   * Em **largura < 768px**, **desative** o carrossel e mostre **apenas uma imagem** (à sua escolha).
   * Em **largura ≥ 768px**, o carrossel deve funcionar normalmente (auto-play opcional).
5. **Sem TypeScript.**

## Como começar

```bash
# crie o projeto (pode usar App Router ou Pages Router)
npx create-next-app@latest etapa-1-frontend
# ou utilize sua base Next já pronta

cd etapa-1-frontend
npm i
npm run dev
```

## Estrutura sugerida

```
etapa-1-frontend/
  public/
    imagens/ (opcional)
    Layout.jpg (apenas referência; não precisa servir)
  src/ (ou pages/ se usar Pages Router)
    app/ (ou pages/)
      page.jsx
      globals.css
    components/
      Carousel.jsx
  README.md
```

## Regras do carrossel

* Você pode usar uma lib leve ou implementar na mão.
* O “desligar” em < 768px pode ser via media query + render condicional (ex.: `useEffect` para medir `window.innerWidth`), ou CSS simples que exiba somente um slide.

## Como rodar localmente

```bash
npm install
npm run dev
# acesse http://localhost:3000
```

## Critérios de avaliação

* **Adesão ao Design:** fidelidade ao `Layout.jpg`.
* **Responsividade:** comportamento correto do carrossel em diferentes larguras.
* **Qualidade do Código:** organização de componentes, nomeação, CSS/estilos.
* **Documentação:** README claro (instalação, execução).

## Entrega

* Publique em um **repositório público** no GitHub e inclua o link no envio.

---
