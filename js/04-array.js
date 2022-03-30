const pazymiai = [10, 2, 8, 4, 6];
console.log('pazymiai', pazymiai);

console.log('Pirmas:', pazymiai[0]);
console.log('Antras:', pazymiai[1]);
console.log('Antras:', pazymiai[1,5]);

console.log('paskutinis', pazymiai[4]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis -1;
console.log('paskutinis', pazymiai[paskutinioPozicija]);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

let index = 0;
console.log(`Cia yra ${studentai[index++]}.`);
console.log(`Cia yra ${studentai[index++]}.`);
