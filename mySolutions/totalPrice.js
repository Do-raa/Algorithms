getTotalPrice = groceries =>{

	var totalPrice = 0; 
	for( var i = 0; i < groceries.length; i++){
		totalPrice += groceries[i].price * groceries[i].quantity;
	} 
	return parseFloat(totalPrice.toFixed(1));
}