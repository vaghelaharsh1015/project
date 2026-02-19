// JavaScript Program to Convert the First Letter of a String into UpperCase
{
    let str = "hello world";

    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    console.log("Original:", str);
    console.log("Capitalized:", capitalized);
}