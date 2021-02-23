// Create array of number lenght = 10
//  Ask user to put V value in to scecific index
// operation put into index and shift other to the right
var readlineSync = require('readline-sync');

const array = [];
for(let i = 0; i<10 ; i++){
    const number = Math.round(Math.random() * 100);
    array.push(number);
}

const indexV =+ readlineSync.question('Put V into index');
if(indexV < 0 || indexV > array.length -1 ){
    console.log("Error can not find index");
    process.exit(1);
} 
console.log("Before: ", array);
// array[indexV] = "V"
console.log("After: ", array);

let temp;
let temp2;
for(let i = indexV; i< array.length-1; i++){
    temp2 = array[i+1];
    array[i+1] = temp;
    temp = temp2;
}
array[indexV] = "V"
console.log("After Shift: ", array);