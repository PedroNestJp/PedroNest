const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.get('/usuarios', async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})

app.listen(3000, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})