# TopCassinoComparador

Site afiliado de comparação de casinos online para o mercado português, construído com **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS v4**.

Domínio: `topcassinocomparador.com`

## Stack Técnica

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript** (modo estrito)
- **Tailwind CSS v4** (tema configurado via `@theme` em `globals.css`)
- Dados de marcas/casinos centralizados em `src/data/data.json`

## Estrutura do Projeto

```
src/
  app/                     Rotas (App Router)
    page.tsx               Home
    casinos-online/        Ranking + página dinâmica por casino ([slug])
    bonus/                 Comparador de bónus
    metodos-pagamento/     Métodos de pagamento (MB WAY, Multibanco, etc.)
    guias/                 Blog/guias + página dinâmica por artigo ([slug])
    sobre-nos/              Sobre a empresa
    contacto/              Formulário de contacto
    jogo-responsavel/      Jogo responsável (compliance)
    termos-condicoes/      Termos e condições
    politica-privacidade/  Política de privacidade
    sitemap.ts / robots.ts SEO técnico
    icon.tsx / opengraph-image.tsx  Favicon e imagem OG geradas dinamicamente
  components/
    layout/                Header, Footer, avisos de jogo responsável
    ui/                    Componentes de UI reutilizáveis (Button, Badge, Container, ...)
    brands/                Componentes relacionados com marcas de casino
    sections/              Secções de página (Hero, FAQ, CTA, ...)
    forms/                 Formulários (contacto)
    legal/                 Layout de documentos legais
  data/
    data.json              Dados das marcas de casino, métodos de pagamento, FAQs e info do site
    guides.ts              Conteúdo dos artigos/guias
  lib/
    types.ts                Tipos TypeScript partilhados
    data.ts                 Funções de acesso aos dados
    utils.ts                Utilitários (cn, formatCurrency, ...)
```

## Paleta de Cores (Dark Emerald Theme)

| Token        | Cor       |
|--------------|-----------|
| Background   | `#111111` |
| Primary      | `#14B8A6` |
| Secondary    | `#0F766E` |
| White        | `#FFFFFF` |
| Gray (muted) | `#D1D5DB` |

Definida em `src/app/globals.css` via Tailwind v4 `@theme`.

## Conformidade e Google Ads

O site inclui os elementos habitualmente exigidos para conformidade com a política de jogo da Google Ads e requisitos legais em Portugal:

- Aviso permanente +18 / jogo responsável no topo de todas as páginas
- Página dedicada de **Jogo Responsável** com sinais de alerta, ferramentas de autocontrolo e linhas de apoio reais (Linha 1414 do ICAD, SRIJ, Jogo Responsável, SCML)
- Referência à licença **SRIJ** em cada casino listado
- Páginas de **Sobre Nós**, **Contacto**, **Termos e Condições** e **Política de Privacidade**
- Disclaimer de afiliação no rodapé (o site não é operador de jogo)

> **Nota:** Os casinos, licenças e dados de bónus em `src/data/data.json` são fictícios/exemplo e devem ser substituídos por parcerias de afiliação reais antes de publicar o site em produção.

## Scripts

```bash
npm run dev     # Ambiente de desenvolvimento (Turbopack)
npm run build   # Build de produção
npm run start   # Servir build de produção
npm run lint    # ESLint
```

## Gerir os Dados

Para atualizar casinos, bónus ou métodos de pagamento, edite `src/data/data.json`. Os tipos estão definidos em `src/lib/types.ts` e as funções de acesso em `src/lib/data.ts`.
