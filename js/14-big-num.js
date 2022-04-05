/*Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių*/

function bigNum(list) {
    //validation
  if (typeof list !== 'object') {
    return `ERROR: netinkamas tipas`;
  }
  if (list.length === 0) {
    return `ERROR: sąrašas negali būti tuščias`;
  } 
//logic
  let biggestNumber = -Infinity;


  for (let i = 0; i < list.length; i++){
      const number = list[i];

      if (typeof number !== 'number' || !isFinite(number)){
          continue;
      }
      if (number > biggestNumber) {
          biggestNumber = number;
      }
  }
//result validation
if (biggestNumber === -Infinity){
    return `ERROR: sarase nera nei vieno norm skaiciaus`
}
//result return
  return biggestNumber;
}

console.log(bigNum([1]), `-->`, 1);
console.log(bigNum("pomidoras"), `-->`,`ERROR`);
console.log( bigNum([]), `-->`,`ERROR` );
console.log( bigNum([1, 2, 3] ),`-->`, 3);

console.log( bigNum( [ -5, 78, 14, 0, 18 ] ),`-->`, 78 );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ),`-->`, 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), `-->`, -1 );

console.log( bigNum([1, 2, 3, `x`] ),`-->`, 3);
console.log( bigNum([1, 2, `x`, 3] ),`-->`, 3);

console.log( bigNum([`x`]),`-->`, `error`);
console.log( bigNum([`x`, true, [], -Infinity, Infinity] ),`-->`, 'error');

