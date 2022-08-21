// fabrica = Logos
const fabricarCarros = (modelo, cor) => {
    let carro = {}
    carro.fabrica = 'Renault'
    carro.ano = 2023
    carro.modelo = modelo
    return carro
}

console.log(fabricarCarros('Nissan', 'Preto'))
console.log(fabricarCarros('Polo'))
console.log(fabricarCarros('Ferrari'))