// Easy-04: Online Shopping

/*
Create a function that determines whether a shopping order is eligible for free shipping. 
An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
*/

function freeShipping(order) {
	const value = Object.values(order);
	let purchase = 0;
	for(let i = 0; i < value.length; i++) {
		purchase = purchase + value[i];
	}
	return purchase>=50;
}