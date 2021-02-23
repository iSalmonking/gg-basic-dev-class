let salmonName = "Salmon";
let salmonLastname = "King";
let salmonAge = "10";
let salmonHeight = "20";
let salmonProfile = ["Salmon", "King", "10", "20"];

let salmonProfiles = {
    firstname: "Salmon",
    lastname: "Salmon",
    age: "10",
    height: "20",
    address: {
        country: "Norway",
        city: "Ocean"
    }
}
// if you want to use loop use object in array

console.log(`Salmon Age ${salmonProfiles.age} years old.`);
console.log(`Salmon live in ${salmonProfiles.address.country} in ${salmonProfiles.address.city}`);
console.log(salmonProfiles);