/*4. Design a function that determines whether a given string is a pangram. A
pangram is a sentence or phrase containing every letter of the alphabet at
least once. Punctuation and case are typically ignored. For example, the
string "The quick brown fox jumps over the lazy dog" is a pangram, while
"Hello, world!" is not */

//solution

function checkforpangram(input){
    input = input.toLowerCase();
    let inputSet = new Set();

    for(let char of input){
        if(char >= "a" && char <= "z"){
            inputSet.add(char);
        }
    }
    console.log(inputSet);
   return inputSet.size === 26;
}

console.log(checkforpangram("The quick brown, fox jumps over the lazy dog"));
console.log(checkforpangram("Hello, World"));