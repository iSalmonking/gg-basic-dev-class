// Easy-09: Convert a Number to Base-2

/* Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128. 
*/

function binary(decimal) {
	let a;
	let b = 0;
	for(let i = 0; i <= 10; i++) {
		if(decimal < 2**(i+1)) {
			a = i
            // console.log(a)
			break
		}
	}
	for(let j = 0; j <= a; j++) {
		let x;
		x = (Math.floor(decimal/(2**j)))%(2)
        // console.log("x = ", x)
		b = b + x*(10**j)
	}
    // console.log(b)
	return b.toString();
}


