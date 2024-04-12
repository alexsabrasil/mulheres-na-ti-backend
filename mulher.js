const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Alexsandra Tavares',
    imagem: 'https://im.ge/i/1707252172189.WGuHYG',
    minibio: 'Neuropsicopedagoga e Engenheira de Dados' ,
})

}

    function mostraPorta() {
        console.log('Servidor criado e rodando na porta' , porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)