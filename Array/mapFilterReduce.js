//Map
//Example 1 create new array withput modifying existing  array
const num=[2,1,3,5,4]
console.log(num.map((i)=>i*10))


//Example 2 We can mpdify the existing array at a partivular index only
const indexToModify = 2; // Index you want to modify
const modifiedArray = num.map((value, index) => index === indexToModify ? value * 10 : value);

console.log(modifiedArray);
console.log(num);