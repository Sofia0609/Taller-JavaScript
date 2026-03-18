if (100 == "100"){
    console.log("Son iguales");
}

if (100 === "100"){
    console.log("Son totalmente iguales");
}

//solo se imprime "Son iguales" una vez porque el operador === es mas estricto, y compara el valor y el tipo de dato, en cambio el "==" solo compara el valor.

let num = 2;

if (num % 2 == 0){
    console.log("El numero es par");
} else{
    console.log("El numero es impar");
}


for (let i = 1; i < 6; i++){
    console.log(i);
}


try {
    console.log(variablex);
} catch (error) {
    console.log("Ocurrió un problema, trabajamos en ello");
}