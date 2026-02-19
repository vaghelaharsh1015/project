// JavaScript Program to Find LCM

let a = parseInt(prompt("Enter a Number 1 : "));
let b = parseInt(prompt("Enter a Number 2 : "));
let lcm = (a > b) ? a : b;

while (true) {
    if (lcm % a == 0 && lcm % b == 0) {
        alert("LCM of " + a + " and " + b + " is: " + lcm);
        break;
    }
    lcm++;
}