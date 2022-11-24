const express = require('express')
const app = express()
const PORT = 3000

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


app.get ('/', (req, res)=> {
    res.send('hi Pedro')

})

app.get ('/produtos', async (req, res)=> {
    const produtos = await prisma.produtos.findMany()
    res.send(produtos)

})

app.get ('/usuarios', async (req, res)=> {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)

})


app.get ('/usuariospj', async (req, res)=> {
    const usuariospj = await prisma.usuariospj.findMany()
    res.send(usuariospj)

})

app.listen (PORT, ()=>{
    console.log(`✔ serviço rodando em: http://localhost:${PORT}`)
})