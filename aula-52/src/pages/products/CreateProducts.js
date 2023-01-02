import { useState } from "react"
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://pedronest:pedronest@pedronest.8ao18d8.mongodb.net/test";
const client = new MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


const CreateProduct =  () => {
    
    const [Nome, setNome] = useState("")
    const [Desc, setDesc] = useState("")    
    const [Preco, setPreco] = useState("")


        const registerProduct = async () =>{
            const dbName = "test"
            const db = client.db(dbName)
            const col = db.collection("Produtos")

            let productDocument = {
                nome: Nome,
                desc: Desc,
                preco: Preco
            }
            const response = await col.insertOne(productDocument)
            console.log(response)
            const myDoc = await col.findOne()
            console.log(myDoc);
}


    return(
        <div>
            <h1> CreateProduct </h1>
            <div>
                <label> Digite o nome do produto: </label>
                <input type="text" 
                        name="nome" 
                        placeholder="Digite o nome do produto" 
                        value={Nome} 
                        onChange={(event)=> setNome(event.target.value)}>  
                </input>
            </div>
            <div>
                <label> Digite a descrição do produto: </label>
                <input type="text" 
                        name="desc" 
                        placeholder="Digite a descrição do produto" 
                        value={Desc} 
                        onChange={(event)=> setDesc(event.target.value)} >  
                </input>
            </div>
            <div>
                <label> Digite o preço do produto: </label>
                <input type="text" 
                        name="nome" 
                        placeholder="Digite o preço do produto" 
                        value={Preco}
                        onChange={(event)=> setPreco(event.target.value)}>  
                 </input>

                <button onClick={(e) => registerProduct(e)}> Cadastrar </button>
            </div>
        </div>
    )
}
export default CreateProduct