const express = require('express')
const app = express()
const port = 3001
const axios = require('axios')

app.get('/', (req,res) => {
    res.send('ok')
})

app.get('/produtos', ()=> {
    axios.get((req,res)=> {
        res.send(resposta)
    })
})

app.listen(port,() => console.log(`serviço rodando na porta : ${port}`))