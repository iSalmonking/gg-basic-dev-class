// Medium-02: Finding Nemo

/*
You're given a string of words. You need to find the word "Nemo",
and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
If you can't find Nemo, return "I can't find Nemo :(".
*/

function findNemo(sentence) {
	let n = sentence.split(" ");
	let a = 0;
	for(let i = 0; i < n.length; i++) {
		if(n[i] == "Nemo"){
			a = i+1;
			break;
		}
	}
	if(a != 0) {
		return `I found Nemo at ${a}!`
	}else {
		return "I can't find Nemo :("
	}
}
