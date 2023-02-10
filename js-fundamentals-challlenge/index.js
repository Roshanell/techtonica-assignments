// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

//input: num
// output boolean:
// asking - if numner os divisible by three - return true if not false;
function divisibleByThree(num) {
	if (num === 0) {
		return "This number is not divisible";
	} else if (num < 0) {
		return "please enter a positive interger";
	} else if (num % 3 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(divisibleByThree(3)); // true
console.log(divisibleByThree(8)); // false
console.log(divisibleByThree(0)); //this number is not divisible..
console.log(divisibleByThree(-4)); // please enter a positive interger geater than 0

/*
function divisibleByThreeSwitch(num) {
	switch (num) {
		case (num < 0):
			console.log ("This number is not divisible");
            break
		case (num === 0):
			return "please entera positive interget";
		case (num % 3 === 0):
			return true;
		default:
			false;
	}
}

console.log(divisibleByThreeSwitch(3)); // true
console.log(divisibleByThreeSwitch(8)); // false
console.log(divisibleByThreeSwitch(0)); //this number is not divisible..
console.log(divisibleByThreeSwitch(-4)); // please enter a positive interger geater than 0

returns undefined. Not sure why
*/

// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

//input: string
// return: num - number of char in string
//What is it asking- count through length of the string and then retrun that length

function characterCount(str) {
	if (typeof str != "string") {
		return "this is not a string";
	} else if (str.length === 0) {
		return "this string is empty";
	} else {
		return str.length;
	}
}

console.log(characterCount("hello")); // 5
console.log(characterCount("h3llo")); // 5
console.log(characterCount(3456)); // this is not a string
console.log(characterCount("")); // This string is empty
console.log(characterCount("Hello World")); //11

// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first  array. (ex: "a")

const arrOfNumbers = [1, 2, 3, 4, 5];

let firstItemInArr = arrOfNumbers[0];
console.log(firstItemInArr); // 1

let lastItemInArr = arrOfNumbers.pop();
console.log(lastItemInArr); // 5

arrOfNumbers.push(6);
console.log(arrOfNumbers); // 1,2,3,4,6;

let beginningOfArrOfNum = [["a", "b", "c"]];
let finalJoinedArr = beginningOfArrOfNum.concat(arrOfNumbers);
console.log(finalJoinedArr); //[["a","b","c"], 1,2,4,5]

let firstItemInFirstArr = finalJoinedArr[0][0];
console.log(firstItemInFirstArr);

// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

// input currentTime
// output minutes from minnight

//find current date
function minutesFromMidnight() {
	const hoursFromMidnight = new Date().getHours() * 60;
	const minutesFromMidnight = new Date().getMinutes();
	console.log(hoursFromMidnight, minutesFromMidnight);
	const totalMinutesFromMidnight = hoursFromMidnight + minutesFromMidnight;
	console.log(totalMinutesFromMidnight);
	return totalMinutesFromMidnight;
}

minutesFromMidnight();

//this is a change
