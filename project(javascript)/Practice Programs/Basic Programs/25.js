// JavaScript Program to Find the Factors of a Number

let a = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        console.log(i);
    }
}
