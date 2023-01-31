import {useState, useEffect} from "react"
import axios from "axios"

const Produtos = () => {

    const [Produtos, setProdutos] = useState([])
    useEffect(()=>{
        findProdutos()
    })


    const findProdutos = async () => {
        const response = await axios.getUri("mongodb+srv://pedronest:pedronest@pedronest.8ao18d8.mongodb.net/test")
        setProdutos(response.data)
        console.log(response)
        return(response.data) 
    }

    return(
    <div>
        <h1> Produtos </h1>
        {!Produtos.length ? 'carregando' : Produtos.get(produto =>(
            <h3> {produto.nome} </h3>
        )) }
    </div>
    )
}
export default Produtos