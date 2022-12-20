
import React, { useEffect, useState } from "react";
import api from "../services/api"


const Moves = () => {

    const [Moves, setMoves] = useState([])

        useEffect(()=>{ 
            async function recoverMoves(){
            const response = await api.get()
            setMoves(response.data.results)
            console.log(response.data.results) 
            console.log(response) 
            return response
        } 
        recoverMoves()

        

    },[])

    const movesRender = () =>{
       return Moves.map(moves =>(
            <>
                <h3>{moves.name} </h3>
                <h3>{moves.url} </h3>
            </>
        ))
    }

      return(
            <>
                <h1> moves ... </h1>
                { !Moves.length ? 'Carregando Pokemons ...' : movesRender()}
            </>

 )
}
export default Moves