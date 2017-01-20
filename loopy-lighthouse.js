for (var i = 100; i <= 200; i++) {
	if (i % 3 === 0 && i % 4 === 0) {
		// filters the numbers that are multiples of 3 and 4 first
		console.log("LoopyLighthouse");
	} else if (i % 3 === 0) {
		// filters numbers that are multiples of only 3
		console.log("Loopy");
	} else if (i % 4 === 0) {
		// filters numbers that are multiples of 4 only
		console.log("Lighthouse");
	} else {
		// and finally, logs all other numbers
		console.log(i);
	}
}