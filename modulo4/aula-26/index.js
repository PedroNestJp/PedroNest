const express = require('express')
const app = express()
//const ejs = require('ejs')
const port = 3000
const carros = require('./carros')

// app.get('/filter/:busca',(req,res) => {
//     const busca = req.params.busca
//     res.send(`sua busca foi: ${busca}`)
// })

app.get('/filter/:nome', (req,res) => {
    const nome = req.params.nome
    const resultado = carros.filter((carro) => {
        return carro.nome === nome
    }) 
    if (resultado.lengh > 0) {
    res.send(resultado)
    }
    res.send(`ñ encontramos resultado p/ a marca: ${nome}`)
    }) 

app.listen(port, () => console.log('api ok'))


