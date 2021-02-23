// Easy-05: Get Sum of People's Budget

/*
Create the function that takes an array with objects 
and returns the sum of people's budgets.
*/

function getBudgets(arr) {
	let budget = 0;
	for(let i = 0; i < arr.length; i++){
		budget = budget + arr[i].budget;
	}
	return budget;
}