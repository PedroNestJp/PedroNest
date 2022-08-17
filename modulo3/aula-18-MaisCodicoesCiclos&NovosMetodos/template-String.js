//Template String
function tirarCnh(idade) {
    return idade > 18 ? `Sua idade é: ${idade} anos, portanto, Você pode tirar CNH` : `Sua idade é: ${idade} anos, portanto, você nãp pode tirar a CNH`
        
}
console.log(tirarCnh(16))
console.log(tirarCnh(25))