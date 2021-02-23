// Medium-01: Find the Largest Numbers in a Group of Arrays

/*
Create a function that takes an array of arrays with numbers. 
Return a new (single) array with the largest numbers of each.
*/

function findLargestNums(arr) {
	let b = [];
	for(let i = 0; i < arr.length; i++) {
		let a = arr[i][0];
		for(let j = 0; j < arr[i].length; j++){
			if(arr[i][j] > a) {
				a = arr[i][j];
			}
		}b.push(a);
	}return b
}