const libro = {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",

    mostrarInformacion: function() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
    }
}

libro.mostrarInformacion()


class Animal{
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log("Hola, soy un " + this.nombre);
    }
}

const gato = new Animal("gato");
gato.saludar();


class perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}

const miPerro = new perro("perro", "pincher");
miPerro.saludar();