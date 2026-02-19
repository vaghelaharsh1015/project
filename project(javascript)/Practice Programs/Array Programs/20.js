// JavaScript Program To Perform Intersection Between Two Arrays
{
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [3, 4, 5, 6, 7];

    let intersection = array1.filter(element => array2.includes(element));

    console.log(intersection);
}