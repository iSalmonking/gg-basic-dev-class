// Easy-03: Get Student Names

/*
Create a function that takes an object of student names 
and returns an array of student names in alphabetical order.
*/

function getStudentNames(students) {
	const value = Object.values(students);
	return value.sort();
}