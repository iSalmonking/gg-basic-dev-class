// 1
var readlineSync = require('readline-sync');

let A = readlineSync.questionFloat("What is your A?");
let B = readlineSync.questionFloat("What is your B?");
let C = readlineSync.questionFloat("What is your C?");
let m = readlineSync.questionFloat("What is your m?");

let Y;
if(m>5){
    Y = (A*m*2)+(B*m)+(C);
} else if(m=5){
    Y = (A*m*2)+(B*m)-(C);
} else{
    Y = (A*m*2)+(B*m);
}
console.log("Y = ",Y);

// 2 Calculating radius
var readlineSync = require('readline-sync');
let r = readlineSync.questionInt("What is the radius? ");

console.log((Math.pow(r,2))*Math.PI);

// 4 Converting Celsius to Fahrenheit
var readlineSync = require('readline-sync');
let c = readlineSync.questionInt("What is the Celsius? ");
console.log(((9/5)*c)+32)

// 5 Finding a sum and average (integer)
var readlineSync = require('readline-sync');
let A = readlineSync.questionInt("What is the first number? ");
let B = readlineSync.questionInt("What is the second number? ");
let C = readlineSync.questionInt("What is the third number? ");
let D = A+B+C
console.log("Your sum is ", D);
console.log("Your average is ", (D/3));


// 6 Finding a sum and average (float)
var readlineSync = require('readline-sync');
let A = readlineSync.questionFloat("What is the first number? ");
let B = readlineSync.questionFloat("What is the second number? ");
let C = readlineSync.questionFloat("What is the third number? ");
let D = A+B+C
console.log("Your sum is ", D);
console.log("Your average is ", (D/3));

// 7 Calculating an equation
const x, y;
109 = x + y;
y = x + 5;
console.log("Y = ", y);
console.log("X = ", x);

var sol = nerdamer.solveEquations('x^3+8=x^2+6','x');
console.log(sol.toString());

// 8 Equation
var readlineSync = require('readline-sync');
let c = readlineSync.questionInt("What is the Celsius? ");


