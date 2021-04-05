//declaracion de funcion normal//

function miFuncion(a,b){
    c = a+b;
    console.log("Suma: "+c);

    return c;
}

let resultado = miFuncion(50,100);

console.log(resultado);

// declaracion de funcion expresion//

let sumar = function(a,b){c = a+b; return c};

resultado = sumar(1,2);

console.log(resultado);

//funcion self invoking//

(function(){
    console.log("ejecutando funcion");
})();

//funciones como objetos//