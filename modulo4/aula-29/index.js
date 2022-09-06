const express = require('express');
const app = express();
const PORT = 3001;

app.get('/home', (req, res) => {
    res.send('Bem vindo a Logos Academy! 🧔')
})

app.use((req, res, next) => {
    if (req.headers.host == 'localhost:3000') {
        res.send('Você não tem permissão para acessar esse serviço.')
    }
    next()
})

app.get('/relatorio', (req, res) => {
    res.send('Fazendo download do relatório...')
})

app.get('/relatorio-com-filtro', (req, res) => {
    res.send('Fazendo download do relatório...')
})

app.listen(PORT, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})