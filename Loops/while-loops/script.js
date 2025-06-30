"use strict"
/* Exercise 1: From one to a hundred*/
console.log("Exercise 1: From one to a hundred")
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

/* Exercise 2: From hundred to one*/
console.log("Exercise 2: From hundred to one")
let i2 = 100;
while (i2 >= 1) {
    console.log(i2);
    i2--;
}

/* Exercise 3: Even numbers */
console.log("Exercise 3: Even numbers")
let i3 = 1;
while (i3 <= 100) {
    if (i3 % 2 === 0) {
        console.log(i3);
    }
    i3++;
}

/* Exercise 4: Up to a certain number */
console.log("Exercise 4: Up to a certain number")
const userInput = Number(prompt("Up to what number?"))
let i4 = 1;
while (i4 <= userInput) {
    console.log(i4);
    i4++;
}

/* Exercise 5: Lower limit and upper limit */
console.log("Exercise 5: Lower limit and upper limit")
const userInput1 = Number(prompt("First: "))
const userInput2 = Number(prompt("Last: "))
let i5 = userInput1;

if (userInput1 < userInput2) {
    while (i5 <= userInput2) {
        console.log(i5)
        i5++;
    }
}

/* Exercise 6: The sum of a set of numbers */
console.log("Exercise 6: The sum of a set of numbers")
const userInput3 = Number(prompt("Until what? "))
let upperlimit = userInput3
let sum = 0;

while (upperlimit > 0) {
    sum = sum + upperlimit;
    upperlimit--;
}

console.log(sum)

/* Exercise 7: The sum between two numbers */
console.log("Exercise 7: The sum between two numbers")
const lowerBInput = Number(prompt("First: "))
let lowerB = lowerBInput;
const upperB = Number(prompt("Last: "))
let sum2 = 0;

if (lowerB < upperB) {
    while (lowerB <= upperB) {
        sum2 = sum2 + lowerB;
        lowerB++;
    }
    console.log(sum2)
}

/* Exercise 8: Sum of many numbers */
console.log("Exercise 8: Sum of many numbers")
let sum3 = 0;
while (true) {
    let promptInput = Number(prompt("input number?"));
    sum3 += promptInput;

    if (promptInput === 0) {
        console.log("Sum in the end: " + sum3)
        break
    }

    console.log("Sum now: " + sum3)
}

/* Exercise 9: Sum of the powers  */
console.log("Exercise 9: Sum of the powers")
const toPowerOfInput = Number(prompt("Type a number for power: "));
let toPowerOf = toPowerOfInput;
let sumOfPowers = 0;

while (toPowerOf >= 0) {
    sumOfPowers += Math.pow(2, toPowerOf);
    toPowerOf--;
}

console.log(sumOfPowers);

/* Exercise 10: Factorial */
console.log(" Exercise 10: Factorial")
const factorialInput = Number(prompt("Type a number for factorial: "));
let factorialOf = factorialInput;
let factorial = 1;

if (factorialOf === 0) {
    console.log(1)
} else {
    while (factorialOf > 0) {
        factorial *= (factorialOf);
        factorialOf--;
    }
    console.log("Factorial is " + factorial)
}

/* Exercise 11: Password */
console.log(" Exercise 11: Password ")
while (true) {
    let promptInput = prompt("Type the Password");
    if (promptInput === "carrot") {
        console.log("Right!")
        console.log("The secret is: jryy qbar!")
        break
    } else {
        console.log("Wrong!")
    }
} 