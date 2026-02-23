// JavaScript Program to Get Random Item From an Array
{
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    let randomIndex = Math.floor(Math.random() * fruits.length);

    let randomFruit = fruits[randomIndex];

    console.log(randomFruit);
}