const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.post('/usuarios', async (req,res)=>{
    let data = req.body
    data.enderecos = { create: [req.body.enderecos]}

    const usuarios = await prisma.usuarios.create({ data }) 
    if(usuarios) { res.status(200).send(`O ${usuarios} foi criado com sucesso ✅`)}
    
})

app.post('/enderecos', async (req,res)=>{
    const data = req.body
    const enderecos = await prisma.enderecos.create({data}) 
    if(enderecos) { res.status(200).send(`O ${enderecos.descricao} foi criado com sucesso ✅`)}
    
})


app.get('/usuarios', async (req,res) =>{
    const usuarios = await prisma.usuarios.findMany()
        if(usuarios){ res.status(200).send(usuarios)}
        res.status(404).send(`${usuarios} nada encontrado`)
})
app.listen(PORT, console.log( `serviço rodando na porta :${PORT}`))