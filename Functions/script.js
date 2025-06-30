'use strict'
/* 1. Smallest number */
const smallNum1 = Number(prompt("Smallest number: Input 1:"));
const smallNum2 = Number(prompt("Smallest number: Input 2:"));
const smallNum3 = Number(prompt("Smallest number: Input 3:"));
function findSmallestNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(`1. The smallest value is ${findSmallestNum(smallNum1, smallNum2, smallNum3).toFixed(1)}`);

/* 2. Average*/
const averNum1 = Number(prompt("Average: Input the first number:"));
const averNum2 = Number(prompt("Average: Input the second number:"));
const averNum3 = Number(prompt("Average: Input the third number:"));
function findAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(`2. The average value is ${findAverage(averNum1, averNum2, averNum3).toFixed(1)}.`);

/* 3. Convert min to s */
const minutesInput = Number(prompt("Input minutes to convert to seconds"));

function convertToSeconds(minutes) {
    return minutes * 60;
}

console.log(`3. ${minutesInput} minutes is converted to ${convertToSeconds(minutesInput)} seconds.`);

/* 4. Sum of digits */
const integerInput = prompt("Input an integer");

function addIntegerDigits(integer) {
    let digitsArr = integer.split('');
    let i = 0;
    let digitsSum = 0;
    while (i < digitsArr.length) {
        digitsSum += Number(digitsArr[i]);
        i++
    }
    return digitsSum;
}

console.log(`4. The sum of digits of integer ${integerInput} is ${addIntegerDigits(integerInput)}.`);

/* 5: Leap year*/
let year = Number(prompt("Type a year: "))

function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true
        } else if (((year % 100 === 0)) && (year % 400 === 0)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(`5. Is the inputed year ${year} a leap year? ${checkLeapYear(year)}.`);

/* 6. Area of a triangle */
const side1 = Number(prompt("Triangle: Input side 1:"));
const side2 = Number(prompt("Triangle: Input side 2:"));
const side3 = Number(prompt("Triangle: Input side 3:"));
function calculateTriangleA(a, b, c) {
    let s = (a + b + c) / 2;
    let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return triangleArea;
}

console.log(`6. The area of the triangle is ${calculateTriangleA(side1, side2, side3).toFixed(3)}.`);

/* 7. Join with something*/
function giveMeSomething(inputText) {
    return "Something " + inputText;
}

console.log("7. Something check")
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

/* 8. Counting score */
function points(twoPointers, threePointers) {
    let scoreSum = (twoPointers * 2) + (threePointers * 3);
    return scoreSum;
}

console.log("8. Counting points check:")
console.log(points(1, 1))
console.log(points(7, 5))
console.log(points(38, 8))

/* 9. x is equal to 7 */
function isSeven(someNumber) {
    return someNumber === 7;
}

console.log("9. Is equal to 7 check:")
console.log(isSeven(4))
console.log(isSeven(9))
console.log(isSeven(7))

/* 10. Compare string length*/
function comp(string1, string2) {
    return string1.length === string2.length
}

console.log("10. compare string lenght check:")
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "hey"));

/* 11. Is empty*/
function isEmpty(text) {
    return text === "";
}

console.log("11. Is empty check:")
console.log(isEmpty(""))
console.log(isEmpty(" "))
console.log(isEmpty("a"))

/* 12. Say louder */
function sayLouder(text) {
    return text.toUpperCase();
}

console.log("12. Uppercase check:")
console.log(sayLouder("It works"))