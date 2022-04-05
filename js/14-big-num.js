function bigNum(list) {
  if (typeof list !== 'object') {
    return `ERROR: netinkamas tipas`;
  }
  if (list.length === 0) {
    return `ERROR: sąrašas negali būti tuščias`;
  } else if (list.length === 1) {
      return list[0];
  }
  let biggestNumber = list[0];

  for (let i = 0; i < list.length; i++){
      const number = list[i];
      if (number > biggestNumber) {
          biggestNumber = number;
      }
  }

  return biggestNumber;
}

console.log(bigNum([1]), `-->`, 1);
console.log(bigNum("pomidoras"), `-->`,`ERROR`);
console.log( bigNum([]), `-->`,`ERROR` );
console.log( bigNum([1, 2, 3] ),`-->`, 3);

console.log( bigNum( [ -5, 78, 14, 0, 18 ] ),`-->`, 78 );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ),`-->`, 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), `-->`, -1 );


