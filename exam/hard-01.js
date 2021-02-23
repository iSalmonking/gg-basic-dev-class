// Hard-01: Tower of Hanoi

/*
There are three towers. 
The objective of the game is to move all the disks over to tower #3, 
but you can't place a larger disk onto a smaller disk.
*/

function towerHanoi(discs) {
	let a = 0;
	for(let i = 0; i < discs; i++) {
		a = (2*a) + 1;
	} return a;
}