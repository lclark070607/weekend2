let happy =;
happy = word + 18;
word = word + 3;
// select the variable and control d everytime you press it goes one more down

//**
* Problem #1: determine whether a string has more x's or o's.a
* Input: string


console.log('#7 Longest Word')

//Write a function called longestWord that takes a single string 
//and returns the longest word in the string.
//Hint: look into the split() function that you can call on strings.

//return a string, you can write the code & it will run BUT you have to say it in RETURN or it won't print'

function longestWord(sentence) {
    //1. Convert sentence into an array
    //2. Search trhough the words for the largest letter count
    //3. Once we've checked them all, return the longest one'

    let words = sentence.split(' '); //now words is an array of strings
    let longest = 0; //the length of the longest word so far
    let keeper = ''; //could also say null instead of ''
    
    for (let i = 0; i < words.length; i++) {
        //console.log(words[i]); //Write this after you write for statement.  Check your code to make sure it's working.  This isn't the answer.
       if  (words[i].length > longest) {
           longest = words[i].length;
        //ENGLISH:  if (word[i.length > longest)--> if this word is longer than longest so far --> 
       // longest = words[i].length; --> we have a new longest word
       keeper = words[i];
       console.log('found a new longest: ' + keeper);//show me everytime you update the longest word
}

    return keeper;
}


let winner = longestWord('how much wood would a woodchuck chuck?');
console.log(winner);

//messing with split
//split is a thing you do on strings.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

let sentence = 'how much wood would a woodchuck chuck?'
console.log(sentence.split('w')); //result of this is an array, this would get rid of w's'
console.log(sentence.split(' '));
console.log(sentence.split('');//this would break string into array of letters

let sentence = 'how much wood would a woodchuck chuck?'
let words = sentence.split(' ');
let favWord = words[5];
console.log(favWord);