const { Router } = require('express')
const router = Router()
const produtoController = require('../controllers/produtos')

router.get('/produtos', produtoController.meusProdutos)

module.exports = router