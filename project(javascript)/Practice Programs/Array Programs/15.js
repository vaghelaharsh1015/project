// JavaScript Program to Sort Array of Objects by Property Values
{
    let students = [
        { name: "Ravindra", age: 22 },
        { name: "Ankit", age: 20 },
        { name: "Parth", age: 25 }
    ];

    students.sort((a, b) => a.age - b.age);

    console.log(students);
}