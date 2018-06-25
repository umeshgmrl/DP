/*Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

equalIsNot("This is not") → false
equalIsNot("This is notnot") → true
equalIsNot("noisxxnotyynotxisi") → true*/

const equalIsNot = str => {
	let isCount = 0,
		notCount = 0;

	for (var i = 0; i < str.length; i++) {
		str.substr(i, 3) == 'not' && notCount++;
		str.substr(i, 2) == 'is' && isCount++;
	}

	return isCount == notCount;
};
console.log(equalIsNot('This is not'));
console.log(equalIsNot('This is notnot'));
console.log(equalIsNot('noisxxnotyynotxisi'));
