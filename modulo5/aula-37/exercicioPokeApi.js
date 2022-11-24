const express = require('express')
const app = express()
const PORT = 3003
const axios = require('axios')


app.get('/', (req,res)=>{
    axios.get('https://swapi.dev/api/people').then((response)=>{
        res.send(response.data)
    })
    
})

app.get('/peoples', async (req,res)=>{
    try {
        const peoples = await axios.get('https://swapi.dev/api/people')
        res.send(peoples.data)
    } catch (error) {
        console.log('error')
    } finally {console.log('closed promisse')}

})

app.get('/1', async (req,res)=>{
    try {
        const peoples = await axios.get('https://swapi.dev/api/people/')
        res.send(peoples.data)
    } catch (error) {
        console.log('error')
    } finally {console.log('closed promisse')}

})

app.get('/pokemons', async (req,res)=>{
    const pokemons = await axios.get(' https://pokeapi.co/api/v2/pokemon/')
    res.send(pokemons)
})

app.listen(PORT, console.log(`✔ serviço sendo executado na porta: ${PORT}`))

