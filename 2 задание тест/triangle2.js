let a,b,c;
a = 2
b = 3 
c = 4
function triangleType(a, b, c) {
if (a <= 0 || b <= 0 || c <= 0) {
return 'Эти числа не могут быть длинами сторон треугольника';
} else if (a + b <= c || a + c <= b || b + c <= a) {
return 'Сумма двух сторон не может быть меньше третьей';
} else if (a === b && b === c) {
return 'Треугольник равносторонний';
} else if (a === b || a === c || b === c) {
return 'Треугольник равнобедренный';
} else if ((a * a + b * b === c * c) && (a * a + c * c === b * b) && (b * b + c * c === a * a)) {
return 'Треугольник прямоугольный';
} else {
return 'Треугольник тупоугольный';
}
}
function triangleArea(a, b, c) {
let p = (a + b + c) / 2;
let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
return S;
}
console.log('Вид треугольника - ' + triangleType(a, b, c))
console.log( 'Площадь треугольника - ' + triangleArea(a,b,c));