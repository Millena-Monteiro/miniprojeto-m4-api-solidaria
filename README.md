API Solidária

Uma API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciar doadores, doações e campanhas solidárias. Ideal para organizações e voluntários que desejam facilitar e organizar o processo de doações de forma simples e eficiente.

🛠️ Tecnologias Utilizadas

Node.js

Express.js

MongoDB + Mongoose

Nodemon

Dotenv

JavaScript (ESModules)

📁 Estrutura do Projeto
api-solidaria/
├── frontend/             # Frontend (HTML, CSS, JS)
├── src/
│   ├── controllers/    # Lógica das rotas (Doadores, Doações, Campanhas)
│   ├── models/         # Modelos do MongoDB
│   ├── routes/         # Rotas da aplicação
│   └── app.js          # Configuração do Express
├── server.js           # Entrada principal e conexão com MongoDB
├── .env                # Variáveis de ambiente
├── package.json
└── README.md

💡 Como Rodar o Projeto
Pré-requisitos

Node.js (versão 14 ou superior) instalado na sua máquina

MongoDB Atlas (banco de dados na nuvem) ou MongoDB local configurado

Passos para executar

Clone o repositório:

git clone https://github.com/Millena-Monteiro/miniptojetom4-api-solidaria.git


Entre na pasta do projeto:

cd miniptojetom4-api-solidaria


Instale as dependências:

npm install


Crie um arquivo .env na raiz do projeto e configure suas variáveis de ambiente (exemplo):

PORT=3000
MONGODB_URI=sua_string_de_conexao_mongodb


Inicie a aplicação em modo desenvolvimento (com nodemon):

npm run dev


Acesse a API via http://localhost:3000 (ou a porta que você configurou)

📋 Funcionalidades

CRUD de Doadores

CRUD de Doações

CRUD de Campanhas Solidárias

Rotas RESTful organizadas e documentadas

Validação e tratamento de erros

Conexão segura com banco de dados MongoDB

📚 Documentação das Rotas

GET /doadores — Lista todos os doadores

POST /doadores — Cadastra um novo doador

GET /doadores/:id — Detalhes de um doador

PUT /doadores/:id — Atualiza dados do doador

DELETE /doadores/:id — Remove um doador

(idem para doações e campanhas, de acordo com a estrutura do projeto)

🤝 Contribuição

Contribuições são sempre bem-vindas! Para colaborar:

Fork este repositório

Crie uma branch com a sua feature: git checkout -b minha-nova-feature

Faça commit das suas mudanças: git commit -m 'Adiciona nova feature'

Envie para o seu fork: git push origin minha-nova-feature

Abra um Pull Request aqui no repositório principal

📫 Contato

Se quiser falar comigo, pode me encontrar nas redes:

<p>
  <img src="https://i.imgur.com/nm4GBVJ.png" alt="LinkedIn" height="25px" style="vertical-align:middle;" /> 
  <a href="https://www.linkedin.com/in/millena-monteiro-diniz/" target="_blank">linkedin.com/in/millena-diniz</a>
</p>

<p>
  <img src="https://i.imgur.com/ukFIC9b.png" alt="Email" height="25px" style="vertical-align:middle;" /> 
  <a href="mailto:707millenamonteiro@gmail.com">707millenamonteiro@gmail.com</a>
</p>


🎉 Agradecimentos

Obrigado por visitar este projeto! Espero que ele ajude a conectar pessoas e facilitar ações solidárias! ✨
