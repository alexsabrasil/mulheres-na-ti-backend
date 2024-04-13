const express = require("express")
const { v4: uuidv4 } = require('uuidv4')
const router = express.Router()

const app = express()
const porta = 3333

//POST
function criaMulher(req, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: req.body.nome,
        imagem: req.body.imagem,
        minibio: req.body.minibio
    }
    
    mulheres.push(novaMulher)

    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.post('/mulheres', criaMulher))

app.listen(porta, mostraPorta)
//chamar a função, com os parenteses, mostraPorta()
//Execcutar no terminal digita os comandos e testar o código: node server.js
//Resposta no terminal: Servidor criado e rodando na porta 3333
//app.Listen(porta, mostraPorta), no terminal digita node server.js. Para rodar o servidor