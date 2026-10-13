# Portfólio em React

Portfólio com quatro seções (Sobre mim, Projetos, Habilidades e Contato), feito com React, Vite e CSS Modules.

**Versão online:** COLE_AQUI_O_LINK_DO_DEPLOY

## Como rodar localmente

Requisitos: Node 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist
npm run preview  # testa o build
```

## Estrutura

```
src/
  data/portfolio.js     # todo o conteúdo (textos, projetos, habilidades, contatos)
  hooks/                # useActiveSection: destaca no menu a seção visível
  components/           # Covers (capas em SVG), Header, Section (reutilizável), About, Projects, ProjectCard, Skills, Contact
  index.css             # tokens de cor e tipografia
public/images, public/projetos
```

Cada componente tem seu `.module.css`, então os estilos ficam isolados.

## Projetos apresentados

- **Diário de Bordo:** PWA offline para registrar atividades. Otimizado e medido: -42% de bytes transferidos e -12% de First Contentful Paint.
- **Micro Frontends: Sistema de Pedidos:** três apps Next.js 14 integrados com Module Federation; os micros se comunicam pelo evento `order:add`.
- **Calculadora de Dias de Vida:** algoritmo em Visualg que calcula os dias vividos considerando anos bissextos.

## Deploy

Vercel ou Netlify: importe o repositório, comando `npm run build`, pasta de saída `dist`.
