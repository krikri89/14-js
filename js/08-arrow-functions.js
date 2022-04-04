const a = 7;
const b = 5;

//iprasta funcija

function suma (a, b) {
return a + b;
}

const r1 = suma (88, 22);
console.log(r1);
//cosnt + function

const atimtis = function (a, b) {
    return a - b;
}
const r2 = atimtis(a, b);
console.log(r2);
// kintamajam priskirta anonimine funkcija

const dalyba = function (a, b) {
    return a / b;
}
const r3 = dalyba(a, b);
console.log(r3);

// vietoj zodzio function gali ideti => arrow (rodykline function)

const dalyba2 =  (a, b) => {
    return a / b;
}
const r4 = dalyba2(a, b);
console.log(r4);

//arrow function

const daugyba =  (a, b) => {
    return a * b;
}
const r5 = daugyba(a, b);
console.log(r5);

//jeigu logikos bloke yra tik viena procedura, tai galime nerasyti {} ir return. ---------------------
const kvadratu =  (a) => a * a;

const r6 = kvadratu(a);
console.log(r6);

//

const tekstas = 'Labas Rytas';

const pirmaRaide = s => s[6];

console.log(pirmaRaide(tekstas));