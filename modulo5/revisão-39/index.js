const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.get('/usuarios', async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})

app.post('/usuarios', async (req, res) => {
    const data = req.body
    console.log(data)
    const resultado = await prisma.usuarios.create({ data })
    if (resultado) 
        res.status(201).send(resultado)
})

app.get('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const resultado = await prisma.usuarios.findUnique({ where: { id } })
    if (resultado) {
        res.status(200).send(resultado)
    }
    res.status(404).send(`Não encontramos nenhum resultado para o id: ${id}`)
})

app.delete('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const resultado = await prisma.usuarios.delete({ where: { id } })
    if (resultado)
        res.send('O registro foi excluído com sucesso!')
})

app.put('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    const resultado = await prisma.usuarios.update({ where: {id},data })
   res.send(resultado)})

app.listen(3000, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})