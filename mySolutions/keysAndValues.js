function keysAndValues(obj) {
	let arr1 = [] 
	let arr2 = []
	for (const [key, value] of Object.entries(obj)) {
        arr1.push(key); 
		arr2.push(value);
    } 
	return [arr1, arr2]
}