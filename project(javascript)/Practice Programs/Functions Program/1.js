// 1. Add two numbers
function add(a, b) {
    return a + b;
}

// 2. Find square of a number
function square(num) {
    return num * num;
}

// 3. Check if number is even or odd
function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 4. Convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 5. Find the largest of three numbers
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

console.log("1. Add: 5 + 3 = ", add(5, 3));
console.log("2. Square of 4 = ", square(4));
console.log("3. 7 is ", isEven(7));
console.log("4. 30°C in Fahrenheit = ", toFahrenheit(30));
console.log("5. Max of 10, 25, 17 = ", findMax(10, 25, 17));
