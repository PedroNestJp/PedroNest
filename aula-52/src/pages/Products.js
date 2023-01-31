import {useState, useEffect} from "react"
import axios from "axios"

const Products = () => {

    const [produtos, setProdutos] = useState([])
    
    useEffect(()=>{
        ListProducts()
    })


    const ListProducts = async () => {
        const response = await axios.getUri("mongodb+srv://pedronest:pedronest@pedronest.8ao18d8.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true")
        setProdutos(response.data)
        console.log(response)
        return(response.data) 
    }

    return(
    <div>
        <h1> Produtos </h1>
        {produtos.map((produto)=>(
            <div> {produto.nome} </div>  
        ))}
    </div>
    )
}
export default Products