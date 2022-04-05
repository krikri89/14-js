function numSize(num) {
  if (
    typeof num !== `number` || !isFinite(num)
  ) {
    return `Error: netinkamas tipas`;
  }
  const numAsString = "" + num;
  let size = numAsString.length;
  // nustatome ar skaicius yra desimtainis (turi kaleli)
  if (num % 1 !== 0) {
      size--;
  }
  //jei skaicius neigiamas
  
  if (num < 0) {
      size--;
  }
  return size
}

console.log(numSize(5), `-->`, 1);
console.log(numSize(true), `-->`, `ERROR`);
console.log(numSize(`asd`), `-->`, `ERROR`);
console.log(numSize(NaN), `--> `, `ERROR`);
console.log(numSize(Infinity), `--> `, `ERROR`);
console.log(numSize(-Infinity), `--> `, `ERROR`);

console.log(numSize(781), `-->`, 3);
console.log(numSize(37060123456), `-->`, 11);
console.log(numSize(3.14), `-->`, 3);
console.log(numSize(-5), `-->`, 1);
console.log(numSize(-5.34), `-->`, 3);
console.log(numSize(0.00000000000001), `-->`, 15);
console.log(numSize(1000000000000000000000), `-->`, 22);
