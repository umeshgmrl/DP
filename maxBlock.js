/*Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

maxBlock("hoopla") → 2
maxBlock("abbCCCddBBBxx") → 3
maxBlock("") → 0*/

const maxBlock = str => {
	let maxBlockLength = 0;
	let count = 1;
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] == str[i]) {
			count++;
		} else {
			if (count > maxBlockLength) maxBlockLength = count;
			count = 1;
		}
	}
	return maxBlockLength;
};

console.log(maxBlock('hoopla'));
console.log(maxBlock('abbCCCddBBBxx'));
console.log(maxBlock(''));
