{   
    //El map()método crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.
    const numeros = [1,2,3,4];
    const numerosDobles = numeros.map(double);
    function double(value,index,arr){
    return value * 2;
}
    console.log(numerosDobles);
{
    ////El filter()método crea una copia superficial de una parte de una matriz dada, filtrada solo a los elementos de la matriz dada que pasan la prueba implementada por la función proporcionada.
    const products = [
        {
            name:"condones",
            price: 6000,
            count: 3
        },
        {
            name: "lubicante",
            price: 10000,
            count: 1
        },
        {
            name: "viagra",
            price: 47500,
            count: 2
        }
    ];
    const filtrado = products.filter((products) => {
        return products.price > 8000
    } );
    console.log(filtrado);
}


{
    //El @@iteratormétodo de un Arrayobjeto implementa el protocolo iterable y permite que las matrices sean consumidas por la mayoría de las sintaxis que esperan iterables, como la sintaxis extendida y los for...ofbucles. Devuelve un iterador que arroja el valor de cada índice en la matriz.

    var array = [ "cerdo", "cabra", "caballo"];
    var r_array = array[Symbol.iterator]();
    console.log(r_array.next());
    console.log(r_array.next().value);
}


{
    //El at()método toma un valor entero y devuelve el elemento en ese índice, lo que permite números enteros positivos y negativos. Los enteros negativos cuentan hacia atrás desde el último elemento de la matriz.
    const numero1 = [7,17,15,44].at(-1);
    
    console.log(numero1);
}


{
    //El concat()método se utiliza para fusionar dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.

    const mama = ["albany"]
    const papa = ["francia"]
    const unionliberal = mama.concat(papa);
    console.log(unionliberal);
}


{
    //El copyWithin()método copia superficialmente parte de una matriz a otra ubicación en la misma matriz y la devuelve sin modificar su longitud.
    const numeros = [77,88,99,100];
    console.log(numeros.copyWithin(0,3));
}

{
    //El entries()método devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.

    const array = ["miPapaEsUnPerro","mama","perro"];
    const iterator = array.entries();
    console.log(iterator.next().value);
}

{
   //El every()método prueba si todos los elementos de la matriz pasan la prueba implementada por la función proporcionada. Devuelve un valor booleano.  
    const deuda = (value) => value < 15;
    const array = [9,19,29,39];
    console.log(array.every(deuda)); 

}

{
   // El fill()método cambia todos los elementos de una matriz a un valor estático, desde un índice inicial (predeterminado 0) hasta un índice final (predeterminado array.length). Devuelve la matriz modificada.
    const comida =["chorizo","empanada","aguacate"];
    console.log(comida.fill("mazamorra",0,1));

}


{
    //El find()método devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve.
    const numeros = [50, 4000, 80, 13, 440];
    const found = numeros.find(Element => Element > 3500);
    console.log(found);
}

{
    const numeros = [50, 4000, 80, 13, 440];
    const longitud = (element) => element > 3500;
    console.log(numeros.findIndex(longitud));
    
}

{
    //El findLast()método itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefinedse devuelve.
    const numeros = [50, 4000, 80, 13, 440];
    const found = numeros.findLast((numero) => numero > 45);
    console.log(found);

}

{
    //El findLastIndex()método itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.
    const number = [50, 4000, 80, 13, 550];
    const numerogrande = (element) => element > 550;
    console.log(number.findLastIndex(numerogrande));
}

{
    //El flat()método crea una nueva matriz con todos los elementos de la submatriz concatenados recursivamente hasta la profundidad especificada.
    const minombre = ["m","a","u","r","i","c",["i","o"]];
    console.log(minombre.flat());
}

{
    //El flatMap()método devuelve una nueva matriz formada al aplicar una función de devolución de llamada dada a cada elemento de la matriz y luego aplanar el resultado en un nivel. Es idéntico a map()seguido de a flat()de profundidad 1 ( arr.map(...args).flat()), pero un poco más eficiente que llamar a esos dos métodos por separado.

    const novias = ["ana", "sofia", ["valentina"], ["vanessa", "gabriela"], "raul", []];

    const mentirosas = novias.flatMap(vee => vee);
    
    console.log(mentirosas);
}
}
{
    //El forEach()método ejecuta una función proporcionada una vez para cada elemento de la matriz.
    const random = ['misionero', 'rolex', 'trueno'];
    random.forEach(element => console.log(element));
}

{
    //El includes()método determina si una matriz incluye un determinado valor entre sus entradas, devolviendo trueo falsesegún corresponda.
    const clases = ["señales","desarrollo","electiva"]
    console.log(clases.includes("señales"));
}

{
    //El indexOf()método devuelve el primer índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.

    const uchija = ["bobo","tarado","pendejo"];
    console.log(uchija.indexOf("pendejo"));
}

