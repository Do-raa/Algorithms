function whichIsLarger(f, g) {
	if(f() > g()){
		return "f"; 
	} 
    else if(f() < g()){
		return "g";
	}else{
		return "neither";
	}
}