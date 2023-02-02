// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// только половину строки до @
// robin_singh@example.com -> robin...@example.com
let mail = "misha907839@gmail.com";

const mid = Math.round(mail.slice(0, mail.indexOf("@")).length / 2);
console.log("Исходный email адрес - ", mail);
console.log(
  "Защищенный email адрес - ",
  mail.slice(0, mid) + "..." + mail.slice(mail.indexOf("@"))
);
