// tipo de dato String//
var nombre = "Luciano"; // var: se usa para declarar variables globales. let se usa para declarar variables locales. 

console.log("Nombre: "+nombre);
console.log(typeof nombre);// typeof sirve para saber el tipo de dato de una variable//

// tipo de dato numerico//
var numero = 1000;

console.log("Numero: "+ numero);
console.log(typeof numero);
//tipo de dato objeto//

var persona = {
    nombre : "Luciano",
    apellido : "Pulido",
    telefono : "1155447788"
}

console.log(persona);

// clase //
class Empleado{

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//arrays//

var autos = ["BMW","AUDI","VOLVO"];
console.log(autos);