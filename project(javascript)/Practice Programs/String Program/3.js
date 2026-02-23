// JavaScript Program to Check Whether a String is Palindrome or Not
{
    let str = "madam";
    let reversed = str.split('').reverse().join('');

    if (str === reversed) {
        console.log(str + " is a Palindrome");
    } else {
        console.log(str + " is NOT a Palindrome");
    }

}