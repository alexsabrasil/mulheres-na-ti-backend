const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333


const mulheres = [
    {
        nome: 'Alexsandra Tavares', 
        imagem: 'https://im.ge/i/1707252172189.WGuHYG',
        minibio: 'Neuropsicopedagoga e Engenheira de Dados' ,
    },
    {
        nome: 'Alexsandra Tavares', 
        imagem: 'https://im.ge/i/1707252172189.WGuHYG',
        minibio: 'Neuropsicopedagoga e Engenheira de Dados' ,
    },
    {
        nome: 'Alexsandra Tavares', 
        imagem: 'https://im.ge/i/1707252172189.WGuHYG',
        minibio: 'Neuropsicopedagoga e Engenheira de Dados' ,
    },
]

function mostraMulheres(request, response) {
response.json(mulheres)

}

    function mostraPorta() {
        console.log('Servidor criado e rodando na porta' , porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)