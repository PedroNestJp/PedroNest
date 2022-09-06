const express = require('express')
const app = express()
const multer = require('multer')
const PORT = 3000
const servicoDeEnvio = multer({ dest: 'arquivos' })
app.use('/arquivos', express.static('arquivos'))

app.get('/', (req, res) => {
    res.send('Hello World, Logos Academy')
})

app.post('/arquivo-upload', servicoDeEnvio.single('arquivo'), (req, res) => {
    const nomeDoArquivo = req.file.originalname
    const tamanhoDoArquivo = req.file.size
    res.send(`Nome do arquivo: ${nomeDoArquivo}, tamanho: ${tamanhoDoArquivo}`)
})

app.listen(PORT, () => {
    console.log(`🚀👍 Serviço executando em: http://localhost:${PORT}`);
})