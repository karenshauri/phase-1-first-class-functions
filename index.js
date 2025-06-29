// 1. Function that receives and calls a callback function
function receivesAFunction(callback) {
  // Call the callback function that was passed in
  callback();
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  // Define and return a named function
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  // Return an anonymous function directly
  return function() {
    console.log("I'm an anonymous function!");
  };
}