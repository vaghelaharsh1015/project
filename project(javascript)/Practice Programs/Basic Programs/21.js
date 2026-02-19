// JavaScript Program to Find the Sum of Natural Numbers

let n = parseInt(prompt("Enter A Number : "));

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

alert("The Sum of " + n + " Natural Numbers is : " + sum)