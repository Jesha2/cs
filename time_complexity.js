// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise. basically if 2 whole numbers are present as positive and negative

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True
function addToZero(numbers) {
    const numPresent = new Set();

    for (const num of numbers) {
        if (numPresent.has(-num)) {
            return true;
        }
        numPresent.add(num);
    }
    return false;
}
// Example usage:
const array1 = [2, -3, 1, 5, -2];
const array2 = [1, 2, 3, 4, 5];

console.log(addToZero(array1)); // true
console.log(addToZero(array2)); // false
//**** Runtime time complexity is O(n) and Space is O(n)

// 2.Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

const hasUniqueChars = (word) =>{

    let stringSet = new Set(word);//creating the Set and comparing its size to the length of the word are linear time operations
    if (stringSet.size===word.length)
         return true;
    else return false;   
    
} 
    console.log(hasUniqueChars("Monday")); // Output: true
    console.log(hasUniqueChars("Moonday")); // Output: false 
 //**** Runtime time complexity is O(n) and Space is O(n)

//  3) Pangram Sentence
//  A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
 
//  Write a function to check a sentence to see if it is a pangram or not.
 
//  For example:
 
//  isPangram("The quick brown fox jumps over the lazy dog!");
//  // -> True
 
//  isPangram("I like cats, but not mice");
//  // -> False
const isPangram=(str)=>{
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        str = str.toLowerCase();
        let strSet = new Set()
        for (const char of str) {
            if (alphabet.includes(char)) {
                strSet.add(char);
            if(strSet.size === 26) return true;
            }
        }
        console.log(strSet.size);
        return  false;
    }
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // Output: true
console.log(isPangram("I like cats, but not mice")); // Output: true
//**** Runtime time complexity is is O(n) and Space is O(n)


// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5
const findLongestWord=(arr)=>{
    let max=0;
    for (const ele of arr) {
        if (ele.length> max) max = ele.length;
    }
    return max
}  
console.log(findLongestWord(["hi", "hello"]));
//**** Runtime time complexity is O(n) and Space is O(1)
