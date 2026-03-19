let variableGlobal = "variable global";

function Funcion() {
    let variableLocal = "variable local";
    console.log(variableGlobal); 
    console.log(variableLocal); 
}

Funcion();
//Imprime ambas variables porque la funcion puede acceder a su propia variable local y a la variable global.

// console.log(variableGlobal); 
// console.log(variableLocal); (Comentado para evitar el error)

//Genera error porque la variable local solo es accesible dentro de la función, no desde el ámbito global.