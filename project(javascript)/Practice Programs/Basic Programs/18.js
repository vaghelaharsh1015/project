// JavaScript Program to Check Armstrong Number

let num = 153, sum = 0, rem;

let org = num;

while (num > 0) {
    rem = org % 10;
    sum += rem * rem * rem;
    org = parseInt(org / 10);
}

if (sum == num) {
    console.log(`${num} is an Armstrong number`);
}
else {
    console.log(`${num} is not an Armstrong number`);
}