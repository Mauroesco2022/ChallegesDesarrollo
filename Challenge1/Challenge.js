function newFunctions (valor) {
    
    if (valor % 2 === 0) {
console.log(valor + "El numero es Par");
    } else 
    {
console.log(valor + "El numero es impar");
    }
}

const arrowF = (valor) => {
    if (valor % 2 === 0) {
        console.log(valor + "El numero es Par");
    } else 
    {
console.log(valor + "El numero es impar");
    }
}

console.log(newFunctions(1))
console.log(newFunctions(2))