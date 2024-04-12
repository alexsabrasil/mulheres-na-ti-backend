const express = require("express")

const app = express()
const porta = 3333

    function mostraPorta() {
        console.log('Servidor criado e rodando na porta' , porta)
}

//chamar a função, com os parenteses
//mostraPorta()
//Execcutar no terminal digita os comandos e testar o código: node server.js
//Resposta no terminal: Servidor criado e rodando na porta 3333
//app.Listen(porta, mostraPorta), no terminal digita node server.js. Para rodar o servidor
app.listen(porta, mostraPorta)