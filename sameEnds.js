/*Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping.
For example, sameEnds("abXab") is "ab".


sameEnds("abXYab") → "ab"
sameEnds("abcXYabc") → "abc"
sameEnds("xx") → "x"
sameEnds("xxx") → "x"*/
const sameEnds = str => {
	let halfLength = Math.floor(str.length / 2);
	console.log('halfLength', halfLength);
	for (let i = 0; i < halfLength; i++) {
		console.log(str.substring(0, halfLength - i), '__', str.substring(halfLength + i));
		if (str.substring(0, halfLength - i) == str.substring(halfLength + i)) {
			return str.substring(0, halfLength - i);
		}
	}
	return 'ok';
};

console.log(sameEnds('Hello!:and:Hello!'));
