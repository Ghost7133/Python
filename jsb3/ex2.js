let _name = "misha";
let sname = "biRukov";

const convertname =
  _name.slice(0, 1).toUpperCase() + _name.slice(1).toLowerCase();
const convertsname =
  sname.slice(0, 1).toUpperCase() + sname.slice(1).toLowerCase();
console.log(convertname);
console.log(convertsname);

_name === convertname
  ? sname === convertsname
    ? console.log("Без изменений")
    : console.log("С изменениями")
  : console.log("С изменениями");
