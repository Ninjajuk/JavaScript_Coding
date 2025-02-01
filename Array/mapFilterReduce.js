//Map
//Example 1 create new array without modifying existing  array
const num=[2,1,3,5,4]
console.log(num.map((i)=>i*10))


//Example 2 We can modify the existing array at a partivular index only
const indexToModify = 2; // Index you want to modify
const modifiedArray = num.map((value, index) => index === indexToModify ? value * 10 : value);

console.log(modifiedArray);
console.log(num);





//Filter method
//Example 1 filter the array after deleting the item based on condtions
const filteredArray = num.filter((value, index) => index !== indexToFilter);

console.log(filteredArray); // Output: [2, 1, 5, 4]

//Example 2 Filter with includes gives repetition of an array
function getNames() {
    const namearr = ['SAMSU', 'ANSARI', 'AJUK', 'GIDA','AJUK'];
    const namesIncluded = namearr.filter(name => name.includes('AJUK'));

    return namesIncluded.length > 0 ? namesIncluded : null;
}

const result = getNames();
console.log(result);