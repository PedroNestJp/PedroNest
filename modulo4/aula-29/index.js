const express = require('express')
const app = express()
const port = 3000

const usuarios = usuarios( 
    [
        {
        "id": 1,
        "nome": 'Pedro',
        "email": 'pedronestjp@gmail.com',
        "senha": 123456,
        "admin": true,
    }
    {
        "id": 2,
        "nome": 'João',
        "email": 'joãonestjp@gmil.com',
        "senha": 000000,
        "admin": true,
    }

    {
        "id": 3,
        "nome": 'Maria',
        "email": 'marianestjp@gmail.com',
        "senha": 000000,
        "admin": true,
    }
    ]

app.get('/',(req, res) => res.send('Bem vindo'))

app.use((req,res,next) => {
    if (req.headers.id == id)
    res.send('voce não tem acesso a essa pagina')
 next()
})

app.get('/:id',(req, res) => res.send('Bem vindo'))


app.listen(port, () => console.log(`✔ executando serviço na porta: ${port}`))