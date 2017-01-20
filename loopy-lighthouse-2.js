function loopyLighthouse(range, multiples, words) {

	for (var i = range[0]; i <= range[1]; i++) {

		var range;
		var multiples;
		var words;

		if (i % multiples[0] === 0 && i % multiples[1] === 0) {
			// filters the numbers that are multiples of both numbers within the multiples array
			console.log("LoopyLighthouse");
		} else if (i % multiples[0] === 0) {
			// filters numbers that are multiples of only the first number passed into the multiples parameter
			// then console logs the first word passed into the words param
			console.log(words[0]);
		} else if (i % multiples[1] === 0) {
			// filters numbers that are multiples of onlyl the second number passed into the multiples parameter
			// then console logs the second word passed into the words param
			console.log(words[1]);
		} else {
			// and finally, logs all other numbers
			console.log(i);
		}
	}
} 

loopyLighthouse([100, 200], [2, 5], ["Batty", "Beacon"]);