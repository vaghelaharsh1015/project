// JavaScript Program to Append(add) an Object to an Array

{
    let users = [
        { id: 1, name: "Ravi" },
        { id: 2, name: "Amit" }
    ];

    let newUser = { id: 3, name: "John" };

    users.push(newUser);

    console.log(users);
}