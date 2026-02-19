// JavaScript Program to Remove Duplicates From Array
{
    let numbers = [1, 2, 2, 3, 4, 4, 5];

    let uniqueNumbers = [...new Set(numbers)];

    console.log(uniqueNumbers);
}