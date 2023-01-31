const fnum = 13.123456789;
const snum = 2.123;
const n = 5;

let frac = 10 ** n * (fnum - Math.trunc(fnum)).toFixed(n);
let frac2 = 10 ** n * (snum - Math.trunc(snum)).toFixed(n);

console.log("frac > frac2 -", frac < frac2);
console.log("frac < frac2 -", frac > frac2);
console.log("frac >= fra2c -", frac >= frac2);
console.log("frac <= frac2 -", frac <= frac2);
console.log("frac === frac2 -", frac === frac2);
console.log("frac != frac2 -", frac != frac2);
