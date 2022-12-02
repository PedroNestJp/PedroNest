const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.post('/usuarios', async (req,res)=>{
    const data = req.body
    const produto = await prisma.produtos.create({data}) 
    if(produto) { res.status(200).send(`O ${produto.descricao} foi criado com sucesso ✅`)}

})

app.get('/usuarios', async (req,res) =>{
    const produtos = await prisma.produtos.findMany()
        if(produtos){ res.status(200).send(produtos)}
        res.status(404).send(`${produtos} nada encontrado`)
})

app.get('/produtos/:id', async (req,res) =>{
    const id = parseInt(req.params.id)
    const produtos = await prisma.produtos.findUnique({where:{id}})
    res.send(produtos)
})

app.put('/produtos/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const data = req.body
    const produto = await prisma.produtos.update({where:{id},data})
    try { 
        if(produto) {res.send(`O produto de id: ${id} foi atualizado com sucesso ✅`  ) }
        
    } catch (error) {
        res.send("Algo de errado não está certo")
    }
})

app.delete('/produtos/:id', async (req,res)=>{
    const id =  parseInt(req.params.id)
    const data = req.body
    const produto = await prisma.produtos.delete({where:{id}})
    try {
        if (produto) { res.send(`O produto de id: ${id} foi deletado com sucesso ✅`  )}
    } catch (error) {
        res.status(404).send(`Não encontramos nenhum resultado para o id: ${id}`)
    }
    
})

