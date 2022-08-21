const produtos = ['Roteador', 'Switch', 'Servidor', 'Teclado', 'Mouse']

const meusProdutos = (req, res) => {
    res.send(produtos)
}

module.exports = {
    meusProdutos
}