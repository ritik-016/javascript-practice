const { log } = require("console");

let a = "Ritik";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a.length)


let real_name = "Ritik"
let friend = "Parit"

console.log("My name is " + real_name + " and my friend name is " + friend)
console.log(`My name is ${real_name} and my friend name is ${friend}`)

let b = "Gargi"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,3))
console.log(b.slice(1))


console.log(b.replace("gargi", "gargi manjera"))
console.log(b.concat(" love ", a))
