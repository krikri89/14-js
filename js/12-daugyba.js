function daugyba (a, b) {
    // jei a nera skaicius ->error
if (typeof a !== 'number') {
    return `ERROR; pirmas parametras turi buti skaicius`;
}
if (isNaN(a)) {
return `ERROR: pirmas parametras turi buti tikras skaicius`;}

// jeigu b nera skaicius-> error
if (typeof b !== 'number') {
    return `ERROR: antras parametras turi buti skaicius`;
}
if ('' + b === 'Nan') {
return `ERROR: antras parametras turi buti tikras skaicius`;}
    return a*b
};
//geris ats
console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(7, NaN));
//blogi ats
console.log('-----------------');
console.log('error', '-->', daugyba(7, 'labas'));
console.log('error', '-->', daugyba(7.7, true));
console.log('error', '-->', daugyba(false, 5));
console.log('error', '-->', daugyba([1, 2], 5));
console.log('error', '-->', daugyba(-7, -5));
