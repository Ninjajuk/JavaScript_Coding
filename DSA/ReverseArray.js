



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
  

