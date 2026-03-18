var nombre = "Sofia";
console.log("Hola " + nombre);

var nombre = "Alejandro";
console.log("Hola " + nombre);

//Imprimio ambos Nombres en Consola, porque var se puede Redeclarar

const nombre2 = "Saray";
// const nombre2 = "Pedro";  (comentado para evitar el error y mostrar el resto de soluciones)

console.log("Hola " + nombre2);

//Nos dios "SyntaxError: Identifier 'nombre2' has already been declared" porque const no se puede Redeclarar

if (1<0){
    let edad = 30;
}

console.log(edad);

//Nos dio "ReferenceError: edad is not defined" por que el let que se encuentra dentro del if, solo tiene alcance dentro de su mismo bloque. La casa no puede acceder a las habitaciones.