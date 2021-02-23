// Very Easy-04: Integer in Range?

/*
Create a function that validates whether a number n is within the bounds of lower and upper. 
Return false if n is not an integer.
*/

function intWithinBounds(n, lower, upper) {
	if(n == parseInt(n)){
		if(n < upper && n >= lower) {
			return (true);
		}else {
			return (false);
		}
	}else {
		return (false)
	}
}

// intWithinBounds(3, 1, 9);
// intWithinBounds(6, 1, 6);
// intWithinBounds(4.5, 3, 8);