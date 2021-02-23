// Easy-01: Positive Count / Negative Sum

/*
Create a function that takes an array of positive and negative numbers. 
Return an array where the first element is the count of positive numbers 
and the second element is the sum of negative numbers.
*/

function countPosSumNeg(arr) {
	let pos = 0;
	let neg = 0;
	if(arr.length == 0) {
		return [];
	} else {
		for(let i = 0; i < arr.length; i++){
			if(arr[i] > 0){
			pos++;
			}else {
				neg = neg+arr[i];
			}
		}
	}
	return [pos,neg];
}