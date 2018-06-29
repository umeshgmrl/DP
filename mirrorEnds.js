/*Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

mirrorEnds("abXYZba") → "ab"
mirrorEnds("abca") → "a"
mirrorEnds("aba") → "aba"*/

const mirrorEnds = str => {
	let lastIndex = str.length - 1;
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (
			str.substring(0, i + 1) ==
			str
				.substring(lastIndex - i)
				.split('')
				.reverse()
				.join('')
		) {
			result = str.substring(0, i + 1);
		} else {
			return result;
		}
	}
	return result;
};

console.log(mirrorEnds('abXYZba'));
console.log(mirrorEnds('abca'));
console.log(mirrorEnds('aba'));
