# Frontend - Estrutura Simplificada

## Componentes Necessários

```
src/
├── app/
│   ├── App.tsx              # Root com RouterProvider
│   ├── routes.ts            # Rotas da aplicação
│   └── components/
│       ├── Layout.tsx       # Layout com sidebar e header
│       ├── Dashboard.tsx   # Página inicial com stats e atalho para chat
│       ├── ChatInterface.tsx # Chat + gerador de scripts (integra com backend)
│       ├── Analytics.tsx    # Gráficos e métricas (usa recharts)
│       ├── ProjectPresentation.tsx # Info do projeto (opcional)
│       └── figma/
│           └── ImageWithFallback.tsx # Fallback para imagens
├── styles/
│   ├── index.css           # Imports dos outros arquivos
│   ├── tailwind.css        # Diretivas do Tailwind
│   ├── theme.css           # Variáveis de tema (se necessário)
│   └── fonts.css           # Fontes customizadas (se houver)
└── main.tsx                # Entry point
```

## Stack Utilizado

- **React** + **TypeScript**
- **Tailwind CSS** para estilos (classes utilitárias)
- **React Router v7** para navegação
- **Lucide React** para ícones
- **Recharts** para gráficos

## Componentes UI Customizados

Todos os components mantêm comportamento com classes Tailwind puro:

- Botões
- Inputs
- Modais (via divs com overlay)
- Cards
- Selects (nativos + estilizados)

Sem dependência de bibliotecas UI complexas — tudo é Tailwind + HTML nativo.
