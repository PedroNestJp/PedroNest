import React from 'react';

class StateFul extends React.Component{

    constructor(){
        super()
        this.state = {
            total: 0,
            
        }
     }

    render(){
        return (
            <div>
                <h1> Contador para aumentar 1 número ou dominuir 1 número </h1>
                    <div >
                    <button className='button'
                        onClick={()=> this.setState({total: this.state.total+1})}> 
                            Incrementar
                    </button>
                    <button className='button' 
                        onClick={()=> this.setState({total: this.state.total-1})}> 
                            Decrementar
                    </button>
                    </div>

                
                {this.state.total}
            </div>
        )
    }

} export default StateFul