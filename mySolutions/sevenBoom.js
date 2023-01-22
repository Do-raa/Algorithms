sevenBoom = arr => {
	var str = arr.toString(); 
	return /7/.test(str) ? "Boom!": "there is no 7 in the array";
}