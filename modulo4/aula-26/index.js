const express = require('express')
const app = express()
const PORT = 3000
const carros = require('./carros.js')
// JavaScript
app.use(express.json());

app.get('/filtro/:marca', (req, res) => {
    const marca = req.params.marca
    console.log(marca)
    const resultado = carros.filter((carro) => {
        return carro.marca === marca
    })
    if (resultado.length > 0) {
        res.send(resultado)
    }
    res.send(`Não encontramos nenhum carro para a marca: ${marca}`)
})

app.get('/filtro', (req, res) => {
    const marca = req.query.marca
    const ano = req.query.ano
    const cor = req.query.cor
    const doAno = req.query.doAno

    const resultado = carros.filter((carro) => {
        return carro.marca === marca || carro.ano == ano || carro.cor === cor || carro.doAno === doAno
    })

    if (resultado.length > 0) {
        res.send(resultado)
    }
    res.send('Não encontramos nenhum carro com as informações informadas.')
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    const novosCarros = carros.filter((carro) => carro.id != id)
    res.send(novosCarros)
})

app.put('/update/:id', (req, res) => {
    const carro = req.body
    res.send(carro)
})

// CRUD = Create (Post), Read (Get), Update (Put) and Delete (Delete)

app.listen(PORT, () => console.log('API está funcionando corretamente.'))