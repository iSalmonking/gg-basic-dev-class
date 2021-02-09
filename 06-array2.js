// const array = [1, 2, -3, 10, 5];

// let max = Number.MIN_SAFE_INTEGER; // Start from minimum number = Number.MIN_VALUE = 5e-324
// let min = Number.MAX_SAFE_INTEGER;
// for(i=0; i<array.length; i++){
//     if(max < array[i]){
//         max = array[i];
//     }
// }

// for(i=0; i<array.length; i++){
//     if(min > array[i]){
//         min = array[i];
//     }
// }

// console.log("max from array ", max);
// console.log("min from array ", min);

// Swapping
// const array = [10,200, 300];
// // Swap the first and last member of array

// console.log("Before", array);
// // Wrong answer
// // array[2] = array[0];
// // array[0] = array[2];

// // Right answer
// let temp = array[0];
// array[0] = array[2];
// array[2] = temp;
// console.log("After", array);

// Array Equallity
const aSchools = [100, 200, 300];
const bSchools = [300, 500, 700];
const cSchools = aSchools;
cSchools[1] = 1000; //เปลี่ยนค่า aSchool ด้วย
const dSchools = [100, 200, 300];
const eSchools = [...bSchools]; // Cloning
eSchools[1] = 1000; //ไม่เปลี่ยนค่า bschool ด้วย


console.log("aSchool: ", aSchools);
console.log("bSchool: ", bSchools);
console.log("cSchool: ", cSchools);
console.log("dSchool: ", dSchools);
console.log("eSchool: ", eSchools);

if(cSchools === aSchools){
    console.log("C and A are equal");
}else{
    console.log("C and A are not equal");
}

if(dSchools === aSchools){
    console.log("D and A are equal");
}else{
    console.log("D and A are not equal");
}

// Why it is not equal
// case C-A
// C reference/ pointer A
// จะเปรียบได้ว่า กล่อง C คือ กล่อง A
// case D-A
// D กับ A เปรียบเทียบกันไม่ได้ เนื่องจากมันก็เหมือนกับกล่องคนละกล่องกัน
// Solution 1: ต้องใช้ Loop compare ทีละคัวเลย
// Solution 2: ค่อยรู้ที่หลัง

