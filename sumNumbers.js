/*Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)


sumNumbers("abc123xyz") → 123
sumNumbers("aa11b33") → 44
sumNumbers("7 11") → 18*/
const isNumber = str => !isNaN(str);
const sumNumbers = str => {
	let num = '';
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		if (isNumber(str[i])) {
			num += str[i];
		} else {
			sum += parseInt(num) || 0;
			num = '';
		}
	}
	sum += parseInt(num);
	return sum;
};

console.log(sumNumbers('abc123xyz'));
console.log(sumNumbers('aa11b33'));
console.log(sumNumbers('7 11'));
