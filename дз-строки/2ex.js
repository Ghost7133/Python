
// Write a JavaScript function to convert a string into lower camel case
// JavaScript Exercises -> javaScriptExercises
const str = "JavaScript еxercises";

console.log(
  str.slice(0, str.indexOf(" ")) +
    str.slice(str.indexOf(" ") + 1, str.indexOf(" ") + 2).toUpperCase() +
    str.slice(str.indexOf(" ") + 2));