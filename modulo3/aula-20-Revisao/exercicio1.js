//Criar uma calculadora

const somar = (numero1, numero2) => numero1 + numero2
const subtrair = (numero1, numero2) => numero1 - numero2 
const multiplicar = (numero1, numero2) => numero1 * numero2 
const dividir = (numero1, numero2) => numero1 / numero2 

const calculadora = (callback, numero1, numero2) => callback (numero1, numero2);
console.log(calculadora(somar,1,1))
console.log(calculadora(subtrair,1,1))
console.log(calculadora(multiplicar,1,1))
console.log(calculadora(dividir,1,1))


