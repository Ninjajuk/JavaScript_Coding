 const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4]
 function removeAllFaslyValue(arr) {
    const unique = []
   for(let i =0 ; i < arr.length ; i++){
       if(arr[i]) unique.push(arr[i])
   }
   return unique
}
console.log(removeAllFaslyValue(array))