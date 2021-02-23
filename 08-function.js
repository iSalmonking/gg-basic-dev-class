// Function -> Reuse code

module.exports = {
    fish,
    sum
}

// Void function
function name (argument1, argument2){
    console.log(`${argument1} , ${argument2}`);
}
name("Salmon", "Tuna");

function fish (){
    console.log("Trout")
}
fish()

// Return function
const total = sum(1, 2);
console.log("Total: ", total);

function sum(a,b){
    return a + b;
}
