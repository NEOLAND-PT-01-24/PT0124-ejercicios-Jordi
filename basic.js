
let myFavoriteHero = "ella";
let x = 50;
let h = 5; let y = 10
let z = (h + y); 

//1.2
const character = {name: 'Jack Sparrow', age: 25};
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${age} y me gustan los lobos`)

//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price)

//1.4 
let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = (globalBasePrice + car1.basePrice)
car2.finalPrice = (globalBasePrice + car2.basePrice)

console.log(car1.finalPrice)
console.log(car2.finalPrice)


//Iteración #3 Operadores
suma = 10*5
División = 10 / 2
Resto = 15%9
Suma = 10 + 5
Multiplicación = 10*5
console.log(suma,División,Resto,Suma,Multiplicación)

//Iteración #4 Arrays
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])
//1.2
avengers.shift()
console.log(avengers)
avengers.push("IRONMAN")
console.log(avengers) /
//1.3
console.log(avengers.length)
//1.4 
const array = ["Morty", "Summer"]
array.push("Rick", "Beth")
console.log(array)

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
console.log(rickAndMortyCharacters1[2])
//1.5
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0,4]) //Por qué me pasa esto ?
//1.6
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

//Iteración #4
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != numner1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 || number1*2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteración #6: Bucles

for (let i = 0; i<10; i++) {
    if (i%2 == 0)
    console.log(i);

}
    
//1.3 
for (let i = 0; i<=10; i++) {
    console.log("Intentando dormir")
    if (i == 10) {
        console.log("Dormido!")
    }
}