// 1. Group a list of students by their class (e.g., "10th", "12th")
{
    let students = [
        { name: "Ravi", class: "10th" },
        { name: "Sneh", class: "12th" },
        { name: "Amit", class: "10th" }
    ];
    let groupedStudents = Object.groupBy(students, s => s.class);
    console.log("Exercise 1 Solution : ", groupedStudents);
}

// 2. Check if an object {name: "Ravi", age: 22} has property "age" and "city"
{
    let person = { name: "Ravi", age: 22 };
    console.log("Exercise 2 Solution - hasOwn age : ", Object.hasOwn(person, "age"));
    console.log("Exercise 2 Solution - hasOwn city : ", Object.hasOwn(person, "city"));
}

// 3. Compare two values: "Hello" and "Hello", then compare true and 1
{
    console.log("Exercise 3 Solution - 'Hello' vs 'Hello':", Object.is("Hello", "Hello"));
    console.log("Exercise 3 Solution - true vs 1:", Object.is(true, 1));
}

// 4. Get all keys from {brand: "BMW", model: "X5", year: 2024}
{
    let car = { brand: "BMW", model: "X5", year: 2024 };
    console.log("Exercise 4 Solution : ", Object.keys(car));
}

// 5. Get all values from {name: "Sneha", role: "Developer", salary: 40000}
{
    let employee = { name: "Sneh", role: "Developer", salary: 40000 };
    console.log("Exercise 5 Solution : ", Object.values(employee));
}

// 6. Convert object {id: 101, course: "JS"} into entries
{
    let course = { id: 101, course: "JS" };
    console.log("Exercise 6 Solution : ", Object.entries(course));
}

// 7. Convert entries [["user", "Amit"], ["age", 30]] into an object
{
    let entries2 = [["user", "Amit"], ["age", 30]];
    let userObj = Object.fromEntries(entries2);
    console.log("Exercise 7 Solution:", userObj);
}