{
    //El join()método crea y devuelve una nueva cadena concatenando todos los elementos en una matriz (o un objeto similar a una matriz ), separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.
    const dogo = ['mi', 'perro', 'viejo'];
    console.log(dogo.join("-"));
}

{
 //El keys()método devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice de la matriz.
    const dogo = ['mi', 'perro', 'viejo'];
    const iterator = dogo.keys();
    for (const key of iterator) {
    console.log(key);   
}

{
  //El lastIndexOf()método devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente. La matriz se busca hacia atrás, comenzando en fromIndex.
    const dogo = ['mi', 'perro', 'viejo'];
    console.log(dogo.lastIndexOf("perro"));
}

{
    //El pop()método elimina el último elemento de una matriz y devuelve ese elemento. Este método cambia la longitud de la matriz.
    const dogo = ['mi', 'perro', 'viejo'];
    console.log(dogo.pop());
}
}

{
    //El push()método agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.
    const dogo = ['mi', 'perro', 'viejo'];
    console.log(dogo.push("15 años"));
    console.log(dogo);
}

{
    //El reduce()método ejecuta una función de devolución de llamada "reductora" proporcionada por el usuario en cada elemento de la matriz, en orden, pasando el valor de retorno del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de la matriz es un valor único.


    const invento = [1, 2, 3, 4];
    const valorI = 0;
    const sumaInicial = invento.reduce(
    (acumulado, valoractual) => acumulado + valoractual,
    valorI
    );
    
    console.log(sumaInicial);
}

{
    //El reduceRight()método aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) para reducirlo a un solo valor.
    const  numeros = [1,2,3,4,5,6,7,8,9,10];
    const resultado = numeros.reduceRight((acumulador, valoractual) => {
    console.log(acumulador, valoractual)
    return acumulador + valoractual
    
}) 
    console.log(resultado);
}

{
    //El reverse()método invierte una matriz en su lugar y devuelve la referencia a la misma matriz, el primer elemento de la matriz ahora se convierte en el último y el último elemento de la matriz se convierte en el primero. En otras palabras, el orden de los elementos en el arreglo estará girado hacia la dirección opuesta a la establecida anteriormente.
    const xd = ["A", "rr","oz"];
    const reversed = xd.reverse();
    console.log("reversed:", reversed);
}

{
    // El shift()método elimina el primer elemento de una matriz y devuelve ese elemento eliminado. Este método cambia la longitud de la matriz.
    const marcas = ["bmw","mercho","ferrari"];
    const primerElemento = marcas.shift();
    console.log(marcas);
    console.log(primerElemento);
}

{
    // El slice()método devuelve una copia superficial de una parte de una matriz en un nuevo objeto de matriz seleccionado desde starthasta end ( endno incluido) donde starty endrepresenta el índice de elementos en esa matriz. La matriz original no se modificará.

    const comida =["chorizo","empanada","aguacate","mani","zanahoria","popper"];
    console.log(comida.slice(1,3));
}

{
    //El some()método prueba si al menos un elemento de la matriz pasa la prueba implementada por la función proporcionada. Devuelve verdadero si, en la matriz, encuentra un elemento para el cual la función proporcionada devuelve verdadero; de lo contrario, devuelve falso. No modifica la matriz.
    const numeros = [10,50,75,60];
    function masgrande100 (n) {
    return n > 100;
}
    console.log(numeros.some(masgrande100));

}
{
    //The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    const familia = ['Bertha', 'Albany', 'Marina', 'Leonor'];
    familia.sort();
    console.log(familia);
}

{
    //El splice()método cambia el contenido de una matriz eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar . Para acceder a parte de una matriz sin modificarla, consulte slice().

    const familia = ['Bertha', 'Albany', 'Marina', 'Leonor'];
    familia.splice(2,0,"Mercedes")
    console.log(familia);
}

{
    
    //No fui capaz de hacerlo, asi que saque el ejemplo de :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
    //El toLocaleString()método devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas usando sus toLocaleStringmétodos y estas cadenas están separadas por una cadena específica de la configuración regional (como una coma ",").
    const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
    
    console.log(localeString);

}

{
   // The toString() method returns a string representing the specified array and its elements.
    const familia = ['Bertha', 'Albany', 'Marina', 'Leonor'];
    console.log(familia.toString());

}

{
    //El unshift()método agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.

    const familia = ['Bertha', 'Albany', 'Marina', 'Leonor'];
    console.log(familia.unshift("Amparo", "Dago"));
}

{
    //El values()método devuelve un nuevo objeto iterador de matriz que itera el valor de cada índice de la matriz.
    const familia = ['Bertha', 'Albany', 'Marina', 'Leonor'];
    const iterador = familia.values();
    for (const value of iterador){
        console.log(value);
    }

}
