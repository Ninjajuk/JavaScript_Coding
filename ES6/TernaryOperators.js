// syntax:->  condition ? expressionIfTrue : expressionIfFalse;

//Example 1
const age = 25;
const isAdult = age >= 18 ? "Adult" : age >= 13 ? "Teenager" :age >= 5 ?"Child": "Baby";
console.log(isAdult);

//Example 02 Nested Ternary Operator
let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
console.log(grade); // Output: B

