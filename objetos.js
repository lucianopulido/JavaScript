// constructor//

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function()
    {
        return this.nombre+" "+this.apellido;
    }
}
// declaracion de objetos//

let persona = {

    nombre: "Luciano",
    apellido: "Pulido",
    email: "lucianop@gmail.com",
    edad: 24,
    idioma: 'ES',




    // declaracion de un metodo de un objeto//
    nombreCompleto: function () { console.log(this.nombre + " " + this.apellido); },
    get getNombreCompleto() { return this.nombre + " " + this.apellido; },// metodo getter//
    get getIdioma() { return this.idioma; },
    set setIdioma(idioma) { this.idioma = idioma.toUpperCase(); }, // metodo setter
}


persona.nombreCompleto();
console.log(persona.getNombreCompleto);
persona.setIdioma = "usa";
console.log(persona.getIdioma)

let padre = new Persona("Luciano","Pulido","lucianopulido1996@gmail.com");
console.log("Persona: "+padre.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {};

//prototype: sirve para agregar una nueva propiedad o atributo a todos los objetos//

Persona.prototype.tel ="4455887788";

console.log("Persona: "+padre.tel);