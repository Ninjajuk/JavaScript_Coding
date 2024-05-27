
Array.prototype.sam='Samsu'
const num1=[1,2,5,6]
const num=[1,2,3,4,5]
for (let x in num){
    console.log(x)
}
const fruits1 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

const similarObjects = [
    { name: 'Alice', age: 30, city: 'Los Angeles', isAdmin: true, isActive: false, dateJoined: new Date('2022-11-10') },
    { name: 'Bob', age: 28, city: 'San Francisco', isAdmin: false, isActive: true, dateJoined: new Date('2022-08-25') },
    { name: 'Charlie', age: 35, city: 'Chicago', isAdmin: true, isActive: true, dateJoined: new Date('2022-09-18') },
    { name: 'Diana', age: 27, city: 'Miami', isAdmin: false, isActive: true, dateJoined: new Date('2022-12-03') },
    { name: 'Edward', age: 32, city: 'Seattle', isAdmin: true, isActive: false, dateJoined: new Date('2022-07-22') },
    { name: 'Fiona', age: 29, city: 'Boston', isAdmin: false, isActive: true, dateJoined: new Date('2022-10-05') },
    { name: 'George', age: 31, city: 'Denver', isAdmin: true, isActive: true, dateJoined: new Date('2022-06-15') },
    { name: 'Hannah', age: 26, city: 'Austin', isAdmin: false, isActive: true, dateJoined: new Date('2022-05-08') },
    { name: 'Ian', age: 34, city: 'Portland', isAdmin: true, isActive: false, dateJoined: new Date('2022-08-30') },
    { name: 'Jessica', age: 33, city: 'Philadelphia', isAdmin: false, isActive: true, dateJoined: new Date('2022-11-28') }
  ];
  const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  console.log(similarObjects);
  
  
  console.log(mixedArray);

  //Array Methods

  //isArray() checks is if it is array or not
  console.log(Array.isArray(similarObjects))


  // map(), filter(),reduce()

  //some(), at(), with(), of()
  const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
  
  console.log(array.at(-1))

  //with() => returns new array with new item added at particular index. does not change the original array
  console.log(array.with(2,6))

  //Array.of() =>The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

  // includes()  =>The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  //Syntax =>  includes(searchElement);includes(searchElement, fromIndex)


  console.log(array.includes(5))

  // concat() => The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//find()=>The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.


//findIndex() =>The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// push()=>
// pop()=>
// unshift()=>
//shift()=>

//slice()=>
//splice()=>

  const user=`[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },]`
    const parseduser=JSON.parse(user)
    console.log(parseduser)
