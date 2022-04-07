/*
Number
*/
// skaiciaus convert to string
console.log((5215).toString());
console.log('' + 5251);
//desimtaines dalies nukirpimas
console.log((3.1415).toFixed());
console.log(typeof (3.1415).toFixed(3));

//is text convert to number
console.log(parseInt('17.53'));
console.log(typeof parseInt('17.53'));
console.log(parseFloat('17.53'));
console.log(typeof parseFloat('17.53'));
console.log('------------------------');
console.log(+'17.53'); //casting + rodo tik kai visas veikia
console.log(+'labas17.53'); // kitaip niekas neveiks
console.log(+'labas17.53labas');
console.log(+'17.53labas17.53');
console.log('---------------------');
console.log(parseFloat('17.53Labas17.53')); //veiks iki kol bus jam suprantama. sk
console.log(parseInt('Labas'));

console.log('---------------------');
console.log('math class');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.abs(-7)); // keicia i teigiama arba neigiama
console.log(Math.round(1.5)); //apvalinimas pagal 0.5 taisykkle
console.log(Math.floor(1.5)); //apvalinimas iki zemesnio sk
console.log(Math.ceil(1.5)); //apvalinimas iki aukstesnio sk
console.log(Math.round(1.00001)); //apvalinimas pagal 0,5
console.log(Math.floor(1.00001)); //apvalinimas 
console.log(Math.ceil(1.00001)); //apvalinimas 
console.log(Math.round(1.999)); //apvalinimas 
console.log(Math.floor(1.999)); //apvalinimas 
console.log(Math.ceil(1.9999)); //apvalinimas 
console.log('------------------');
console.log('random sk: [0...1)');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log('min-max');// kaip rasti reiksmes masyve
console.log(Math.min(1, 7, -4, 3)); //duos min sk, negali buti masyvas
console.log(Math.max(1, 7, -4, 3));//duos min sk, negali buti masyvas
console.log(Math.trunc(-12.7)); //issiaiskint ka daro
console.log('------------------');


/*
string
*/
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');

console.log('labas rytas LT!'.length);
console.log('labas rytas LT!'.includes('y'));
console.log('labas rytas LT!'.includes('rytas'));
console.log('labas rytas LT!'.includes('rytas '));
console.log('labas rytas LT!'.includes('x'));
console.log('------------------');
console.log('kur stringe yra kitas sub-string');
console.log('labas rytas LT!'.indexOf('L'));
console.log('Labas rytas LT!'.indexOf('L', 1));
console.log('labas rytas LT!'.indexOf('y'));
console.log('labas rytas LT!'.indexOf('rytas'));
console.log('labas rytas LT!'.indexOf('rytas '));
console.log('labas rytas LT!'.indexOf('x'));
console.log('------------------');
console.log('sukarpyti string i dalis');
console.log('labas rytas LT!'.split(' '));
console.log('labas rytas LT!'.split('a'));
console.log('labas rytas LT!'.split('!'));
console.log('labas rytas LT!'.split('L'));
console.log('------------------------------');
console.log('kartojimas');
console.log('Steve '.repeat(3)+'!');
console.log('a'.repeat(20));
console.log('labas rytas LT!'.length);

console.log('labas rytas LT!'.charAt(2));
console.log('labas rytas LT!'[2]);// duos 2 vietos el
const salut = 'Salut tout le monde';
console.log(salut.slice(salut.indexOf('l')));// nukirps nuo tos dalies kur index nurodyta
console.log(salut.slice(6, 10));// nukirps tam tarpe
console.log('---------------');
console.log('teksto konvertavimas');
console.log(salut.toUpperCase());
console.log(salut.toLowerCase());
console.log('---------------');
console.log('teksto "apvalinimas" nuo tarpu');
console.log('   Labas   rytas   '.trim() + '.'); //issima tarpus
console.log('   Labas   rytas   '.trimEnd() + '.');
console.log('   Labas   rytas   '.trim() + '.');
console.log('-----------------');
console.log('replace');
console.log(salut.replace('Salut','Bonjour')); // pakeicia is vieno i kita
console.log(salut.replace('a','_')); // pakeicia is vieno i kita
console.log(salut.replaceAll('e','_')); // pakeicia is vieno i kita
console.log(salut.replace(/e/gi,'_')); // regex geriau nenaudoti del saugumo

/*
array
*/
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
const rytas = ['Labas','rytas', 'Lietuva'];
console.log('sujungti');
console.log(rytas.join(''));
console.log(rytas.join(', '));
console.log(rytas.join('-=- '));

console.log('paieska');
console.log(rytas.includes());
console.log(rytas.includes('a'));
console.log(rytas.includes('rytas'));
console.log(rytas.includes('Rytas')); //turi buti exact kaip original
console.log(rytas.indexOf('rytas'));//randa kur
console.log(rytas.indexOf('Rytas'));//turi buti excat kaip original
console.log(rytas.indexOf('Lietuva'));
console.log('--------------');
console.log('PUSH');
console.log(rytas.push('Ka tu?'));
console.log(rytas);
console.log('------------------');
console.log(rytas.unshift('UNSHIFT'));
console.log(rytas);
console.log(rytas.pop());
console.log(rytas.shift());
console.log('------------');
console.log('extra');
console.log(rytas.reverse());
//map, filter, sort, reduce, every, flat, ferEach
const marks = [10, 2, 8, 4,6];
console.log('MAP- individualiu reiksmiu konvertavimas');
console.log(marks.map(item => item));//identifikuoja ir grazina pakeista
console.log(marks.map(item => 2 * item));
console.log(marks.map(item => item % 3));
console.log(marks.map(item => item - 0.5));
//sujungti 2 masyvus conCat
console.log('filter -atrenka');//isfiltruoja
console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item <= 5));
console.log(marks.filter(item => item > 5 && item % 3));//item = masyvas
console.log('-----------------');
console.log('reduce-sutraukia visas reiksmes i viena');//geriausia naudoti sumai surasti
console.log(marks.reduce((total, item) => total + item, 0));//susumuoti
console.log(marks.reduce((total, item) => total + item));//susumuoti
console.log(marks.reduce((total, item) => total * item, 1));//galinis skaicius rodo nuo ko pradedi skaiciuoti. todel daugyboje audoti 1
console.log(marks.reduce((total, item) => total * item));
console.log(marks.reduce((total, item) => total - item, 0));//minusas su 0 pradeda skaiciuoti nuo 0
//0 -10 -2 -8 -4 -6
console.log(marks.reduce((total, item) => total - item));//pradeda skaiciuoti nuo pirmo masyvo elemento
//10 -2 -8 -4 -6
console.log('-----------------');
console.log('-SORT----');
const nums = [1, 2, 4, 10, 20, 30, 11, 21, 310];
console.log(marks.sort());//sortinami ne skaiciai, tarsi lygintu textus

