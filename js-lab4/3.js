const n = 2;
const m = 0;
const count = 10;
let arr = [];
let max = Math.max(n, m);
let min = Math.min(n, m);
for (let i = 0; i < count; i++) {
  arr.push(Math.floor(Math.random() * (max - min) + min));
}
let damaged = false; // Повреждений ещё не было 
 
for (let i = 0; i < count; ++i) {
    if (arr[i]) { // boolean не нужно второй раз сравнивать с true
        if (damaged) { // boolean не нужно второй раз сравнивать с true
            console.log('танк уничтожен');
            break;
        }
        else {
            damaged = true; 
            console.log('танк поврежден');
        }
    } 
    else {
        console.log(`танк переместился на позицию ${i+1}`);
    }
}