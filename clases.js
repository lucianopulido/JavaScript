class Persona {

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get obtenerNombre()
  {
    return this.nombre;
  }

  set modificarNombre(nombre)
  {
    this.nombre = nombre;
  }
}

let persona1 = new Persona("Luciano","Pulido");
console.log(persona1);
console.log(persona1.obtenerNombre);
persona1.nombre = "Marcelo";
console.log(persona1.obtenerNombre);

