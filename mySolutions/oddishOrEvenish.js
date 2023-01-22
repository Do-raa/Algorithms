function oddishOrEvenish(num) {
	const arrayOfDigits = Array.from(String(num), Number);
	let total = arrayOfDigits.reduce(
        ( previousValue, currentValue ) => previousValue + currentValue, 0
    ); 
	return total % 2 == 0 ? "Evenish": "Oddish";
}