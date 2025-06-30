"use strict";
//console.log("Exercise 1: Name")
console.log("Ingrida Kvetkovskytė")
//alert("Ingrida Kvetkovskytė")

//console.log("Exercise 2: Hello world")
console.log("Hello world!\n (And all the people of the world)")

//console.log("Exercise 3: Spruce")
console.log("     *     ")
console.log("    ***    ")
console.log("   *****   ")
console.log("  *******  ")
console.log(" ********* ")
console.log("     *     ")

//console.log("Exercise 4: Varying variables")
let chickens = 3;
let kgOfBacon = 5.5;
let tractor = "There is none!"

chickens = 9000;
kgOfBacon = 0.1;
tractor = "Zetor"

console.log("Chickens: \n" + chickens)
console.log("Bacon (kg): \n" + kgOfBacon)
console.log("A tractor: \n" + tractor)
console.log("In a nutshell!: \n" + chickens + "\n" + kgOfBacon + "\n" + tractor)
 
//console.log("Exercise 5: Seconds in a year")
let secondsInYear = 365*24*60*60;
console.log(`There are ${secondsInYear} in a year`)

//console.log("Exercise 6: Addition")
let num1Add = 4;
let num2Add = 5;
let sum = num1Add + num2Add;
console.log(sum)

//console.log("Exercise 7: Multiplication")
let num1Multiply = 2;
let num2Multiply = 8;
let product = num1Multiply * num2Multiply;
console.log(product)

//console.log("Exercise 8: Adder")
//prompt neveikia su node terminalu ?
let sumInt1 = prompt("Type a number: ");
let sumInt2 = prompt("Type another number");
let intSum = Number(sumInt1) + Number(sumInt2);
console.log(`Sum of the numbers: ${intSum}`);

//console.log("Exercise 9: Divider")
let divInt1 = prompt("Type a number: ");
let divInt2 = prompt("Type another number");
let intdivided = Number(divInt1) / Number(divInt2);
console.log(`Division: ${divInt1} / ${divInt2} = ${intdivided}`)

//console.log("Exercise 10: Calculating the circumference")
let radius = prompt("Type the radius: ");
let circumference = 2 * Math.PI * radius;
console.log(`Circumference of the circle ${circumference}`);

//console.log("Exercise 11: Bigger number")
let compInt1 = prompt("Type a number: ");
let compInt2 = prompt("Type another number");
console.log(`The bigger number of the two numbers given was:  ${Math.max(compInt1, compInt2)}`)

//console.log("Exercise 12: Sum of the ages")
let user1Name = prompt("Type your name: ");
let user1Age = prompt("Type your age: ");
let user2Name = prompt("Type your name: ");
let user2Age= prompt("Type your age: ");
console.log(`${user1Name} and ${user2Name} are ${Number(user1Age)+Number(user2Age)} years old in total.`)