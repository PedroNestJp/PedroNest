const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('hi PEDRO')
})

app.get('/usuarios', async (req,res)=>{
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})


app.post('/usuarios', async (req,res)=>{
    const data = req.body
    const resultado = await prisma.usuarios.create({data})
    if (resultado)
    res.status(201).send(`usuário criado com sucesso ✅`)
})

app.get('/usuarios/:id', async (req,res)=>{
    const id =  parseInt(req.params.id)
    const resultado = await prisma.usuarios.findUnique({where: {id}})
    if(resultado){
    res.send(resultado)
    } res.status(404).send(`o id:${id} não foi encontrado`)
})

app.delete('/usuarios/:id', async (req,res)=>{
    const id =  parseInt(req.params.id)
    const resultado = await prisma.usuarios.delete({where: {id}})
    if(resultado)
    res.send(`o id:${id} foi deletado com sucesso ✅`)
    
})

app.put('/usuarios/:id', async (req,res)=>{
    const id =  parseInt(req.params.id)
    const data = req.body
    const resultado = await prisma.usuarios.update({where: {id}, data })
    if(resultado){
        res.send(resultado)
    }  res.status(404).send(`não foi possível atualizar o registro`)
    
})



app.listen(PORT, console.log(`serviço rodando na porta : ${PORT} `))