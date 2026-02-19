// JavaScript Program to Reverse a String
{
    let str = "hello";
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    console.log("Original : ", str);
    console.log("Reversed : ", reversed);
}