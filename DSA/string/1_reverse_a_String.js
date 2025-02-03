
function reverseString(inputString) {
    var reversedString = '';
  
    // Iterate through the characters of the input string in reverse order
    for (var i = inputString.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
      reversedString += inputString[i];
    }
    return reversedString;
  }
  
  // Example usage:
  var originalString = "SAMSU";
  var reversedResult = reverseString(originalString);
  console.log(reversedResult);


  //Method 1   Using Array Methods:
// You can convert the string to an array, reverse the array, and then join it back into a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

//Method 2 
function reverseString(str) {
    return Array.from(str).reverse().join('');
}