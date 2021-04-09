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

  get obtenerApellido()
  {
    return this.apellido;
  }

  set modificarApellido(apellido)
  {
    this.apellido = apellido;
  }

  nombreCompleto()
  {
    return this.nombre+" "+this.apellido;
  }
}

// herencia//
class Empleado extends Persona
{
  constructor(nombre,apellido,departamento) 
  {
    super(nombre,apellido);// llamo al constructor de la clase padre//
    this.departamento = departamento;
  }

  get obtenerDepartamento()
  {
    return this.departamento;
  }

  set modificarDepartamento(departamento)
  {
    this.departamento = departamento;
  }

  nombreCompleto()
  {
    return super.nombreCompleto() +" "+this.departamento;
  }
}

let persona1 = new Persona("Luciano","Pulido");
console.log(persona1);
console.log(persona1.obtenerNombre);
persona1.nombre = "Marcelo";
console.log(persona1.obtenerNombre);

let empleado = new Empleado("Luciano","Pulido","Ingenieria");
console.log("Empleado: "+empleado.nombreCompleto());

