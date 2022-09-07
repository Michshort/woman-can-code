let readline = require('readline-sync');

function receberNumero() {
    console.log('Bem vindo! \n');

    do {
        var numero = Number(readline.question('Entre com um número e descubra seus divisores: '));

        if (isNaN(numero)) {
            console.log('O valor informado não é válido! Tente novamente. \n')
        }
    } while (isNaN(numero));
    return numero;
}

calculaDivisores = (valor) => {
    let divisores = 0; 

    for (let i=0; i<=valor; i++){
  
        if (valor % i == 0) {
            divisores = divisores + 1;
            console.log(`Os divisores de ${valor} são: ${i}`);
        }
    }
    if (divisores == 2) {
            
     console.log('Esse número é primo');
    } 
    
}

calculaDivisores2 = (valor) => {
    let divisores = [];

    for (let i=0; i<=valor; i++) {
        if (valor % i == 0) {
            divisores.push(i);
        }
    }
    console.log(`Os divisores de ${divisores} são: ${divisores}`);
    
}

rodarAplicativo = () => {
    let continuar = '';
    do {
        let valor = receberNumero();
        desc
    } while ();
}

let valor = receberNumero();
console.log(valor);
calculaDivisores(valor);