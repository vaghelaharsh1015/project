// JavaScript Program to Find HCF or GCD

let a = parseInt(prompt("Enter a Number 1 : "));
let b = parseInt(prompt("Enter a Number 2 : "));
let hcf;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
        hcf = i;
    }
}

alert("HCF (GCD) of " + a + " and " + b + " is: " + hcf);