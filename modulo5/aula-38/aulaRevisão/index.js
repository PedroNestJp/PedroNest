const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req,res)=>{
    res.send('hi PEDRO')
})

app.listen(PORT, console.log(`serviço rodando na porta : ${PORT} `))