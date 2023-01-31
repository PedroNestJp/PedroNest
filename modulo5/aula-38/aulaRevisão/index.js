const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/', (req,res)=>{
    res.send('hi PEDRO')
})

app.get('/usuarios', async (req,res)=>{
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})

app.listen(PORT, console.log(`serviço rodando na porta : ${PORT} `))