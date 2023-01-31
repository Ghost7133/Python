const max = 0;
const min = -10;
let random = Math.floor(Math.random() * (max - min) + min);
let konec = random + 1 - Math.abs(random % 2);
console.log(konec);
