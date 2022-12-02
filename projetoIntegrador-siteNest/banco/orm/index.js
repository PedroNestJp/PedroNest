const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.get ('/', (req, res)=> {
    res.send('hi Pedro')
})

app.get ('/produtos', async (req, res)=> {
    const produtos = await prisma.produtos.findMany()
    if (produtos){ res.send(produtos) }

})

app.get ('/produtos/:id', async (req, res)=> {
    const id = parseInt( req.params.id )
    const produtos = await prisma.produtos.findUnique({where:id})
    if (produtos){res.send(produtos)}

})

app.get ('/usuarios', async (req, res)=> {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
    
})

app.get ('/produtos/:id', async (req, res)=> {
    const data = parseInt( req.params.id )
    const produtos = await prisma.produtos.findUnique({where:id})
    res.send(produtos)

})

app.get ('/usuariospj', async (req, res)=> {
    const usuariospj = await prisma.usuariospj.findMany()
    res.send(usuariospj)

})

app.listen (PORT, ()=>{
    console.log(`✔ serviço rodando em: http://localhost:${PORT}`)
})