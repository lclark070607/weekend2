console.log('#1 Sum');

//Write a function called sum that 
//takes two parameters and returns the sum of those 2 numbers.

//English version

function Sum(one, two) {
    console.log(one + two)
    return one + two;
}
Sum(2, 6);
Sum(9.42375, 5.3275);
Sum(8, 15);


console.log('#2 Avg');

//Write a function named avg 
//that takes 3 parameters and returns the average of those 3 numbers.

// Order of Operations:  modulus, mult/div, add/subtraction
//Parentheses can reorder anything

function avg(one, two, three) {
    console.log((one + two + three) / 3);
    return ((one + two + three) / 3);
}
avg(4, 4, 4);
avg(5, 6, 1);

//console.log('#2 Avg Josh Code')
//Josh's Code
//function avg(first, second, third) {
//   return (first + second + third) / avg.length;

//}

//let result = avg(5, 4, 3);

//console.log(result);


console.log('#3 greaterThan')
//Write a function called greaterThan that takes two parameters 
//and returns true if the second parameter is greater than the first. 
//Otherwise the function should return false.

function greaterThan(one, two) {

    if (two > one) {
        console.log('true')
        return true
    }

    if (one > two) {
        console.log('false')
        return false
    }
}
greaterThan(5, 8);
greaterThan(8, 5);


console.log('#4 secondLargest');

//Write a function called secondLargest that takes an array and 
//returns the second largest number.

//my original thoughts on how to work it through
//1. Determine the largest number of the array (numbers.length).
//2. Return the second largest number ()


//CODE based on Tallest Mountain:

function findLargest(numbers) {
    let leader = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (leader < numbers[i]) {
            leader = numbers[i];
        }
    }
    // console.log(leader);
    return leader;
}

findLargest([2, 5, 100, 76]);

function findSecondLargest(numbers) {
    let largest = findLargest(numbers);
    let newarray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== largest) {
            newarray.push(numbers[i]);
        }
    }
//go through the loop and copy the array minus the largest




    return findLargest(newarray);

    // let leader2 = (numbers[leader] - numbers[i]);
    // }
}

console.log(findSecondLargest([2, 5, 100, 76]));

//be sure and put [] around the array because 'numbers' is only one perameter

 //Test1:console.log(numbers.length)
//Test2: console.log(leader)


console.log('#5 containsVowel');

//Write a function called containsVowel that takes a single string and 
//returns true if there is at least one value or false otherwise.

function containsVowel(string) {

    let vowel = 'e';

    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === vowel) {
            console.log('true') 
            return true  
        }

        if (string[i] !== vowel) {
            console.log('false')
            return false
        }
    } 
}
        containsVowel('bet');

        //first stage:  got function to work but only with one vowel, or with checking against one vowel.
        //need to figure out how to say 'and' & 'or'

        console.log('#5 containsVowel alt')
        function containsVowel(string) {

    let vowel = ['a', 'e',  'i', 'o', 'u'];

    for (let i = 0; i < string.length; i++) {
        
        if (string.length === vowel[0] || vowel[1] || vowel[2] || vowel[3] || vowel[4]) {
            console.log('true') 
               return true  
        }    


        if (string.length !== vowel[0] || vowel[1] || vowel[2] || vowel[3] || vowel[4]) {
            console.log('false')
            return false
        }
    }
}

        containsVowel('hgtn');

        console.log('#5 containsVowel alt2')

        function containsVowel(string) { 
            let vowel = ['a' || 'e' || 'i' || 'o' || 'u'];

            for (let i = 0; i < string.length; i++) {
        
        if (string[i] === string.match) {
            console.log('true') 
            return true  
        }

        if (vowel !== string.match) {
            console.log('false')
            return false
        }
    } 
        }

        console.log('#5containsVowel alt 3')
        function containsVowel(string) {
            let vowel = ('aeiouAEIOU');
            let abc = vowel.split("");

            for (let i = 0; i < string.length; i++) {
            
            if (string.split === abc) {
                console.log ('true');
                return true
            }

            if (string.split !== abc) {
                console.log ('false');
                return false
            }

            }

        }
            containsVowel('short');
        
        
        console.log('#6 piglatin')
        //Write a function called piglatin that takes a single string and returns the piglatin version of that string.
        //Hint: look into the split() function that you can call on strings.

        //Write a function called piglatin that takes a single string and returns the piglatin version of that string.

        //Hint: look into the split() function that you can call on strings.
        //pig is igpay

        //1. Remove beginning letter from word.
        //2. add beginning letter to end of remaining root.
        //3. repeat through all words.

        //** I know I need to use the splice function.  I wanted to use it like 
        //this video example where you can splice and replace at the same time.

        function piglatin(words) {

            for (let i = 0; i < words.length; i++) {
                let words = words.splice(0);
                console.log(words);
            }
        
        piglatin(pig);
        }

        
        console.log('#7 longestWord');
        
        //Write a function called longestWord that takes a single string and returns the longest word in the string.

        //Hint: look into the split() function that you can call on strings.
        
        //1.  Establish a single string.
        //2.  Use the split function to establish an array of words.
        //3.  Iterate over each split/word length to discover longest word.
        //4.  Return longest word.

        function longestWord(sentence) {

        //let sentence = "How did Trump ever get elected?";
        //let answer = sentence.split(" ");
        //console.log(answer);

            let string123 = sentence.split(" ");
            let longest = 0;
            let keeper = " ";

            for (let i = 0; i < string123.length; i++) {
            
                if  (string123.length > longest) {
                longest = string123[i];

                keeper = string123[i];

                }
                return keeper
            }
        }
        
        longestWord("How did Trump ever get elected?");
          
        console.log('#8 divisors');

        //Write a function called divisors that accepts a number 
        //and returns an array of all of the numbers that divide evenly into it.
        //1.  Establish a number.
        //2.  Determine all of the numbers that divide evenly into that number.
        //3.  Return an array of all the divisors. 
        functiondivisors {

        }

        console.log(#9 weave);
        //Write a function called weave() that accepts an input string and number. 
        //The function should return the string 
        //with every xth character replaced with an 'x'.

        //1.   Establish the string.
        //2.  Iterate over the string and remove every xth value in the string.
        //3.  Replace every xth character with x.

         function weave(string, two) {
            let freq = 0;

            for (let i = 0; i < string1.length; i++) {
                
        }
        
        console.log('#10 bonus');

        //Jeb eats out at restaurants all the time but is horrible at math. 
        //He decides to write a function called bonus() 
        //that accepts a single parameter (the cost of the meal), 
        //and should return the tip Jeb should give his waiter. 
        //Jeb uses two rules to calculate tips:

        //First he always tips 20% on the original bill.
        //He then rounds up to the nearest dollar. 
        //For example, if the total with tip is $22.78, he'd round up to $23.00.
    

    function bonus(cost) {
        
        function bonus(cost) {
        
            let total = ((cost * .20) + cost);

            let total2 = Math.ceil(total);
        
        console.log(total2);
        return total2;
}
    bonus(22.50)







