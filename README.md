# Landing — Dr. Mohamad Hussein — Neurologia (pt-BR)

Stack: Next.js (App Router), TypeScript, TailwindCSS, shadcn/ui, lucide-react, Framer Motion, Vercel Analytics.

## Edição rápida
- Textos e dados fixos: `lib/site.ts`
- Condições (AVC, TDAH, etc.): `lib/site.ts` (array `conditions`)
- Avaliações mock: `lib/reviews.ts`
- Formulário: `components/appointment-form.tsx`
- CTAs e tracking: procure por `data-evt` e função `track()`

## UTM e conversões
- Parâmetros UTM são preservados na URL (anchors) e propagados aos links de WhatsApp com mensagem pré-preenchida.
- Botões possuem `data-evt` e a função `track()` envia eventos para `window.dataLayer` e (se disponível) Vercel Analytics.

## SEO
- Metadata e Open Graph no `app/page.tsx` (export `metadata`) e em `app/layout.tsx`.
- JSON-LD Schema.org (MedicalBusiness) injetado via `<Script>` no `app/page.tsx`.

## Acessibilidade
- Tags semânticas, `aria-labels`, foco visível, contraste AA, `alt` descritivos, navegação por teclado.

## Performance
- Imagem do herói com `priority`.
- Outras imagens com lazy padrão do `next/image`.
- UI leve, sem libs de carrossel pesadas; Framer Motion para microanimações.

## Google Ads / Correspondência
- Cada condição possui um `id` (ex.: `#avc`, `#tdah`). Use esses anchors nos anúncios para rolar até o bloco correspondente.
- CTAs por condição tem `data-evt` para medir conversões por grupo.

## Scripts externos
- Espaço para GTM/GAds: adicione seu script nos `app/layout.tsx` usando `<Script>`.

## Execução
- `npm run dev` e acesse `/`.
- Ajuste `metadataBase` e domínio real em `app/page.tsx`.

## Alterar imagens
- Substitua placeholders por imagens otimizadas (200–300 KB). O `next/image` cuidará de formatos/resize.
