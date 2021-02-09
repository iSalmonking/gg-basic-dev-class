// Condition เงื่อนไข หรือการเปรียบเทียบ ผลลัพธ์เป็น True และ False
// การคำนวน
// การทำซ้ำ
// < <= > >= == === !=
// ตัวเชื่อม || &&


console.log(5<10);
console.log(5==10);
console.log(5!=10);

console.log("1 == 1 : ",1 == 1); // equal
console.log("1 == 1 : ",'1' == 1); // equal
console.log("1 === 1 : ",'1' === 1); // deep equal
console.log("1 === 1 : ",1 !== 1); // deep equal

console.log("true || true : ", true||true);
console.log("true || false : ", true||false);
console.log("false || false : ", false||false); // for || focus only falsy condition

console.log("true && true : ", true&&true);
console.log("true && false : ", true&&false);
console.log("false && false : ", false&&false); // for && focus only truely condition

//  Real situation
if(/*condition*/ true||false){
    // Correct condition
} else{
    // False condition
}

if(5>10){
    console.log("True");
}else{
    console.log("False");
}

// แสดงผลคนที่มีค่ามากกว่า
let salmon = 200
let tuna = 200
if(salmon>tuna){
    console.log("Salmon is Richer");
}else if(tuna>salmon){
    console.log("Tuna is Richer");
}else if(tuna==salmon){
    console.log("Equally Rich");
}
// ไม่ควรใส่ else if(tuna--salmon) เพราะมันเหลือแค่ case เดียว ใช้แค่ else ก็พอ

//Switch Case
const weather = "";
switch(weather){
    case 'RAIN' :
         console.log('Today is raining');
         break;
    case 'SUNNY' :
        console.log('Today is sunny');
        break;
    case 'STORM' :
        console.log('Today is storm');
        break;
    default:
        console.log("I don't know");
}


// เขียนโปรแกรมคำนวนเกรด
// Import package มาใช้งาน readline-sync

var readlineSync = require('readline-sync');

let point = readlineSync.question("What is your point?");
let grade;
if(point>=80 && point<=100){
    grade = "A";
} else if(point>=70 && point<80){
    grade = "B";
} else if(grade>=60 && grade<70){
    grade ="C";
} else if(point>=50 && grade<60){
    grade = "D";
} else if(point>=0 && grade<50){
    grade = "F";
} else{
    grade = ""
}

if (grade===""){
    console.log("Invalid")
} else{
    console.log("Your grade is ", grade);
}

