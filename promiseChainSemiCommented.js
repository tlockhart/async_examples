// 1) Construct an async function, that returns the promise
const getLogData = (number, suffix) => {
  // 2) Console log number
  console.log(`Runs ${number}` + suffix);
  // 3) return a new promise inside the function, which determines how the promise is settled
  return new Promise((resolve, reject) => {
    // random time between 1 and 100
    const randomTime = Math.floor(Math.random() * 100) + 1;
    // console.log("Random Time:", randomTime);

    //randomly generant a 0, or 1, from a random number between 0 and 1
    const dataReceived = Math.round(Math.random()) === 1 ? true : true;
    // console.log("Data Received:", dataReceived);
    setTimeout(() => {
      // 4) Set a status condition to settle the promise
      if (dataReceived) {
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
const onSuccess = (data) => {
  console.log("data:", data);
};

//onRejected - The second handler, is a failur handler, and it contains the logic for the promise rejecting.
const onFailure = (data) => {
  console.log("error:", data.message);
};

const data1 = 1;

// 7) How to make dependent async functions, execute synchronously with promises?  Soluton: Composition - Since .then will return a promise with the same settled value as the original, they can be chained together to return previously settled values.  This allows developers to make a request to an asynchronous function and make another request with the results received.
const logData = getLogData(data1, "rst")
  .then((data2) => {
    return getLogData(data2.newNumber, "nd");
  })
  .then((data3) => {
    return getLogData(data3.newNumber, "rd");
  })
  .then((data4) => {
    return getLogData(data4.newNumber, "rd");
  })
  .then((data4) => {
    return getLogData(data4.newNumber, "th");
  })
  .catch(onFailure);


// Promise will return Pending, if the promise has not settled yet
// console.log("Promise has not resolved yet:", logData);
