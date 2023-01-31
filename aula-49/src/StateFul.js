import React from 'react'

class StateFul extends React.Component{

    constructor(){
        super()
        this.state = {
            nome:'Pedro',
            nomeCheck: "Ativado",
            contador: 0
        }

    }

    render(){
        return(
        <>
            <h1> Sobre StateFul </h1>
            <input type='checkbox' onClick={()=>this.setState({nomeCheck: 'desativado'})} ></input>
            {this.state.nomeCheck}
            <br/>
            <button onClick={()=>this.setState({nome:'Silva'})}> Botão </button>
            {this.state.nome}

            <h1>  exerc </h1>
            <button onClick={()=> this.setState({contador:this.state.contador +1})} > Soma </button>
            <button onClick={()=> this.setState({contador: this.state.contador -1})} > Subtrai </button>
            {this.state.contador}

        </>
    )}

    
}

export default StateFul 