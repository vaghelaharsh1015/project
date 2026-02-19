// calculate area of a rectangle
function getRectangleArea(length, width) {
    return length * width;
}

// calculate area of a circle
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

// calculate area of a triangle
function getTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log("Rectangle Area:", getRectangleArea(5, 3));
console.log("Circle Area:", getCircleArea(4));
console.log("Triangle Area:", getTriangleArea(6, 2));  
