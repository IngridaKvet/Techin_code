"use strict"
/* 1. Parašiutininkas */
let aukstis = Number(prompt("Iš kokio aukščio šoka parašiutininkas?"));
let skleidimosiLaikas = Number(prompt("Per kiek sekundžių išsiskleidžia jo parašiutas? "));

let kritimoLaikas = Math.sqrt(2*aukstis/9.8);

if(kritimoLaikas > skleidimosiLaikas){
  console.log("Parašiutas išsiskleis");
} else {
    console.log("Parašiutas neišsiskleis");
}

/* 2. Didžioji kūdrinė varlė*/
let varlesSvoris = Number(prompt("Kiek sveria varlė?"));
let varliuKiekis = Number(prompt("Kiek varlių norima stebėti?"));

if((varlesSvoris*varliuKiekis) >= 5000){
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}

/* 3. Matematika*/
let pazymiaiStr = prompt("Kokius pažymius gavo Petriukas?");
let pazymiai = pazymiaiStr.split(" ");
let pazymiuVidurkis = (Number(pazymiai[0]) + Number(pazymiai[1]) + Number(pazymiai[2]) + Number(pazymiai[3])+ Number(pazymiai[4]))/5;

if (pazymiuVidurkis > 9){
  console.log("Petriukas gaus tris saldainius");
} else if(pazymiuVidurkis >= 7){
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}


/* 4. Bandelės */
let kainosStr = prompt("Įveskite kainas a ir b:");
let kiekiaiStr = prompt("Įveskite kiekius n1, n2 ir n3:");
let kainos = kainosStr.split(" ");
let kiekiai = kiekiaiStr.split(" ");

let a = Number(kainos[0]);
let b = Number(kainos[1]);
let n1 = Number(kiekiai[0]);
let n2 = Number(kiekiai[1]);
let n3 = Number(kiekiai[2]);
let k = Number(prompt("Įveskite bandelės kainą:"));

if(k <= a){
  console.log(`Už bandeles bus sumokėta: ${(n1*k).toFixed(2)} Lt`);
} else if(k > a && k < b){
  console.log(`Už bandeles bus sumokėta: ${(n2*k).toFixed(2)} Lt`);
} else if (k >= b){
  console.log(`Už bandeles bus sumokėta: ${(n3*k).toFixed(2)} Lt`);
}

/* 5. Geriausia klasė*/
let vidurkiaiStr1  = prompt("Įveskite klasių vidurkius:");
let vidurkiaiStrArr= vidurkiaiStr1.split(" ");
let vidurkiaiArr = [Number(vidurkiaiStrArr[0]), Number(vidurkiaiStrArr[1]), Number(vidurkiaiStrArr[2]), Number(vidurkiaiStrArr[3])];

let aKlase = vidurkiaiArr[0];
let bKlase = vidurkiaiArr[1];
let cKlase = vidurkiaiArr[2];
let dKlase = vidurkiaiArr[3];

let maxVidurkis = Math.max(Number(vidurkiaiStrArr[0]), Number(vidurkiaiStrArr[1]), Number(vidurkiaiStrArr[2]), Number(vidurkiaiStrArr[3]));

console.log("Didžiausias " + maxVidurkis);

switch(true) {
  case aKlase === maxVidurkis:
    console.log(`Kitų klasių vidurkiai skiriasi ${aKlase - bKlase}, ${aKlase - cKlase}, ${aKlase - dKlase}`);
    break;
  case bKlase === maxVidurkis:
    console.log(`Kitų klasių vidurkiai skiriasi ${bKlase - aKlase}, ${bKlase - cKlase}, ${bKlase - dKlase}`);
    break;
  case cKlase === maxVidurkis:
    console.log(`Kitų klasių vidurkiai skiriasi ${cKlase - aKlase}, ${cKlase - bKlase}, ${cKlase - dKlase}`);
    break;
  case dKlase === maxVidurkis:
    console.log(`Kitų klasių vidurkiai skiriasi ${dKlase - aKlase}, ${dKlase - bKlase}, ${dKlase - cKlase}`);
    break;
}

// /* 6. Žiemojantys paukščiai */
let pauksciaiStr  = prompt("Įveskite kiek kiekvienos rūšies paukščių liko žiemoti:");
let pauksciaiStrArr= pauksciaiStr.split(" ");
let pauksciai1 = Number(pauksciaiStrArr[0]);
let pauksciai2 = Number(pauksciaiStrArr[1]);
let pauksciai3 = Number(pauksciaiStrArr[2]);

if((pauksciai1 > pauksciai2) && (pauksciai1 > pauksciai3)){
  console.log(pauksciai1);
  if(pauksciai2 > pauksciai3){
    console.log(pauksciai2);
    console.log(pauksciai3);
    console.log(`Skirtumas tarp didžiausio ir mažiausio: ${pauksciai1 - pauksciai3}`)
  } else{
    console.log(pauksciai3);
    console.log(pauksciai2);
    console.log(`Skirtumas tarp didžiausio ir mažiausio: ${pauksciai1 - pauksciai2}`)
  }
} else if((pauksciai2 > pauksciai1) && (pauksciai2 > pauksciai3)){
  console.log(pauksciai2);
  if(pauksciai1 > pauksciai3){
    console.log(pauksciai1);
    console.log(pauksciai3);
    console.log(`Skirtumas tarp didžiausio ir mažiausio: ${pauksciai2 - pauksciai3}`)
  } else{
    console.log(pauksciai3);
    console.log(pauksciai1);
    console.log(`Skirtumas tarp didžiausio ir mažiausio: ${pauksciai2 - pauksciai1}`)
  }
} else if((pauksciai3 > pauksciai2) && (pauksciai3 > pauksciai1)){
  console.log(pauksciai3);
  if(pauksciai2 > pauksciai1){
    console.log(pauksciai2);
    console.log(pauksciai1);
    console.log(`Skirtumas tarp didžiausio ir mažiausio: ${pauksciai3 - pauksciai1}`)
  } else{
    console.log(pauksciai1);
    console.log(pauksciai2);
    console.log(`Skirtumas tarp didžiausio ir mažiausio: ${pauksciai3 - pauksciai2}`)
  }
}

/* 7. Jonuko problema */
let variantas = Number(prompt("Įveskite užduoties variantą. "));
let aReiksme = Number(prompt("Įveskite a reikšmę: "));
let bReiksme = Number(prompt("Įveskite b reikšmę: "));

switch(true) {
  case variantas === 1:
    console.log(`Atsakymas: x = ${(aReiksme*bReiksme)+3}`);
    break;
  case variantas === 2:
    console.log(`Atsakymas: x = ${aReiksme + bReiksme}`);
    break;
  case variantas === 3:
    console.log(`Atsakymas: x = ${aReiksme - bReiksme}`);
    break;
}

/* 8. Skaičiai*/
let aKart = Number(prompt("Įveskite a reikšmę: "));
let bKart = Number(prompt("Įveskite b reikšmę: "));
let cKart = Number(prompt("Įveskite c reikšmę: "));

if(aKart % 3 === 0){
  console.log("Atsakymas: " + aKart)
} else if(bKart % 3 === 0){
    console.log("Atsakymas: " + bKart)
  } else if(cKart % 3 === 0){
    console.log("Atsakymas: " + cKart)
    } else{
      console.log("Atsakymas: nėra")
    }

