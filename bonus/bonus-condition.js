var readlineSync = require('readline-sync');
let a = readlineSync.questionFloat("How many hours? ");
let b = readlineSync.questionFloat("How many minutes? ");

b = Math.ceil(b/60);

if((a+b)<=1){
    console.log("Parking fee is free!");
} else{
    console.log("Parking fee : ", (30*(a+b-1)));
}

