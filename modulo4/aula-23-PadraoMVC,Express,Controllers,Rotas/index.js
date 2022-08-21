const express = require('express')
const app = express()
const porta = 1500
const rotas = require('./routers/rotas')

app.get('/',(req, res) => {
    res.send('Hello Word')
})
app.get('/sobre',(req, res) => {
    res.send('Hi, my name is Pedro.')
})

app.use('/', rotas)

app.listen(porta, () => {
console.log(`o serviço está execuntando na porta: ${porta}`)
})