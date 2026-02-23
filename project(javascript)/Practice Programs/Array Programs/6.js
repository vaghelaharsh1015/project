// JavaScript Program to Remove Specific Item From an Array

{
    let numbers = [10, 20, 30, 40, 50];
    let itemToRemove = 30;

    let newArray = numbers.filter(num => num !== itemToRemove);

    console.log(newArray);
}