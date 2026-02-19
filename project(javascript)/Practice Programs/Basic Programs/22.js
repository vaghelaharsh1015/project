// JavaScript Program to Check if the Numbers Have Same Last Digit

let a = parseInt(prompt("Enter a Number 1 : "));
let b = parseInt(prompt("Enter a Number 2 : "));

if (a % 10 === b % 10)
{
    alert("Yes Same Last Digit");
}
else
{
    alert("Not Same Last Digit");
}