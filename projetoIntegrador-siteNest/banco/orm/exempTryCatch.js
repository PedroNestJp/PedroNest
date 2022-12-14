const express = require('express')
const app = express()
const port = 3001
const axios = require('axios')


app.get('/produtos', (req, res)=> {
  axios.get('http://localhost:3000/produtos').then((resposta) => {
        res.send(resposta.data)
    }).catch((error)=>{
        res.send(error)
    }).finally(()=> {console.log('promessa concluída')})
    })

app.get('/produtos_async', async (req,res)=>{
    try {
        const produtos_async = await axios.get('http://localhost:3000/produtos')
            res.send(produtos_async.data)
    }catch (error) {
        console.log('error')
        res.send(error)
    }finally {
        console.log('the request was successfully')}
    
    
})

app.listen(port,() => console.log(`serviço rodando na porta : ${port}`))