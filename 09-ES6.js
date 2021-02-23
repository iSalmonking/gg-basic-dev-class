// JS ES6

// String

const words = "this is my class"
console.log(words.split(' ')); //Split ออกเป็น array โดยใช้ Space bar เป็นตัวแยก
console.log(words.trim()); // ตัด Space bar หน้าหลัง
console.log(words.replace(/i/g, 'a')); // regex regular expression

const pattern = /[a-zA-Z]/;
// const pattern = new RegExp();
'this'.match('a-zA-Z') ? console.log('Match') : console.log('Mismatch')
// ไปดูใน mdn เพิ่ม เพราะพี่เขายังสอนไม่ครบ การ match character
// ฝึกได้ที่ regexr หรือ copy จาก stackoverflow

// Array

const array = [1, 2, 3, 4, 5];
array.forEach((element, index, array) => {
    console.log(`${index} => ${element}`)
}) // เป็น loop แบบที่ไม่สามารถ break ได้

const newArray = array.map(element => element * 2);
console.log(newArray);
console.log(array.sort((a,b) => a - b)); // a-b เรียงจากมากไปน้อย b-a เรียงจากน้อยไปมาก
console.log(array,find(el => el === 2));
console.log(array.filter(el => el > 2)); // ถ้าจะใช้ คำสั่งนี้ก็ต้อง comment คำสั่ง sort ไปก่อน

const copiedArray = [...array, [7, 8, 9]]; // ... คือการเอา element ทั้งหมดมาต่อในระนาบเดียวกัน
console.log(copiedArray);

// Object
const profile = {
    firstname = "Salmon",
    lastname = "King",
    age = 10,
}
const newProfile = Object.assign({birthday: "20/20/2020"}, profile);
console.log(newProfile);
console.log({
    ...profile,
    firstname: "Trout", //สามารถเขียนทับได้
});