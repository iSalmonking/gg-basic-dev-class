// Easy-02: Outlier Number

/*
Given an array of either entirely odd integers or entirely even integers 
except for a single Outlier Number. 
Create a function to return this number.
*/

function outlierNumber(arr) {
	let arrEven = [];
	let arrOdd = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i]/2 == parseInt(arr[i]/2)){
			arrEven.push(arr[i]);
		}else {
			arrOdd.push(arr[i]);
		}
	}
	if(arrOdd.length == 1){
		return(arrOdd[0]);
	}else {
		return(arrEven[0]);
	}
}

// let a = outlierNumber([1, 2, 3]);
// console.log(a);
// let b = outlierNumber([4, 1, 3, 5, 9]);
// console.log(b);