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

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three


//Function parameters Destructuring is often used to destructure objects parameters in functions.

function joinFirstLastName({ firstName, lastName }) { // we create firstName and lastName variables by destructuring person parameter
    return firstName + '-' + lastName;
  }
  
  const person1 = {
    firstName: "Samsuddin",
    lastName: "Ansari",
    age: 30,
    sex: "M"
  }
  console.log(joinFirstLastName(person1)); 
