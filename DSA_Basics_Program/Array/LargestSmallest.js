// Find the largest and smallest numbers in the array.

const numbers = [ 1,2,3,10,50,-10]
function findLarSmall (arr) {
    if(!Array.isArray(arr)) return "You should pass valid Array"
    if(arr.length === 0) return "Empty array"
    let largest = arr[0]
    let smallest = arr[0]
    for (let i =1 ; i <arr.length; i++){
        if(arr[i]> largest) largest = arr[i]
        if(arr[i] < smallest) smallest = arr[i]
    }
    return {largest, smallest}
}
const val = findLarSmall(numbers)
console.log(val)



//Method 2 Using Method
console.log(Math.min(...numbers))
console.log(Math.max(...numbers))


