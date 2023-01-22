function stockPicker(arr) {
    const profits = []; 
    var maxProfit ;

    while (arr.length > 1) { 
        var x = arr[0];
        arr.shift(x);
        maxProfit = Math.max(...arr) 
        if(maxProfit > x){ 
            var profit = maxProfit - x ;
            profits.push(profit);
        } 
    }
    var max = Math.max(...profits);
    return max > 0 ? max :  -1;
}