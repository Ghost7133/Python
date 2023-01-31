// Вычислите площадь прямоугольника,
// противоположные углы которого представлены указанными точками.
const x1 = 2;
const y1 = 3;
const x2 = 10;
const y2 = 5;

let catet = Math.abs(x1 - x2);
let catet2 = Math.abs(y1 - y2);

console.log("Площадь прямоугольника =", catet * catet2);
