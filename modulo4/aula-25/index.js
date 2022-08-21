const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/',(req, res) => res.send('GET OK'))

app.post('/',(req, res) => {
    res.send(req.body)
    
})


app.listen(PORT, () => console.log(`Serviço rodando na porta : ${PORT}`))