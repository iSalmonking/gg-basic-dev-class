// Easy-10: Error Messages

/*
Create a function that takes a number as an argument and returns the appropriate error message. 
You should do this without using the switch or if statements.
The input error will be 1 to 5
For any other value, return 101 (you can use an if statment here).
*/

function error(n) {
	if(n == parseInt(n) && n >= 1 && n <= 5){
		let display = ["Check the fan: e1", "Emergency stop: e2", "Pump Error: e3", "c: e4", "Temperature Sensor Error: e5"]
		return display[n-1]
	} else {
		return 101
	}
}