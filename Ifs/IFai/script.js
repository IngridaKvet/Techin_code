"use strict"
/* Exercise 14: A positive number*/
let inputNumber = Number(prompt("Type a number: "));

if (inputNumber > 0) {
  console.log("The number is positive.");
} else if (inputNumber < 0) {
  console.log("The number is not positive.");
} else {
  console.log("The number is 0.");
}

/* Exercise 15: Age of majority*/
let userAge = Number(prompt("How old are you? "));

if (userAge >= 18) {
  console.log("You have reached the age of majority");
} else {
  console.log("You have not reached the age of majority yet!");
}

/* Exercise 16: Even or odd?*/
let inputNumber2 = Number(prompt("Type a number: "));

if ((inputNumber2 % 2) === 0) {
  console.log(`Number ${inputNumber2} is even`);
} else {
  console.log(`Number ${inputNumber2} is odd`);
}

/* Exercise 17: Greater number*/
let firstNumber = Number(prompt("Type the first number:  "));
let secondNumber = Number(prompt("Type the second number: "));

if (firstNumber > secondNumber) {
  console.log("Greater number: " + firstNumber);
} else if (firstNumber < secondNumber) {
  console.log("Greater number: " + secondNumber);
} else {
  console.log("The numbers are equal!");
}

/* Exercise 18: Grades and points*/
let points = Number(prompt("Type the points [0-60]: "));

switch (true) {
  case points >= 50:
    console.log("Grade: 5");
    break;
  case points >= 45:
    console.log("Grade: 4");
    break;
  case points >= 40:
    console.log("Grade: 3");
    break;
  case points >= 35:
    console.log("Grade: 2");
    break;
  case points >= 30:
    console.log("Grade: 1");
    break;
  default:
    console.log("Grade: failed");
}

/* Exercise 19: Age check*/
let reasonableAge = Number(prompt("How old are you? "));

if (reasonableAge >= 0 && reasonableAge <= 120) {
  console.log("OK")
} else {
  console.log("Impossible!")
}

/* Exercise 20: Usernames*/
let userName = prompt("Type your username: ");
let userPass = prompt("Type your password: ");

if ((userName === "alex" && userPass === "mightyducks") || (userName === "emily" && userPass === "cat")) {
  console.log("You are now logged into the system!");
} else {
  console.log("Your username or password was invalid!")
}


/* Exercise 21: Leap year*/
let year = Number(prompt("Type a year: "))


if (year % 4 === 0) {
  if (year % 100 !== 0) {
    console.log("The year is a leap year")
  } else if (((year % 100 === 0)) && (year % 400 === 0)) {
    console.log("The year is a leap year")
  } else {
    console.log("The year is not a leap year")
  }
} else {
  console.log("The year is not a leap year")
}

