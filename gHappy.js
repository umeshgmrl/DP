/*We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

gHappy("xxggxx") → true
gHappy("xxgxx") → false
gHappy("xxggyygxx") → false*/

const gHappy = str => {
	for (let i = 1; i < str.length - 1; i++) {
		if (str[i] == 'g' && !(str[i - 1] == 'g' || str[i + 1] == 'g')) {
			return false;
		}
	}
	return true;
};

console.log(gHappy('xxggxx'));
console.log(gHappy('xxgxx'));
console.log(gHappy('xxggyygxx'));
