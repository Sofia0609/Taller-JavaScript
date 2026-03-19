let frutas= ["Manzana", "Banana"];

frutas.push("Naranja");
console.log(frutas);

frutas.pop();
console.log(frutas);

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const numerosDuplicados = numeros.map((num) => num * 2);
console.log(numerosDuplicados);

const numerosFiltrados = numeros.filter((num) => num > 1);
console.log(numerosFiltrados);


frutas.forEach(fruta => {
    console.log(fruta);
});

const banana = frutas.find(fruta => fruta === "Banana");
console.log(banana);

const indiceManzana = frutas.findIndex(fruta => fruta === "Manzana");
console.log(indiceManzana);