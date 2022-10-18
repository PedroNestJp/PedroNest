let produto = "Maça"
let quantidadeDoProduto = 1
let quantidadeFaltandoDoParaPromocao = 5
let quantidadeRestanteDeMacas = quantidadeFaltandoDoParaPromocao - quantidadeDoProduto

function validaFruta(produto){
if (produto === "Maça") {
    return `você escolheu a fruta ${produto}`
}}
console.log (validaFruta("Maça"))

function validaPromo(quantidadeDoProduto){
    if (quantidadeDoProduto > 5 ){
        return "Você recebeu uma promoção, o valor do produto sairá por R$5.00"
    }
     else (quantidadeDoProduto <=5)
        
        return (`se você adicionar mais ${quantidadeRestanteDeMacas} o valor sairá por : R$5.00 `)
     }
     
console.log (validaPromo())
