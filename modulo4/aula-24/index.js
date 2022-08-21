const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hi Pedro')
})
app.post('/',(req,res) => {
    res.status(201).send('Hi Pedro Dnv')
})

app.listen(port, () => {
    console.log(`Serviço on na porta ${port}`)
})