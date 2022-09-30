const express = require('express')
const app = express()
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()
const port = 3000




app.get('/teste', async (req,res) => {
    let teste = await prisma.teste.findMany()
    res.send(menbros)
})

app.listen(port,() => console.log(`serviço rodando na porta : ${port}`))