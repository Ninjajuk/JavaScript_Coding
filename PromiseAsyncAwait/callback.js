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


//Example 2 Call Back Hell Pyramid of doom
function firstFunction(callback) {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
    callback();
  }, 1000);
}

function secondFunction(callback) {
  console.log("Second function called");
  callback();
}

function thirdFunction(callback) {
  console.log("Third function called");
  callback();
}

function fourthFunction() {
  console.log("Fourth function called");
}

// Chaining the functions correctly using callbacks
firstFunction(function() {
  secondFunction(function() {
    thirdFunction(function() {
      fourthFunction();
    });
  });
});


  // Example 3  Asynchronous callback function for an event listener
function handleButtonClick() {
    console.log("Button clicked!");
  }
  
  // Adding an event listener with an asynchronous callback
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleButtonClick);
  