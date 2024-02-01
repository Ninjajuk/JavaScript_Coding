
Array.prototype.sam='Samsu'

const num=[1,2,3,4,5]
for (let x in num){
    console.log(x)
}
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

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
