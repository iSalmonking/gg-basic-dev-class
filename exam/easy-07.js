// Easy-07: Find the Missing Number

/* Create a function that takes an array of numbers between 1 and 10 (excluding one number) 
and returns the missing number.
*/ 

function missingNum(arr) {
	array = arr.sort(function(a,b){
		return a-b});
	let a;
	for(let i = 0; i <= array.length; i++){
		if(array[i] != i+1) {
			a = i+1;
			break
		}
	}
	return a
}

// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]);
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);