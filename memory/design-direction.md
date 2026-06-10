---
name: design-direction
description: Visual/design language Felippe wants for the portfolio
metadata:
  type: feedback
---

Felippe quer o portfólio com estética **preto & branco neutro e sofisticada**, base dark, com **uma única cor fria clara de destaque** (ice-blue/periwinkle) usada com parcimônia — glows, estado ativo, palavra-chave, ponto "disponível". Nada de paletas coloridas/saturadas. Gosta de **liquid glass** (glassmorphism) e de hero impactante com tipografia grande, no nível dos melhores devs frontend.

**Why:** ele pediu explicitamente esse equilíbrio (neutro + 1 respiro de cor) e referências de "grandes programadores frontend".

**How to apply:**
- Accent definido como token `--brand` (HSL ~224 92% 74%) no [index.css](../src/index.css), exposto no Tailwind como `brand`/`brand-strong`/`brand-foreground`.
- Liquid glass = classe `.glass-surface` (definida em index.css) ou o componente `src/components/ui/glass-surface.tsx`. Botões primários continuam monocromáticos (branco no preto); usar `brand` só como acento/halo.
- Utilitários de atmosfera disponíveis: `.bg-grid-fade`, `.aurora-blob` + `animate-aurora-drift`, `.spotlight` (lê `--mx`/`--my`), `.text-gradient-sheen` + `animate-shimmer`. Respeitam `prefers-reduced-motion`.
