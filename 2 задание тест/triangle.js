let a, b, c;
a = +prompt("Введите первую сторону треугольника"),
b = +prompt("Введите вторую сторону треугольника"),
c = +prompt("Введите третью сторону треугольника");
if ((a > 0 && b > 0 && c > 0) && (a != 0 && b != 0 && c != 0)) {
if (a + b > c && a + c > b && b + a > c && b + c > a && c + a > b && c + b > a) {
if (a === b === c) {
console.log("Треугольник является равносторонним");
} else if (a === b || b === c || a === c) {
console.log("Треугольник является равнобедренным");
} else {
console.log("Треугольник является разносторонним");
}
} else {
console.log("Сумма двух из чисел больше третьего");
}
} else {
console.log("Одно из чисел <= 0");
}