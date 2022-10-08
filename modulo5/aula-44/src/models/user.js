const mongoose = require('mongoose');


const User = new  mongoose.Schema( {
    nome: { type: String, required: true},
    telefone: { type: String, required: true},
    email: { type: String, required: true},
    cpf: {type: String, required: true},
    endereco: {type: Array, required: true}
})

module.exports =  mongoose.model('Usuario_pedronest', User)