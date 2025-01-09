// what is output of the below code

// //Example #01  
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);


// //Example 02
const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(numbers);

// //Example 03
var of = ["of"];
for (var of of of) {
  console.log(of);
}


//Example 01
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

//Example 02
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}
console.log(foo(), typeof x, typeof y);

//Example 03
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();

// Example 04
console.log(0.1 + 0.2 === 0.3);

//Example 05 
/*
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
*/

//Example 06
function foo() {
  return;
  {
    message: "Hello World";
  }
}
console.log(foo());

//Example 07
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

//Example 08
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);

//Example 09

const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());

//Example 10
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

//Example 11
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);

//Example 12
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);

//Example 13
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));

//Example 14
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");

//Example 15
console.log(Math.max());

//Example #16  on Closures

for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
