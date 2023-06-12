<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição 

(https://github.com/nestjs/nest) Este repositório contém a documentação para iniciar o sistema e documentar as rotas de um projeto desenvolvido com as seguintes tecnologias:

- Docker Compose 
- NestJS
- Swagger
- Prisma
- TypeScript
- PostgreSQL
- Jest

## Configuração do Ambiente

Certifique-se de ter o Docker Compose instalado em sua máquina. Você pode encontrar as instruções de instalação no site oficial do Docker.

## Inicialização do Sistema
Para iniciar o sistema, siga as etapas abaixo:

1. Clone este repositório em sua máquina local:
```bash
$ git clone https://github.com/DeividhyTonetti/luiza-labs-api
```
    
2. Navegue até o diretório raiz do projeto:

```bash
$ cd seuRepositorio
```
3. Crie as vairáveis de ambiente
```bash
    NODE_ENV="development" // or production

    # Database Config
    DATABASE_USER="seu usuário"  // padrão DATABASE_USER="postgres"
    DATABASE_PASSWORD="sua senha"
    DATABASE_NAME="luizaLabs"
    DATABASE_HOST="seu host" // padrão "localhost"
    DATABASE_PORT="sua porta" //5432
    DATABASE_URL="postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?schema=public"

```

4. Execute o comando do Docker Compose para construir e iniciar os containers:

```bash
$ docker-compose up -d

```
   Isso criará e inicializará os      containers Docker necessários para executar o sistema.

5. O sistema estará disponível em http://localhost:3000. Você pode acessar a documentação da API através do Swagger em http://localhost:3000/api.


## Documentação das Rotas

A seguir, estão documentadas as rotas disponíveis no sistema:

### Customers
POST /customers
Endpoint para criar um novo cliente.

Corpo da Requisição:
```bash
 Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  ...
}



```
Resposta:

```bash
200 OK
Content-Type: application/json

{
  "id": "1",
  "name": "John Doe",
  "email": "johndoe@example.com",
  ...
}

```

## Visualizar a API do Swagger
Você pode visualizar a documentação da API usando o Swagger. Para acessar a documentação, siga estas etapas:

1. Certifique-se de que o sistema esteja em execução.

2. Abra o navegador e vá para http://localhost:3000/api.

3. A documentação da API será exibida no Swagger UI.

## Visualizar o Banco de Dados com o Prisma

   Você pode visualizar o banco de dados usando o Prisma. Para visualizar o banco de dados, execute o seguinte comando:
  
 ```bash
 

npx prisma studio

``` 

   Isso abrirá o Prisma Studio no navegador, onde você pode explorar e modificar os dados do banco de dados.
   
   
## Download das Rotas no Insomnia

  Você pode baixar um arquivo com as rotas no formato do Insomnia para facilitar o teste da API. Clique no botão abaixo para fazer o download:

Download Insomnia

  Depois de baixar o arquivo, importe-o no Insomnia para obter todas as rotas configuradas automaticamente.
## License

Nest is [MIT licensed](LICENSE).
