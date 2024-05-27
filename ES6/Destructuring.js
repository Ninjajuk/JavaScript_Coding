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

console.log(name); 
console.log(read); 
console.log(playGame);

//Example 2
const employees = {
  engineers: {
      0: {
          id: 1,
          fullname: "Samsuddin Asnari",
          occupation: "Back-end Engineer"
      },
      1: {
          id: 2,
          fullname: "Ajuk Gida",
          occupation: "Front-end Engineer"
      },
  }
};

const {
  engineers: {
      1: {
          id,
          fullname,
          occupation,
      },
  },
} = employees;

// console.log(id);
console.log(fullname); 
// console.log(occupation); 
// Destructure fullname and occupation for each engineer and create an array
const engineerDetails = Object.values(employees.engineers).map(({ fullname, occupation }) => ({
  fullname,
  occupation
}));

console.log(engineerDetails);

//Example 03
var data = {
  title: "title1",
  bar: "asdf",
  innerData: [
     {
      title: "inner-title1",
      foo: "asdf"
     },
     {
      title: "inner-title2",
      foo: "asdf"
     }
  ]
};

var innerData = JSON.parse(JSON.stringify([data, ...data.innerData], ["title"]))
                                                                    
console.log(innerData);
//Example 3 ends above
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
