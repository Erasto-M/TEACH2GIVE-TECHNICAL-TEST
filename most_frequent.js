/*3. Design a function that takes a string or sequence of characters as input and
returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l
 */
//solution

function mostFrequentCharacter(input){
    if(typeof input === 'number '){
        input = String(input);
    }
     else if(typeof input !== 'string' || input.length === 0){
        return null;
    }
   
    let frequencyMap = {};
    for(let char of input){
        if(frequencyMap[char]){
            frequencyMap[char]++;
        } else {
            frequencyMap[char] =1;
        }
    }

    let maxChar = null;
    let maxfrequency = 0;
    for (let char in frequencyMap){
        if(frequencyMap[char]> maxfrequency){
            maxfrequency = frequencyMap[char];
            maxChar = char;
        }
    }
    // in the case where the frequentcharacters are more than 1 put them in to an array(list)
    let frequentCharacters = [];
    for (let char in frequencyMap){
        if(frequencyMap[char]=== maxfrequency){
            frequentCharacters.push(char);
        }
    }
    
    return maxChar;
}
console.log(mostFrequentCharacter("hello"));