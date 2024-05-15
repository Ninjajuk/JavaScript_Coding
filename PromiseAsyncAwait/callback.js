  // Synchronous callback example 1
function callbackFunction(name) {
    console.log(`"Hello " ${name}`);
  }
  function outerFunction(callback) {
    let name = prompt("Please enter your name.");
    callback(name);
  }
  outerFunction(callbackFunction);
  //Example 2 starts here

  function add(a,b,callback){
    let sum=a+b
    callback(sum)
    
}
function displayResult(result){
    console.log(result)
}
add(10,10,displayResult)
  //Example 2 ends  here

//Synchronous Example 02
const numbers = [1, 2, 3, 4, 5];

// Synchronous callback function
function squareNumber(num) {
  console.log(num * num);
}

// Using forEach with a synchronous callback
numbers.forEach(squareNumber);

  


  //Example 01 Asynchronous callback example
function simulateAsyncRequest(callback) {
    console.log("Simulating an asynchronous request...");
    setTimeout(function () {
      console.log("Async request completed!");
      callback(); // Execute the callback function after the async operation
    }, 2000); // Simulate a 2-second delay
  }

  function asyncCallbackFunction() {
    console.log("Callback function executed after async request!");
  }
  
  // Call the function with an asynchronous callback
  simulateAsyncRequest(asyncCallbackFunction);

//Asynchronous Example 01


//Example 2 Asynchronous function simulating file reading
function readFileAsync(fileName, callback) {
    console.log(`Reading file: ${fileName}`);
    setTimeout(function () {
      const content = "File content goes here.";
      console.log("File read completed!");
      callback(content); // Pass the content to the callback
    }, 2000); // Simulate a 2-second delay
  }
  
  // Asynchronous callback function
  function processFileContent(content) {
    console.log(`Processing file content: ${content}`);
  }
  
  // Using the readFileAsync function with an asynchronous callback
  readFileAsync("example.txt", processFileContent);


  // Example 3  Asynchronous callback function for an event listener
function handleButtonClick() {
    console.log("Button clicked!");
  }
  
  // Adding an event listener with an asynchronous callback
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleButtonClick);
  