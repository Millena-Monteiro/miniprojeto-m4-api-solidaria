# 📦 API Solidária

Uma API RESTful com Node.js, Express e MongoDB para gerenciar **doadores**, **doações** e **campanhas solidárias**. Ideal para organizações e voluntários que desejam facilitar e organizar o processo de doações.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemon
- Dotenv
- JavaScript (ESModules)

---

## 📁 Estrutura do Projeto

api-solidaria/ ├── public/ # Frontend (HTML/CSS/JS) ├── src/ │ ├── controllers/ # Lógica das rotas (Doadores, Doações, Campanhas) │ ├── models/ # Modelos do MongoDB │ ├── routes/ # Rotas da aplicação │ └── app.js # Configuração do Express ├── server.js # Entrada principal e conexão com MongoDB ├── .env # Variáveis de ambiente ├── package.json └── README.md

---

### Explicação da Estrutura:

- **`public/`**: Contém os arquivos estáticos do frontend (HTML, CSS, JS) que interagem com a API.
- **`src/controllers/`**: Lógica de controle da aplicação, onde as funções para processar as requisições das rotas estão localizadas.
- **`src/models/`**: Contém os modelos que representam as coleções do banco de dados MongoDB.
- **`src/routes/`**: Define as rotas da API, conectando as requisições aos controladores.
- **`src/app.js`**: Arquivo principal de configuração do Express, onde as rotas e middlewares são configurados.
- **`server.js`**: Arquivo que inicia o servidor e conecta ao banco de dados MongoDB.
- **`.env`**: Contém as variáveis de ambiente sensíveis, como credenciais de banco de dados.
- **`package.json`**: Gerencia as dependências do projeto, scripts de execução e outras configurações.
- **`README.md`**: Documento de explicação sobre o projeto.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: versão 14 ou superior
- **MongoDB Atlas**: Um banco de dados MongoDB na nuvem ou MongoDB local

### Passos para executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/Millena-Monteiro/miniptojetom4-api-solidaria.git
   ```
