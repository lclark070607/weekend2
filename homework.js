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

    let vowel = 'a' || 'e'

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
        containsVowel('eat');
    









