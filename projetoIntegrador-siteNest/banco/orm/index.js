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

app.post('/produtos', async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.create({data})
    if (produtos){ 
        res.send("Produto criado com sucesso")
    }
})

app.get ('/produtos', async (req, res)=> {
    const produtos = await prisma.produtos.findMany()
    if (produtos){
        res.send(produtos)
    }
})

app.get ('/produtos/:id', async (req, res)=> {
    const id = parseInt( req.params.id )
    const produtos = await prisma.produtos.findUnique({where:{id}})
    if (produtos){res.send(produtos)}

})

app.delete('/produtos/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const produtos = await prisma.produtos.delete({where:{id}})
    if (produtos){
    res.send("Produto deletado com sucesso ✅")
    }
})




app.post('/usuarios', async (req, res)=> {
    const data = req.body
    const usuarios = await prisma.usuarios.create({data})
    res.send('usuário criado com sucesso ✅')
    
})


app.get ('/usuarios', async (req, res)=> {
    const usuarios = await prisma.usuarios.findMany()
    if (usuarios){
    res.send(usuarios)
    }
})
app.get ('/usuarios/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuarios.findUnique({where:{id}})
    if (usuarios){
    res.send(usuarios)
    }
})
app.delete('/usuarios/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuarios.delete({where:{id}})
    if (usuarios){
    res.send("Usuário deletado com sucesso ✅")
    }
})


app.post("/usuariospj", async (req,res) => {
    const data = req.body
    console.log(data)
    const usuariospj = await prisma.usuariospj.create({data})
    if(usuariospj){
        res.send('UsuárioPJ criado com sucesso ✅')
    }
})

app.get('/usuariospj', async (req,res)=>{
    const usuariospj = await prisma.usuariospj.findMany()
    if (usuariospj) {
        res.send(usuariospj)
    }
})

app.get('/usuariospj/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const usuariospj = await prisma.usuariospj.findUnique({where:{id}})
    if (usuariospj){
        res.status(201).send(` O usuárioPJ ${usuariospj.nomeFantasia} de cnpj:${usuariospj.cnpj} cujo id:${id}, foi encontrado ✅`)
    }
})

app.listen (PORT, ()=>{
    console.log(`✔ serviço rodando em: http://localhost:${PORT}`)
})