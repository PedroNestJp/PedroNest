const express = require('express')
const port = 3000
const app = express()

app.get('/', (req,res)=> {
    res.send('hi Pedro')
})

app.listen(port, () => {
    console.log( `serviço rodando na porta: ${port} ✔ `)
})