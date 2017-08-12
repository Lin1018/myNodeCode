arr = [1,4,5,7,3,2]
var compare = function(x,y){
	return x-y;
}
var swap = function(a,i,j){
	var t = a[i];
	a[i] = a[j];
	a[j] = t;
}

var bubbleSort = function (array) {
	for(var i=0; i<array.length-1; i++){
		for(var j=0; j<array.length-i-1; j++){
			if(compare(array[j],array[j+1])>0){
				swap(array,j,j+1);
			}
		}
	}
	return array;
};

var p = bubbleSort(arr)
console.log(p)