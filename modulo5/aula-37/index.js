const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    return res.send('ok')
})

app.listen(port,() => console.log(`serviço rodando na porta : ${port}`))