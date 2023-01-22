function numInStr(arr) { 
	const filteredArr = [];
	let pattern = /\d/g;
	
	for(var i = 0; i < arr.length; i++) {
		if (arr[i].match(pattern)){
			filteredArr.push(arr[i]);
		}
	} 
	return filteredArr;
}