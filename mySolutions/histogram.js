function histogram(arr, char) { 
	var str = "";
	
	for( var i = 0; i < arr.length; i++ ) { 
		var x = arr[i] ; 
		if(i == arr.length - 1) {
	  str +=	char.repeat(x) ;
		}else {
			str +=	char.repeat(x) + "\n" ;
		}} 
   return str;
}