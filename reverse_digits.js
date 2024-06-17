/*1. Design a function that reverses the digits of an integer. For example, 50
should become 5 and -12 should become -21 */

//solution

function reverseNumber(number){
    let isNegative = number <0;
    if(isNegative){
        number = -number;
    }
    let reversed = 0;
    while(number !== 0){
        let digit = number % 10;
        reversed = reversed *10 + digit;
        number = Math.floor(number/10);
    }
    if(isNegative){
        number = -number
    }
    return reversed;
}
console.log(reverseNumber(340))
console.log(reverseNumber(-897))


 






