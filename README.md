<h1 align="center">MovieFlix</h1>

<p align="center">
  Descubra os filmes mais populares do momento com sinopse, elenco e detalhes completos
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="Styled Components" src="https://img.shields.io/badge/Styled--Components-6-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img alt="TMDB" src="https://img.shields.io/badge/TMDB-API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" />
  <img alt="Netlify" src="https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</p>

<p align="center">
  <a href="https://degabrielofimovieflix.netlify.app/" target="_blank">
    <img alt="Demo ao vivo" src="https://img.shields.io/badge/Demo%20ao%20vivo-Acessar-00C7B7?style=for-the-badge&logo=netlify" />
  </a>
</p>

---

<p align="center">
  <img alt="MovieFlix preview" src="./src/assets/GitHub/MovieFlixGif.gif" width="80%" />
</p>

---

## Descrição

O **MovieFlix** é uma aplicação web desenvolvida em React que consome a API do [TMDB (The Movie Database)](https://www.themoviedb.org/) para listar os filmes mais populares do momento. Para cada filme, o usuário pode visualizar sinopse, duração, orçamento, bilheteria e o elenco completo — tudo em uma interface limpa e responsiva.

---

## Funcionalidades

- Listagem paginada dos filmes mais populares
- Página de detalhes com sinopse, duração, orçamento e bilheteria
- Elenco completo com foto e nome do personagem
- Ícone de menu interativo
- Footer na página de detalhes
- Paginação persistente: a página atual é salva e restaurada ao voltar

---

## Tecnologias

| Tecnologia | Versão | Função |
|---|---|---|
| React | 18 | Framework de UI |
| React Router DOM | 6 | Navegação entre páginas |
| Styled Components | 6 | Estilização com CSS-in-JS |
| use-local-storage | 3 | Persistência de estado no localStorage |
| TMDB API | — | Fonte de dados dos filmes |
| Netlify | — | Deploy e hospedagem |

---

## Pré-requisitos

- Node.js 16+
- npm ou yarn
- Chave de API do [TMDB](https://www.themoviedb.org/settings/api)

---

## Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/degabrielofi/MovieFlix.git
cd MovieFlix

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

### Build para produção

```bash
npm run build
```

---

## Estrutura de pastas

```
MovieFlix/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── GitHub/           # Imagens do README
│   ├── components/           # Componentes reutilizáveis
│   ├── pages/                # Páginas da aplicação
│   ├── services/             # Integração com a API do TMDB
│   ├── App.js
│   └── index.js
├── netlify.toml
├── package.json
└── README.md
```

---

## Demo

Acesse a versão em produção: **[degabrielofimovieflix.netlify.app](https://degabrielofimovieflix.netlify.app/)**
