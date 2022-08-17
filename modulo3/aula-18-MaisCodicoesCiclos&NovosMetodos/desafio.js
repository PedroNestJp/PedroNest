//function tirarCNH(idade){
    //if (idade >17 ) {
        //return 'você pode'
    //}
    //else if(idade <74){
        //return 'voce pode'
    //}
    //else (idade >74 ) 
        //return 'você não pode'
    
//}
//console.log(tirarCNH(76))

function tirarCnh(idades){
    switch (idades) {
        case idades <=74:
            console.log('voce pode');
            break;
        case idades <=17 :
            console.log('voce n pode');
            break;
            case idades >75 :
            console.log('voce n pode');
            break;
        default: idades =18
        console.log('voce pode');

    }
   
}
tirarCnh(76);
