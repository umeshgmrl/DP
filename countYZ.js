/* Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

countYZ("fez day") → 2
countYZ("day fez") → 2
countYZ("day fyyyz") → 2 */

const endsWithChar = (str, ch) => str.charAt(str.length - 1) == ch;

const countYZ = str => {
	str = str.split(' ');
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (endsWithChar(str[i], 'z') || endsWithChar(str[i], 'y')) {
			count++;
		}
	}
	return count;
};
console.log(countYZ('fez day'));
console.log(countYZ('day fez'));
console.log(countYZ('day fyyyz'));
