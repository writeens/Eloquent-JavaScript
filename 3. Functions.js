/*Minimum
Write a function min that takes two arguments and returns their minimum*/

//My Solution
function min (x, y) {
	if (x < y) {
		return x;
	} else if (y < x) {
		return y;
	}
};

console.log(min(0,-1));

/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to check whether it’s divisible by
two. Here’s another way to defne whether a positive whole number is
even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Defne a recursive function isEven corresponding to this description. The
function should accept a number parameter and return a Boolean.*/

//My Solution
function isEven (number) {
	if (number === 0) {
		return true;
	} else if (number === 1) {
		return false;
	} else if (number < 0) {
		//This converts the negative sign to a positive one before recursion.
		number *= -1;
		return isEven(number-2);
	}
	return isEven(number-2);
}

console.log(isEven(-8));

/*Bean Counting
You can get the Nth character, or letter, from a string by writing "
string".charAt(N), similar to how you get its length with "s".length. The
returned value will be a string containing only one character (for example, "b"). The frst character has position zero, which causes the last one
to be found at position string.length - 1. In other words, a two-character
string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
are in the string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be
counted (rather than counting only uppercase “B” characters). Rewrite
countBs to make use of this new function.*/

//My Solution
function countBs (myString, myChar) {
	return countChar(myString, myChar);
}

function countChar (countString, countChar) {
	var count = 0;
	for (var i = 0; i < countString.length; i++) {
		if (countString.charAt(i) === countChar) {
			count++;
		};
	};
	return count;
};

console.log(countBs("Sssssshhss", "h"));