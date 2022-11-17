const express = require('express')
const app = express()
const PORT = 3000

app.get ('/', (req, res)=> {
    res.send('hi Pedro')

})

app.get ('/usuarios', (req, res)=> {
    res.send([{nome: 'Pedro', email:'pedro@gmail', senha:'112345'},
        {nome: 'silva', email:'pedro@gmail', senha:'112345'},
        {nome: 'pontes', email:'pedro@gmail', senha:'112345'}
    ])


})

app.listen (PORT, ()=>{
    console.log(`✔ serviço rodando na porta: ${PORT}`)
})