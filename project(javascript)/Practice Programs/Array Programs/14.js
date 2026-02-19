// JavaScript Program to Merge Two Arrays and Remove Duplicate Items
{
    let array1 = [1, 2, 3, 4];
    let array2 = [3, 4, 5, 6];

    let mergedUnique = [...new Set([...array1, ...array2])];

    console.log(mergedUnique);
}