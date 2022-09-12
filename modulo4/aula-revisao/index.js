const express = require('express')
const app = express()
const PORT = 3000

const users = require('./users')

app.use(express.json())

app.get('/obrigatoria/:id', (req,res) =>{
    const id = req.params.id
    return res.send(`voce solicitou o id ${id}`)
})

app.get('/opcional', (req,res) =>{
    const name = req.query.name
    return res.send(`voce solicitou o name: ${name}`)
})


app.post('/login', (req,res) => {
    const body = req.body;
    return res.send(body);
});

app.post('/users', (req,res) => {
    const body = req.body;
    return res.send(users);
});

app.listen (PORT, () => console.log(`executando na porta : ${PORT}`));