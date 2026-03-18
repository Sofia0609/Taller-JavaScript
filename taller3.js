num1 = 10
num2 = "5"

console.log(num1 + num2) 

//Imprimio 105 porque "+" js lo toma como una concatenacion de string, no como una suma de numeros. 

console.log(num1 * num2)

//Imprimio 50 porque "*" js lo toma como una multiplicacion de numeros, no como una concatenacion de string.

let num3 = 25
String(num3)

let num4 = "100"
Number(num4)

let vacio = ""
let mensaje = "Hola"

console.log(Boolean(vacio))
//Imprimio false porque un string vacio se considera falso en JavaScript.

console.log(Boolean(mensaje))
//Imprimio true porque un string con contenido se considera verdadero en JavaScript.s