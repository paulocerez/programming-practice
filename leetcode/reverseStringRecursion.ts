function reverseString(word: string): string {
	// base case
	if (word === "") {
		return word;
	} else {
		console.log(reverseString(word.substring(1)) + word[0])
		return reverseString(word.substring(1)) + word[0];
	}
}

console.log(reverseString("Paulo"));