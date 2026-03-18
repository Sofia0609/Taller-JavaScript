const miString = "Hola";       
const miNumero = 1;             
const miBooleano = true;          
const miNulo = null;               
let miIndefinido;                  

console.log(typeof miString);
console.log(typeof miNumero);
console.log(typeof miBooleano);
console.log(typeof miNulo);
console.log(typeof miIndefinido);


const Persona = {
    nombre: "Sofia",
    edad: 30,
    hobbies: ["Bailar", "Cantar", "Actuar"]
};

console.log(typeof Persona);
console.log(typeof Persona.hobbies);

//El objeto y el Arraylist son ambos del tipo objeto, por eso el typeof nos da "object" para ambos.