//Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}. День недели 1 января
//должен задаваться с помощью переменной, то есть программа должна корректно работать для любого дня недели, с которого начинается месяц.
const month = [];
const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let day = "Вторник";
let indexWeek = week.indexOf(day);
for (let i = 1; i <= 31; i++) {
  month.push(i);
}
for (let z = 0; z < 31; z++) {
  const y = (indexWeek + month[z] - 1) % 7 ;
  console.log(month[z], "Января", week[y]);
  if (z == 31) {
    break;
  }
}