# Projeto Backend-Meu primeiro servidor

Este é um projeto de backend que inclui a utilização do MongoDB como servidor de banco de dados, o Render para criar o link do servidor, o Insomnia para testar e inserir os verbos HTTP para interagir com o servidor e o Vercel para integração com o frontend.

## Passo a passo de instalação e utilização

### Pré-requisitos

- Node.js e npm instalados no seu ambiente de desenvolvimento.
- Conta no MongoDB para configurar o banco de dados.
- Conta no Render para hospedar o servidor backend.
- Conta no Vercel para integração com o frontend.
- Insomnia instalado para testar e inserir os verbos HTTP.
  
## Instalação

1. Criei este repositório:

https://github.com/alexbrasil/mulheres-na-ti-backend.git

2. Instalei as dependências:
   
- cd projeto-backend
- npm install

3. Configurei as variáveis de ambiente:
   
- Criei um arquivo .env na raiz do projeto e adicionei as seguintes variáveis:

- MONGO_URL=sua-url-do-mongodb
- Substitua sua-url-do-mongodb pela URL do seu banco de dados MongoDB.

## Execução

Iniciei o servidor:

- node mulheres.js

- O servidor estará rodando em http://localhost:3333.

## Uso do Insomnia

- Utilizei o Insomnia para testar os endpoints da API. Importe o arquivo 
- `Insomnia_Requests.json` para ter acesso aos verbos HTTP configurados.

## Integração com o Vercel

- Para integrar o backend com o frontend, siga as instruções fornecidas pela documentação do Vercel.

## Hospedagem no Render

- Para hospedar o servidor backend no Render, siga as instruções fornecidas pela documentação do Render.

## Algumas Estruturas do Projeto

O projeto está estruturado da seguinte forma:

- `mulher.js`: Contém o código para criar um servidor simples utilizando o Express, com uma rota para exibir informações de uma mulher.
- `mulheres.js`: Contém o código para criar um servidor mais elaborado com rotas para manipular dados de mulheres, incluindo operações CRUD (Create, Read, Update, Delete).
- `server.js`: Versão simplificada do servidor com uma única rota para criar uma mulher.
- `mulherModel.js`: Define o modelo de dados para uma mulher utilizando o Mongoose.
- `bancoDeDados.js`: Configura a conexão com o banco de dados MongoDB.
- `package.json`: Arquivo de configuração do Node.js que lista as dependências e scripts do projeto.

## Contribuição

- Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a Licença ISC.

# O que aprendi neste curso de back-end meu primeiro servidor {EuProgramo}

1. Configuração de um servidor com Express: Aprendi a utilizar o framework Express para criar um servidor web em Node.js. Isso inclui a definição de rotas para lidar com requisições HTTP.

2. Utilização do MongoDB como banco de dados: Aprendi como conectar e interagir com um banco de dados NoSQL MongoDB utilizando o Mongoose, uma biblioteca Node.js para modelagem de dados.

3. Operações CRUD (Create, Read, Update, Delete): Implementei operações CRUD para manipular dados no MongoDB. Isso envolve criar (POST), ler (GET), atualizar (PATCH) e excluir (DELETE) registros do banco de dados.

4. Tratamento de requisições e respostas HTTP: Aprendi a tratar diferentes tipos de requisições HTTP (GET, POST, PATCH, DELETE) e a enviar respostas adequadas para o cliente.

5. Configuração de variáveis de ambiente: Utilizei variáveis de ambiente para armazenar informações sensíveis, como a URL de conexão com o banco de dados MongoDB, de forma segura.

6. Utilização de pacotes npm: Instalei e utilizei diversos pacotes npm, como o Express, Mongoose, dotenv, cors, entre outros, para facilitar o desenvolvimento do seu projeto.

7. Teste de API com Insomnia: Aprendi a testar API utilizando o Insomnia, inserindo verbos HTTP e verificando as respostas do servidor.

8. Integração com outros serviços de hospedagem: Recebi uma introdução à integração com serviços de hospedagem como o Render e o Vercel, para hospedar e integrar seu backend com outros serviços.

No geral, este projeto me deu uma base sólida para construir aplicativos web com Node.js, Express e MongoDB, além de te introduzir a conceitos importantes de desenvolvimento de backend, como roteamento, modelagem de dados, e operações de CRUD.
