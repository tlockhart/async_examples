//executorFunction is a callback function, that runs automatically when the promise constructor is called.  It dictates how the promise gets settled or rejected and what data is returned.

//resolve is a callback function that takes one argument - it changes the promise's status from pending to fullfilled.  The promise's resolved value will be set to the argument passed into resolve().

//reject is a callback function that takes an error as argument.  It changes the promises state from pending to rejected.  The promise's rejected value will be set to the argument passed into reject().

// 1) Construct a function that returns the promise
const getLogData = (number, suffix) => {
  // 2) Console log number
  console.log(`Runs ${number}` + suffix);
  // 3) return a new promise inside the function, which contains the logic on how the promise is resolved
  return new Promise((resolve, reject) => {
    // random time between 1 and 100
    const randomTime = Math.floor(Math.random() * 100) + 1;
    // console.log("Random Time:", randomTime);

    //randomly generant a 0, or 1, from a random number between 0 and 1
    const dataReceived = Math.round(Math.random()) === 1 ? true : false;
    // console.log("Data Received:", dataReceived);
    setTimeout(() => {
      // 4) Set a status condition to settle the promise
      if (true) {
        // 5) wrap the results with the built in resolve callback
        resolve({ newNumber: number + 1 });
        // console.log("got the user");
        // if condition is false, invoke the reject callback with rejected value.
      } else {
        // 6) Wrap the failure results in the builtin reject callback
        reject(new Error("No data available"));
      }
    }, randomTime);
  });
};

// How to consume the results of the promise object once it settles?  Promise objects have a .then method, which indicates the next action.  The .then method has two parameters, that accept callback functions (Handlers).

// onFulfilled - The first handler, is a success handler, it should contain the logic for the promise resolving.
let onSuccess = (data) => {
  console.log("data:", data);
};

//onRejected - The second handler, is a failur handler, and it contains the logic for the promise rejecting.
let onFailure = (data) => {
  console.log("error:", data.message);
};

const startingValue = 1;
// 7a) OnSuccess and onFailure conditionInvoke the getLogData function and chain it to a .then method, because it returns a promise.
// const logData = getLogData(startingValue).then(onSuccess, onFailure);
// 7b Seperation of concerns chain the success and failure functions seperatly
// const logData = getLogData(startingValue).then(onSuccess).then(null, onFailure);
// 7C: Catch failure on .catch
// const logData = getLogData(startingValue).then(onSuccess).catch(onFailure);

// 8) How to make async tasks, which depend on each other, execute in order with promises:  composition: The process of chaining promises together, allows us to make a request to an asynchronous function and make another request with the results received.
const logData = getLogData(startingValue, "rst")
  .then((data1) => {
    return getLogData(data1.newNumber, "nd");
  })
  // 9) since .then() will return a promise with the same settled value as the promise it was called on, we can chain .then to return a previously settled promise value.
  .then((data2) => {
    return getLogData(data2.newNumber, "rd");
  })
  .then((data3) => {
    return getLogData(data3.newNumber, "rd");
  })
  .then((data4) => {
    return getLogData(data4.newNumber, "th");
  })
  .catch(onFailure);

// Promise will return Pending, if the promise has not settled yet
// console.log("Promise has not resolved yet:", logData);
