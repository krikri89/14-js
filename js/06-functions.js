/*suskaiciuoti vidurki*/

const petras = [10, 10, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];


function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3]; 
    return pazymiuSuma / pazymiuSarasas.length;
}
const petroVidurkis = vidurkis(petras);
console.log('Petras', petroVidurkis);

const marytesVidurkis = vidurkis(maryte);
console.log('Maryte', marytesVidurkis);

const jonoVidurkis = vidurkis(jonas);
console.log('Jonas', jonoVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Ona', onosVidurkis);


/*Fuction gets a name need to return a sentence
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu"
*/

function vardoAnalize (name){
    return `Vardo "${name}" pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const marytesVardas = vardoAnalize('Maryte');
console.log(marytesVardas);

const jonoVardas = vardoAnalize('Jonas');
console.log(jonoVardas);

const onosVardas = vardoAnalize('Ona');
console.log(onosVardas);

/*
Function gets 2 numbers and need to return lygti su sprendimu, pvz.:
2 + 2 = 4;
*/

function suma(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

const s1 = suma(2, 3);
console.log(s1);

const s2 = suma(0.1, 02);
console.log(s2);

const s3 = suma(-88, -11);
console.log(s3);
