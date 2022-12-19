import axios from 'react'

const api = axios.create({
    urlBase:'https://pokeapi.co/api/v2/ability/'
})

export default api