console.log(nums.sort());// ats 1, 10,  11, 2, 20, 21, 30, 310, 4
console.log(nums.sort((a, b) => a -b));//1 turi eiti i gala, -1 eiti i prieki, 0 lieka vietoj
console.log(nums.sort((a, b) => b - a));//1 turi eiti i gala, -1 eiti i prieki, 0 lieka vietoj

const texts = ['asd','qw','asdas','s'];
console.log(texts.sort());
console.log(texts.sort().reverse());
console.log(texts.sort((a, b) => a.length -b.length));//1 turi eiti i gala, -1 eiti i prieki, 0 lieka vietoj
console.log(texts.sort((a, b) => b.length - a.length));

console.log('-----------');
console.log('FLAT');
const matrix = [
    [1, 2],
    [11, [9, 10], 22],
    [3, 4],
];
console.log(matrix.flat());//ats[ 1, 2, 11, 22, 3, 4 ]
console.log(matrix.flat(2));// skaicius norodo i kiek eiluciu sumesti

console.log('-------------');
console.log('.....- spread operator');
console.log(Math.min(1, 5, 7, -4, 10));
console.log(Math.max(1, 5, 7, -4, 10));

const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(...minMax));
console.log(Math.min(...minMax));
console.log('------sudedi keleta masyvu info together');
const m1 = [1, 2]
const m2 = [3, 4]
const m3 = [5, 6]
const m123 = [...m1,123, ...m2, ...m3]
const m132 = [...m1,...m3,132, ...m2]
const m321 = [...m3,...m2, ...m1, 321]
console.log(m123);
console.log(m132);
console.log(m321);

/*
object
*/
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('---OBJECT----');
const person = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);
console.log('----------');
console.log('automatinis VISU objekto raktazodziu istraukimas');
const personKeys = Object.keys(person);
console.log(personKeys);

console.log('------');
console.log('automatinis VISU objekto reiksmiu istraukimas');
for (const key of personKeys){ // for dirba tik su masyvais 
    console.log(key, ':', person[key]);
}
console.log('FOR-IN'); // for-in tik objektams
for (const key in person){
    console.log(key, ':', person[key])
}
console.log('----------------------');
console.log('... - spred operatorius (naudojimas objekte)');
console.log({ ...person});// norint spread objekta i viena eilute, ideti ji i kitus sklaiustelius
console.log({ ...person, car: 'Tesla'});
console.log({color: "red", ...person});
console.log({ ...person, isMarried: false,});//paskutinis teiginys laimi. Married yra paskutiis
console.log({isMarried: false, ...person});// paskutinis yra perosn su married virsuj true
console.log('------------');
const objA = {
    a: 'a',
    d: 'd'
}
const objB = {
    b: 'b',
    c: 'c'
}
const objAB = {...objA, ...objB};
const objBA = {...objB, ...objA};
console.log(objAB);
console.log(objBA);
console.log('-----------');
// function sum(a, ...x); pasidometi ka duoda jeigu spread idedi i function
/*DESTRUCTURING - destrukturizavimas
*/
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('---DESTRUCTURING----');

const skaiciai = [10, 2, 8, 4, 4, 5, 7];// masyve svarbu eiliskumas
const pirmasSkaicius = skaiciai[0];
const antrasSkaicius = skaiciai[1];
const treciasSkaicius = skaiciai[2];
console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

const[pirmas, antras, trecias] =skaiciai;//
console.log(pirmas, antras, trecias);
const [a] =skaiciai; // a yra pirmas skaitmuo masyve
console.log(a);
const[pirmas1, antras2, trecias3, ...kitas] =skaiciai;//daugtaskis leidzia suprasti kad reikia paimti visus likusius
console.log(pirmas1, antras2, trecias3, kitas);

const [x, ...y] = skaiciai;
console.log(x, y); // ats 10 [ 2, 8, 4, 4, 5, 7 ]

// const car {
//     name: 'Tesla',


// }

// const carName = car.carName

console.log('-------------random 2----------');
const random = Math.floor(Math.random() *10);//floor apvalina o random douda random skaiciu [0,9]
console.log(random);
console.log('-----');

const nuo =10;
const iki = 19;
const randomNuoIki = Math.floor(Math.random()*(iki - nuo +1));
console.log(randomNuoIki);

for (let i =0; i<20; i++){
    const randomNuoIki = nuo +Math.floor(Math.random()*(iki - nuo +1));
    console.log(randomNuoIki);
}
function randomNumber (nuo, iki){
    return nuo +Math.floor(Math.random()*(iki - nuo +1));
   
}
for (let i =0; i<20; i++) {
console.log(randomNumber(0, 10));
}