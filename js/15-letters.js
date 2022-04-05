/*priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:

*/
function letters(text, step) {
  if (typeof text !== "string") {
    return "ERROR: kintamasis yra netinkammo tipo";
  }
  if (typeof step !== "number") {
    return "ERROR: Zingsnis yra netinkammo tipo ";
  }
  if (!isFinite(step)) {
    return "ERROR: zingsnis turi buti tikras skaicius";
  }
  if (step % 1 !== 0) {
    return "ERROR: zingsnis turi buti sveikasis skaicius";
  }
  if (step === 0) {
      return `ERROR: zingsnis negali buti lygus nuliui`
  }
  if (step > text.length){
      return 'ERROR: zingsnis negali buti lygus nuliui'
  }
let raides = ``
for (let i=step -1; i < text.length; i+= step){
    const raide = text[i];
    raides += raide;
}
  return raides;
}

// console.log(letters(1561, 2), '-->', 'ERROR');
// console.log(letters('labas', 'iki'), '-->', 'ERROR');
// console.log(letters('labas', NaN), '-->', 'ERROR');
// console.log(letters('labas', -Infinity), '-->', 'ERROR');
// console.log(letters('labas', Infinity), '-->', 'ERROR');
// console.log(letters('labas', 1.111111), '-->', 'ERROR');
// console.log(letters('abc', 0), '-->', 'ERROR');
// console.log(letters('abc', 4), '-->', 'ERROR');
// console.log(letters('', 4), '-->', 'ERROR');

console.log(letters('abcdefg', 2), '-->', 'bdf');
console.log(letters('abcdefghijkl', 3), '-->', 'cfil');
console.log(letters('abcdefghijkl', 4), '-->', 'dhl');

console.log(letters('abcdefg', -2), '-->', 'fdb');
console.log(letters('abcdefghijkl', -3), '-->', 'jgda');
console.log(letters('abcdefghijkl', -4), '-->', 'iea');