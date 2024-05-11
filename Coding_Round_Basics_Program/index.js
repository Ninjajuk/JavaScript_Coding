//#01 Implement a function to reverse a string.

//Method 1 Function without using in-built method
function reverseString(inputString) {
    var reversedString = '';
        // Iterate through the characters of the input string in reverse order
    for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];                 // Append each character to the reversed string
    }
    return reversedString;
  }
  
  // Example usage:
  var originalString = "SAMSU";
  var reversedResult = reverseString(originalString);
  console.log(reversedResult);

  //Method 2 Inbuillt
  const reversedString = str => str.split('').reverse().join('');
  console.log(reverseString("ANSARI"))
