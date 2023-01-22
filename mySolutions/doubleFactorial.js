function doubleFactorial(num) {
	return num >= -1 && num > 0 ? num * doubleFactorial(num-2) : 1;
}