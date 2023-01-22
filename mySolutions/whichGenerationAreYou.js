function generation(x, y) {
	var result =""; 
        if(x == -1 && y == 'm'){
				return result = "father";
		}
		else if(x == -1 && y == 'f'){
				return	result = "mother"; 
		} 
	    else if(x == -2 && y == 'm'){
			    return result = "grandfather"; 
		} 
			
		else if(x == -2 && y == 'f'){
			    return result = "grandmother";
		} 
		else if(x == -3 && y == 'm'){
			    return 	result = "great grandfather"; 
		} 
		else if(x == -3 && y == 'f'){
			    return 	result = "great grandmother";
		} 
		else if( x == 0){
			    return result = "me!";
		}
		else if(x == 1 && y == 'm'){
			    return result = "son";
		} 
	    else if(x == 1 && y == 'f'){
		        return result = "daughter"; 
	    }
	    else if(x == 2 && y == 'm'){
		        return result = "grandson";
	    } 
	    else if(x == 2 && y == 'f'){
		        return result = "granddaughter";
	    }
	    else if(x == 3 && y == 'm'){
		        return result = "great grandson";
	    } 
	    else if(x == 3 && y == 'f'){
		        return result = "great granddaughter"; 
	    }  
}