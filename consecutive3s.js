/* 4. Design a function that takes a list of integers as input. The function should
return True if the list contains two consecutive threes (3 next to a 3) anywhere
within the list. Otherwise, it should return False. For example, the function
should return True for [1, 3, 3] and False for [1, 3, 1, 3]. */

//solution
function hasConsecutive3(input){
    for(let i = 0; i<= input.length-1 ; i++ ){
        if(input[i] === 3 && input[i+1]===3){
            return true;
        }
    } 
    return false;
}
console.log("has consecutive3? :" , hasConsecutive3([1,3,5,3,4,5]));