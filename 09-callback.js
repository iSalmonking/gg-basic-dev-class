// Callback in JS

// Asynchronus || Synchronus
setTimeout(() => {
    console.log("Salmon");
}, 3*1000); // กำหนด delay เป็น millisec

console.log("Tuna");

setTimeout(() => {
    console.log("Trout");
}, 2*1000);

console.log("Whale");

// สามารถเอา setTimeout() มาซ้อนกันได้เพื่อที่จะทำให้มีการทำเป็น ลำดับขั้นตอนได้ แต่มันรก ทำไงดี ?
// Function Promise จด ไม่ทัน ไปดูโค้ดใน Github || Ipad scrcap.