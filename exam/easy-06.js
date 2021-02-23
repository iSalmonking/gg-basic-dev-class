// Easy-06: Count Ones in a 2D Array

/*
Create a function to count the number of 1s in a 2D array.
*/

function countOnes(matrix) {
	let array = [];
	let a = 0;
	for(let i = 0; i < matrix.length; i++){
		array = array.concat(matrix[i]);
	}
	for(let j = 0; j < array.length; j++){
		if(array[j] == 1){
			a++;
		}
	}
	return a
}