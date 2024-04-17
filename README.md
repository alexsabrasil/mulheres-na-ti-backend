Projeto Backend-Meu primeiro servidor

Este é um projeto de backend que inclui a utilização do MongoDB como servidor de banco de dados, o Render para criar o link do servidor, o Insomnia para testar e inserir os verbos HTTP para interagir com o servidor e o Vercel para integração com o frontend.

Passo a passo de instalação e utilização
Pré-requisitos
Node.js e npm instalados no seu ambiente de desenvolvimento.
Conta no MongoDB para configurar o banco de dados.
Conta no Render para hospedar o servidor backend.
Conta no Vercel para integração com o frontend.
Insomnia instalado para testar e inserir os verbos HTTP.
Instalação
Clone este repositório:
bash
Copy code
git clone https://github.com/seu-usuario/projeto-backend.git
Instale as dependências:
bash
Copy code
cd projeto-backend
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

arduino
Copy code
MONGO_URL=sua-url-do-mongodb
Substitua sua-url-do-mongodb pela URL do seu banco de dados MongoDB.

Execução
Inicie o servidor:
sql
Copy code
npm start
O servidor estará rodando em http://localhost:3333.

Uso do Insomnia
Utilize o Insomnia para testar os endpoints da API. Importe o arquivo Insomnia_Requests.json para ter acesso aos verbos HTTP configurados.

Integração com o Vercel
Para integrar o backend com o frontend, siga as instruções fornecidas pela documentação do Vercel.

Hospedagem no Render
Para hospedar o servidor backend no Render, siga as instruções fornecidas pela documentação do Render.

Estrutura do Projeto
O projeto está estruturado da seguinte forma:

mulher.js: Contém o código para criar um servidor simples utilizando o Express, com uma rota para exibir informações de uma mulher.
mulheres.js: Contém o código para criar um servidor mais elaborado com rotas para manipular dados de mulheres, incluindo operações CRUD (Create, Read, Update, Delete).
server.js: Versão simplificada do servidor com uma única rota para criar uma mulher.
mulherModel.js: Define o modelo de dados para uma mulher utilizando o Mongoose.
bancoDeDados.js: Configura a conexão com o banco de dados MongoDB.
package.json: Arquivo de configuração do Node.js que lista as dependências e scripts do projeto.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar este projeto.

Licença
Este projeto está licenciado sob a Licença ISC.
