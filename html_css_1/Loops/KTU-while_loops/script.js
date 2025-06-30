'use strict'
/* 1. Voverytė */
const riesutuKiekisInput = Number(prompt("Sukauptas riešutų kiekis"));
const voveriukuSkaiciusInput = Number(prompt("Voveriukų skaičius"));
let riesutuKiekis = riesutuKiekisInput;
const ziemosDienos = 92;

const suvalgytaRiesutuKasdien = (voveriukuSkaiciusInput + 1) * 3;

let uzteksDienos = 0
while (riesutuKiekis > 0) {
    riesutuKiekis -= suvalgytaRiesutuKasdien;
    if (riesutuKiekis <= 0) {
        break;
    } else {
        uzteksDienos++;
    }
}

console.log("Riešutų sukaupta " + uzteksDienos + " dienoms");
if (uzteksDienos >= ziemosDienos) {
    console.log("Riešutų užteks visai žiemai")
} else {
    console.log("Riešutų neužteks visai žiemai")
}

/* 2. Degalai */
const kurasInput = Number(prompt("Įveskite kuro bako talpą: "));
let kuras = kurasInput;
const sanaudosInput = Number(prompt("Įveskite kuro sanaudas n:"));
let dienos = 1;

while (kuras > 0) {
    if (dienos % 2 === 0) {
        kuras -= sanaudosInput * 2;
        if (kuras < sanaudosInput) {
            break
        }
    } else {
        kuras -= sanaudosInput;
        if (kuras < sanaudosInput * 2) {
            break
        }
    }
    dienos++;
}

console.log("Keliauti bus galima " + dienos + " dienų/(as)/(ą).")

/* 3. Saldainiai */
const nSaldainiaiInput = Number(prompt("Petriukas gavo saldainių: "));
let nSaldainiai = nSaldainiaiInput;
let uzteksSDienu = 0;

while (true) {
    let suvalgeSaldainiu = Number(prompt("Per dieną suvalgė:"));
    nSaldainiai -= suvalgeSaldainiu;
    uzteksSDienu++;

    if ((nSaldainiai - suvalgeSaldainiu) <= 0) {
        break
    }
}

console.log(`Petriukui saldainių užteks ${uzteksSDienu} dienoms ir jam liks ${nSaldainiai} saldainiai.`)

/* 4. Knyga */
const skyriaiInput = Number(prompt("Įveskite knygos skyrių skaičių: "));
let skyriai = skyriaiInput;
let dienosIrSkyriai = 1;

while (skyriai > 0) {
    skyriai -= dienosIrSkyriai;

    if (skyriai - (dienosIrSkyriai + 1) <= 0) {
        dienosIrSkyriai++;
        break
    }

    dienosIrSkyriai++;
}

console.log("Tadas visą knygą perskaitys per " + dienosIrSkyriai + " dienas (-ų).")
const skyriuVidurkis = (skyriaiInput / dienosIrSkyriai).toFixed(2);
console.log("Tadas vidutiniškai per dieną perskaitė " + skyriuVidurkis + " skyrius (-ų).")

/* 5. Kurjeris */
let dideliUzsakymai = 0;
let uzsakymuSkaicius = 0;
let uzsakymuSuma = 0;

while (true) {
    let kurjerioInput = Number(prompt("Įveskite sumą:"));

    if (kurjerioInput === 0) {
        console.log("1. " + dideliUzsakymai)
        console.log("2. " + (uzsakymuSuma / uzsakymuSkaicius).toFixed(0))
        console.log("3. " + uzsakymuSkaicius)
        break
    }

    if (kurjerioInput > 100) {
        dideliUzsakymai++;
    }

    uzsakymuSuma += kurjerioInput;
    uzsakymuSkaicius++;
}

/* 6. Skaičiuotuvas */

const veiksmas = Number(prompt("Įveskite veiksmą (1 - suma, 2 - atimtis, 3 - daugyba, 4 - max, 5 - min.):"));

let danutesPirmasInput = Number(prompt(""));
let pirmaVerte = danutesPirmasInput;
let danutesTotal = pirmaVerte;
let kintantiMinMax = pirmaVerte;

while (true) {
    let danutesInput = Number(prompt(""));
    if (danutesInput === 0) {
        if (veiksmas === 1) { console.log("sum: " + danutesTotal) }
        if (veiksmas === 2) { console.log("minus: " + danutesTotal) }
        if (veiksmas === 3) { console.log("daugyba: " + danutesTotal) }

        if (veiksmas === 4) { console.log("max: " + danutesTotal) }
        if (veiksmas === 5) { console.log("min: " + danutesTotal) }
        break;
    }

    if (veiksmas === 1) {
        danutesTotal += danutesInput;
    }

    if (veiksmas === 2) {
        danutesTotal -= danutesInput;
    }

    if (veiksmas === 3) {
        danutesTotal *= danutesInput;
    }


    if (veiksmas === 4) {
        if (kintantiMinMax < danutesInput) {
            danutesTotal = danutesInput;
            kintantiMinMax = danutesInput
        }
    }

    if (veiksmas === 5) {
        if (kintantiMinMax > danutesInput) {
            danutesTotal = danutesInput;
            kintantiMinMax = danutesInput
        }
    }
}

/* 7. Karnavalas (klaida antram pvz) */
let kiekEjo = 0;
let kiekPateko = 0;

while (true) {
    let baluInput = Number(prompt("Įveskite kiek balų gavo mokinys?"));
    if (baluInput === 0) {
        break;
    }

    if (baluInput >= 5) {
        kiekPateko++
    }

    kiekEjo++;
}

console.log(`Į karnavalą ėjo ${kiekEjo} mokiniai, pateko ${kiekPateko}.`);

/* 8. Atvirukai (klaida antram pvz)*/
let drauguSk = Number(prompt("Keliems draugams Linas nori dovanoti atvirukus?"));
let atvirukuRusiuSk = Number(prompt("Kiek rūšių atvirukų yra parduotuvėje?"));
let index = 1;
let kiekRusiuReiks = 1;
let kiekVisoAtviruku = 0;

while (atvirukuRusiuSk > 0) {

    let atvirukuSk = Number(prompt(`Kiek yra ${index} rūšies atvirukų?`));

    kiekVisoAtviruku += atvirukuSk;

    if (kiekVisoAtviruku < drauguSk) {
        kiekRusiuReiks++
    }

    atvirukuRusiuSk--;
    index++;
}

console.log(`${kiekRusiuReiks} rūšių atvirukų užtektų visiems Lino draugams.`)