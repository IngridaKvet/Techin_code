"use strict"
/* 1. Pamoka. */
let pirmPamokos = Number(prompt("Kiek pamokų yra pirmadienį?"));
let antrPamokos = Number(prompt("Kiek pamokų yra antradienį?"));
let trecPamokos = Number(prompt("Kiek pamokų yra trečiadienį?"));
let ketvPamokos = Number(prompt("Kiek pamokų yra ketvirtadienį?"));
let penktPamokos = Number(prompt("Kiek pamokų yra penktadienį?"));

let pamokuSkaicius = pirmPamokos + antrPamokos + trecPamokos + ketvPamokos + penktPamokos;

let minutes = pamokuSkaicius * 45;

console.log("Pamokų skaičius:  "+ pamokuSkaicius);
console.log("Tai sudaro minučių " + minutes);

/* 2. Akvariumas. */
let zuvys = Number(prompt("Kiek žuvų gyvena akvariume?"));
let pridedamosZuvys = Number(prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?"));
let dienos = Number(prompt("Kiek dienų praėjo?"));

console.log(`Po ${dienos} dienų akvariume gyvens ${zuvys + (dienos*pridedamosZuvys)} žuvų.`)

/* 3. Taupyklė */
let centai5 = Number(prompt("Kiek yra monetų po 5 cnt?"));
let centai20 = Number(prompt("Kiek yra monetų po 20 cnt?"));
let litai2 = Number(prompt("Kiek yra monetų po 2 Lt?"));
let suma = (centai5*0.05)  + (centai20 * 0.2) + (litai2 * 2);
console.log("Taupyklėje yra " + suma + " Lt.")


/* 4. Automobilis */
let tunelioIlgis = 264;
let greitis = Number(prompt("Koks automobilio greitis? "));
let laikas = (tunelioIlgis / (greitis * (1000/3600))).toFixed(2);

console.log("Automobilis tunelį pravažiuos per " + laikas + " s")

/* 5. Statybininkas */
let sienosIlgis = Number(prompt("Sienos ilgis (m): "));
let sienosAukstis = Number(prompt("Sienos aukštis (m): "));
let plytosKaina = Number(prompt("Plytos kaina (Lt): "));

let plytosEilej = sienosIlgis / 0.2; 
let plytuEiles = sienosAukstis / 0.1;
let plytosTotal = plytosEilej * plytuEiles;

console.log("Plytų kiekis: " + plytosTotal)
console.log(`Plytos kainuos ${(plytosTotal*plytosKaina).toFixed(2)} Lt`)

/* 6. Trapecijos plotas */
let ilgesnisPagrindas = Number(prompt("Trapecijos ilgesniojo pagrindo ilgis: "));
let trumpesnisPagrindas = Number(prompt("Trapecijos trumpesniojo pagrindo ilgis: "));
let aukstine = Number(prompt("Trapecijos aukštinės ilgis: "));

let trapecijosPlotas = ((ilgesnisPagrindas+trumpesnisPagrindas)/2)*aukstine;

console.log("Trapecijos plotas: " + trapecijosPlotas)