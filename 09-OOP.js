// OOP (Object oriented programming)
// การเขียนโปรแกรมโดยใช้วัตถุ เหมาะสำหรับทุกงานเพราะเราสร้างตึกคนเดียวไม่ได้

// class -> attribute(static) + method(action)

// Attribute = hair, face, arm..
// Method = running, sleeping, walking..
// Capital letter for object name

// Normally 1 file 1 object แล้วก็ export และ import เข้ามาเหมือนการ import fuction ธรรมดา
// ในไฟล์นี้ไม่ได้แยก Student กับ Person แต่จริงๆควรแยกแล้วก็ import export ตามปกติ

class Person{
    name;
    age;
    hairColor;
    gender;

    // การสร้าง Object
    constructor(name, age, hairColor, gender){
        this.name = name; //กำหนด Default value ค่าเริ่มต้น
        this.age = age;
        this.hairColor = hairColor;
        this.gender = gender;
    }

    walk(){
        console.log(`${this.name} is walking`)
    }

    speak(word){
        // const name = ""; name นี้คือ name ที่อยู่ใน function speak
        console.log(`${this.name} said "${word}"`) // name นี้คือ name ที่อยู่ใน class person
    }
}

// การใช้งาน
const salmon = new Person('Salmon', 18, 'White', 'Male');
const tuna = new Person('Tuna', 10, 'Grey', 'Female')
console.log(salmon.name);
console.log(salmon.age);

salmon.speak("Hello");
salmon.walk();

tuna.speak("Hello");

// การ Inherit : Person -> Student // Teacher
// ทั้งสองอันเป็น Person เหมือนกัน แต่มีความแต่ต่างที่บางอย่างเช่น Age 

class Student extends Person{
    job;
    constructor(name, age, hairColor, gender){
        super(); //ต้องเรียก attribute ของ class หลักไว้
        this.name = name; //กำหนด Default value ค่าเริ่มต้น
        this.age = age;
        this.hairColor = hairColor;
        this.gender = gender;
        this.job = 'Student'
    }

    learn(subject) {
        console.log(`${this.name} is learning ${subject}`);
    }

    // Override method function walk is repeated
    walk(distance) {
        console.log(`${this.name} is walking ${distance} m.`)
    }
}


const trout = new Student('trout', 4, 'White', 'Male');
trout.learn("math");
trout.walk(500);

salmon.walk(500);

salmon.job = 'Teacher' // การแก้ไขตัวแปรภายใน Object

// Encapsulation การปกป้องตัว Object 
// - public = แก้ได้
// - private = แก้ไม่ได้
// - protect = แก้ได้เฉพาะ class ลูกที่ถูก extended ออกมา
//  Javascript ไม่มีกลไกการ encapsulation เลยมีการใช้ _ ในการบ่งบอกว่าเป็น Private รู้ๆกันเองว่าห้ามแก้

// class Person{
//     public name;
//     private age;
//     protect hairColor;
