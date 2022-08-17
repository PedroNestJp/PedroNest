const series = [
    'Stranger Things',
    'Black list',
    'Brooklyn 99',
    'Peaky Blinders'
]

const serieEscolhida = series.map((serie) => serie === 'Peaky Blinders' ? serie : null) 
console.log(series)
console.log(serieEscolhida)

const serieEscolhida1 = series.filter((serie1) => serie1 === 'Peaky Blinders' ? serie1 : null)
console.log(series)
console.log(serieEscolhida1)
