//Destructuring Starts here

const num=[1,2]
const[a,b]=num



// Nested Object Destructuring
const person = {
    name: 'Samsu',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
const {name, hobbies: {read, playGame}} = person;

console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true