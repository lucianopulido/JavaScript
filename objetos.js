// declaracion de objetos//

let persona = {
nombre : "Luciano",
apellido:"Pulido",
email:"lucianop@gmail.com",
edad:24,

// declaracion de un metodo de un objeto//
nombreCompleto: function(){console.log(this.nombre+" "+this.apellido);} 
}

persona.nombreCompleto();