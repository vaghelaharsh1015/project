// JavaScript Program to Replace Characters of a String

let str = "JavaScript Programming";

let regex = /[aeiou]/g;

let result = str.replace(regex, "*");
console.log(result);
