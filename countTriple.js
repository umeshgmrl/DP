/*We'll say that a "triple" in a string is a char appearing three times in a row. 
Return the number of triples in the given string. The triples may overlap.

countTriple("abcXXXabc") → 1
countTriple("xxxabyyyycd") → 3
countTriple("a") → 0*/

const countTriple = str => {
	let count = 0;
	for (var i = 1; i < str.length - 1; i++) {
		if (str[i - 1] == str[i] && str[i] == str[i + 1]) {
			count++;
		}
	}
	return count;
};

console.log(countTriple('abcXXXabc'));
console.log(countTriple('xxxabyyyycd'));
console.log(countTriple('a'));
