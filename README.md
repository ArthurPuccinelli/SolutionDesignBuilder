# Plataforma de Apoio a Solution Consultants - DocuSign

Esta é uma aplicação Next.js desenvolvida para auxiliar Solution Consultants (SCs) da DocuSign no gerenciamento de informações de oportunidades e na geração automática de apresentações.

## Visão Geral do Projeto

O objetivo principal é fornecer uma ferramenta para que os SCs possam:
- Inputar dados detalhados sobre oportunidades de vendas.
- (Futuro) Ter esses dados refinados e enriquecidos através de uma API de IA.
- (Futuro) Gerar automaticamente apresentações no Google Slides baseadas em templates personalizados.

## Tecnologias Utilizadas

- **Frontend:** React, Next.js (App Router), TypeScript, Tailwind CSS
- **Backend (inicial):** API Routes do Next.js
- **Linting:** ESLint
- **Package Manager:** npm (ou yarn, dependendo da configuração inicial do `create-next-app`)

## Estrutura do Projeto

O projeto está organizado da seguinte forma dentro do diretório `docusign-sc-platform/src/`:

- **`app/`**: Contém todas as rotas, layouts e páginas da aplicação, seguindo o padrão do App Router do Next.js.
  - **`app/api/`**: Rotas de API do backend.
    - `opportunity/route.ts`: Endpoint para receber dados de novas oportunidades.
  - **`app/admin/`**: Páginas e layout da área administrativa.
    - `templates/page.tsx`: Gerenciamento de templates de apresentação.
    - `placeholders/page.tsx`: Gerenciamento de regras de placeholders.
  - `new-opportunity/page.tsx`: Página do formulário para criar nova oportunidade.
  - `page.tsx`: Página inicial da aplicação.
  - `layout.tsx`: Layout principal da aplicação.
  - `globals.css`: Estilos globais.
- **`components/`**: Componentes React reutilizáveis.
  - **`ui/`**: Componentes básicos de UI (Input, Button, Textarea, etc.).
  - `OpportunityForm.tsx`: Componente do formulário principal de entrada de dados.
- **`services/`**: Módulos para interagir com APIs externas ou lógica de negócios desacoplada.
  - `aiService.ts`: (Mockado) Serviço para interação com a API de IA.
  - `googleSlidesService.ts`: (Mockado) Serviço para interação com a API do Google Slides.
- **`utils/`**: Funções utilitárias genéricas. (Atualmente vazio, mas pronto para uso)

## Como Executar o Projeto

1.  **Clone o repositório (se aplicável) ou certifique-se de que os arquivos estão na estrutura correta.**
2.  **Navegue até o diretório raiz do projeto `docusign-sc-platform`:**
    ```bash
    cd docusign-sc-platform
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    ```
4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    # yarn dev
    ```
5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Funcionalidades Implementadas (Fase Inicial)

- **Formulário de Entrada de Dados:**
  - Localizado em `/new-opportunity`.
  - Campos para informações da oportunidade, cliente, discovery, compelling reason, business case, etc.
  - Validação básica de campos obrigatórios.
  - Submissão para uma API Route (`/api/opportunity`) que atualmente loga os dados e retorna uma resposta mockada.
- **Estrutura da Área Administrativa:**
  - Acessível em `/admin`.
  - Layout com navegação lateral.
  - Páginas placeholder para "Gerenciar Templates" e "Regras de Placeholders".
- **Página Inicial:**
  - Boas-vindas e link para criar nova oportunidade.
- **Serviços Mockados:**
  - `aiService.ts` e `googleSlidesService.ts` com funções que simulam chamadas de API e processamento, com logs no console.

## Próximos Passos Planejados (Visão de Futuro)

- Implementar a lógica real nos serviços de IA e Google Slides.
- Conectar a um banco de dados para persistência dos dados das oportunidades.
- Desenvolver completamente as funcionalidades da Área Administrativa (upload de templates, CRUD de regras).
- Adicionar sistema de autenticação e gerenciamento de usuários.
- Expandir os testes automatizados.
- Melhorar a UI/UX com base no feedback e na evolução dos requisitos.

## Contribuindo

(Instruções de contribuição podem ser adicionadas aqui no futuro, se o projeto se tornar colaborativo.)
