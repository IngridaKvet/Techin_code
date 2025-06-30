'use strict'
/* 1. Exercise */
const array = [];
array[0] = "Hello";
array[1] = "Hi";
array[2] = "Hey";
console.log(array)

/* 2. Exercise */
const array1 = [2, 5, 6, 10, 0, 11];
console.log("Pirmas masyvo elementas " + array1[0])
console.log("Paskutinis masyvo elementas " + array1[array1.length-1])

/* 3. Exercise */
const array3 = [99, 55, 77];
array3.forEach((reiksme, indexas) => {
    console.log(`${reiksme} - ${indexas} vieta.`)
})

/* 4. Exercise */
const array4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Su for ")
for(let i = 0; i < array4.length; i++){
    console.log(array4[i]);
}

console.log("Su for each")
array4.forEach((elementas) => {
    console.log(`${elementas}`)
})

/* 5. Exercise */
const array5 = [100, 1000];
array5.unshift("true");
array5.unshift("Hello");
console.log(array5)

/* 6. Exercise */
const array6 = [1, 2];
array6[9] = true;

console.log("6. Su for")
for(let i1 = 0; i1 < array6.length; i1++){
    console.log(array6[i1]);
}

console.log("6. Su for of")
for(const elem of array6){
    console.log(elem)
}

console.log("6. Su for in")
for(const property in array6){
    console.log(array6[property])
}

console.log("6. Su for each")
array6.forEach((elementas1) => {
    console.log(`${elementas1}`)
})

/* 7. Exercise */
const xValue = Number(prompt("Įveskite dydį x"));
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const resultArray = array7.map((reiksme2) => {
    return reiksme2 + xValue;
});

console.log(resultArray);

/* 8. Exercise */
const array8 = [];
let arrayIlgis = 0;

while(arrayIlgis < 7){
    array8[arrayIlgis] = Number(prompt("Įveskite masyvo elementą."))
    arrayIlgis++;
}

console.log(array8);

/* 9. Exercise */
const arr1 = [];
const arr2 = [];
let arr1Index = 0;
let arr2Index = 0;

while(arr1Index < 10){
    arr1[arr1Index] = Number(prompt("Įveskite pirmo masyvo (sudėčiai) elementą."))
    arr1Index++;
}

while(arr2Index < 10){
    arr2[arr2Index] = Number(prompt("Įveskite antro masyvo (sudėčiai) elementą."))
    arr2Index++;
}

const sudetasArr = arr1.map((ind) =>{
    return arr1[ind-1] + arr2[ind-1];
})

console.log(arr1);
console.log(arr2);
console.log(sudetasArr)

/* 10. Exercise */
const arr10 = [];
const arr20 = [];
let arr1Ind = 0;
let arr2Ind = 0;

while(arr1Ind < 7){
    arr10[arr1Ind] = Number(prompt("Įveskite pirmo masyvo (daugybai) elementą."))
    arr1Ind++;
}

while(arr2Ind < 7){
    arr20[arr2Ind] = Number(prompt("Įveskite antro masyvo (daugybai) elementą."))
    arr2Ind++;
}

const arr30 = arr10.map((indi) =>{
    return arr10[indi-1] * arr20[indi-1];
})

console.log(arr10);
console.log(arr20);
console.log(arr30);