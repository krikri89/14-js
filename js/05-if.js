const a = 7;
const b = '7';

if (a === b) {
    console.log('A yra lygu B');
}
else {
console.log(`A nera lygu B`);
}


console.log('---------------');
const day = 4;

if (day === 1) {
    console.log('pirmadienis');
}
else if (day === 2){
    console.log('antradienis');
}
else if (day === 3){
    console.log('treciadienis');
}
else if (day === 4){
    console.log('ketvirtadienis');
}
else if (day === 5){
    console.log('penktadienis');
}
else if (day === 6){
    console.log('sestadienis');
}
else if (day === 7){
    console.log('sekmadienis');
}
else {
    console.log('tokia diena neegzistuoja');
}

//nesting
console.log('----------------');
const akiuSpalva = 'ruda';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai!');
}
else {
    if (akiuSpalva ==='melyna') {
    console.log('Melynaakiai megsta melynas.');
} else {
    if (akiuSpalva === 'ruda') {
        console.log('Rudaakiai yra melagiai');
    } else {
        console.log('o tu turi akis?');
    }
}
}

console.log('-----------------');

const temp = -25;
const kadaSilta =15;
const lyja = true;

if (lyja === true) {
    if (temp >= kadaSilta) {
            console.log('Varyk su maike 🦈🦈');
        } else {
            console.log('tau reiks kailiniu 🧥🧥');
        } 
    }
else {
            if (temp >= kadaSilta) {
                console.log('gali eiti nuogas😎');
            } else {
                console.log('Be striukes neapseisi ❄️');
            }
        } 
  
