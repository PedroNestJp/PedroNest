import { useState } from "react";

function StateFul() {
    const [total,setTotal] = useState(0)


    return(
    <div>
        <h1> Usando Hooks </h1>
        <h1> {total} </h1>
        <button onClick={()=>setTotal(total+1)}> somar + </button>
        <button onClick={()=>setTotal(total-1)}> diminuir - </button>
        <h1> {api} </h1>
    </div>
    )
}

export { StateFul }