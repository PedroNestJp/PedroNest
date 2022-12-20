function Table(){

    return(
      <table>
        <thead>
          <tr>
            <td> Nome </td>
            <td> Senha </td>
            <td> Email </td>
        </tr>
      </thead>
      <tbody>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
        <Dados></Dados>
      </tbody>
    </table>
    )
    
  }
  
  function Dados(){
    return(
      <tr>
        <td> Pedro </td>
        <td> 1234 </td>
        <td> pedronest@gmail.com </td>
      </tr>
    )
  }
  
  
  export default Table
  