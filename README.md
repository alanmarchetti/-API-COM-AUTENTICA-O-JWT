## API COM AUTENTICAÇÃO JWT
API com autenticação de usuário desenvolvida com node.js 
<hr>

## DESCRIÇÃO DO PROJETO
API com a finalidade de cadastrar e logar um usuário utilizando banco de dados. Após logado e autenticado o usuário poderá ter acesso a rota de criação de posts.
<hr>

## TECNOLOGIAS E BIBLIOTECAS UTILIZADAS NO PROJETO

- Javascript
- Node.js
- Express
- MongoDB com mongoose
- Bcryptjs
- Hapi/Joi
- JsonWebToken 
<hr>

## COMO EXECUTAR O PROJETO

1. Clonar o repositório
1. Executar o comando  `npm i`  para instalar as dependecias
1. Fazer uma cópia do arquivo `.env.example` e chamar de `.env`
1. Atualizar variáveis de ambiente no arquivo `.env`
1. Executar o comando `npm start` para rodar o servidor
1. Utilize o `Postman`, `Insomnia`, ou similares para realizar as requisições
<hr>

## Alguns Requisitos

#### Cadastro

- Necessário informar nome, email e senha
- Necessário inserir um email válido
- Não é permitido o cadastro de senha menores que 6 caracetres
- O email deve ser único
- Não é permitido cadastrar o mesmo email mais de uma vez



#### Post 

- Para o usuário acessar a rota de post, ele deverá está cadastrado e logado no sistema
- Token JWT deve ser informado para validação
- Para criar um post é necessário possuir um token válido