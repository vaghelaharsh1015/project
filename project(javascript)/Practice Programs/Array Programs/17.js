// JavaScript Program to Extract Given Property Values from Objects as Array
{
    let students = [
        { name: "Ravindra", age: 22 },
        { name: "Ankit", age: 20 },
        { name: "Meena", age: 25 }
    ];

    let names = students.map(student => student.name);

    console.log(names);

    let ages = students.map(student => student.age);

    console.log(ages);
}