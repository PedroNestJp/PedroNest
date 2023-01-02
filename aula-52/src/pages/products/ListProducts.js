import {useState} from "react"
import {MongoClient} from 'mongodb'

const url = "mongodb+srv://pedronest:pedronest@pedronest.8ao18d8.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);

const Produtos = () => {
    const [Produtos, setProducts] = useState([])


    const ListProducts = async (event) => {
        const dbName = "test"
        const db = client.db(dbName)
        const col = db.collection("Produtos")
        const myDoc = await col.findOne();
        console.log(myDoc);
    }
    ListProducts()

    return(
    <div>
        <h1> Produtos </h1>
        {Produtos.map((produto)=>(
            <div> {produto.nome} </div>  
        ))}
    </div>
    )
}
export default Produtos