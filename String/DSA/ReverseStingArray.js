
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

  
  function reverseArray(inputArray) {
    var length = inputArray.length;
    var lastIndex = length - 1;
    var middleIndex = Math.floor(length / 2);
  
    for (var i = 0; i < middleIndex; i++) {
      // Swap elements from the beginning with their corresponding elements from the end
      var temp = inputArray[i];
      inputArray[i] = inputArray[lastIndex - i];
      inputArray[lastIndex - i] = temp;
    }
  
    return inputArray;
  }
  
  // Example usage:
  var originalArray = [1, 2, 3, 4, 5];
  var reversedArray = reverseArray(originalArray);
  console.log(reversedArray);
  
  