// Medium-05: Card Counting (BlackJack)

/*
In BlackJack, cards are counted with -1, 0, 1 values:
2, 3, 4, 5, 6 are counted as +1
7, 8, 9 are counted as 0
10, J, Q, K, A are counted as -1
Create a function that counts the number and returns it from the array of cards provided.
*/

function count(deck) {
	let a = 0;
	if(deck.length != 0){
			for(let i = 0; i < deck.length; i++) {
		let x;
		if(2 <= deck[i] && deck[i] <= 6) {
			x = 1;
		} else if(7 <= deck[i] && deck[i] <= 9) {
			x = 0;
		} else {
			x = -1;
		}a = a + x;
	} 
	} return a;
}

