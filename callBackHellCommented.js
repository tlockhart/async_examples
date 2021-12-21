// log function
function logData(number, suffix, time, retrieveDataCB) {
  // console out the current number
  console.log(`Runs ${number}` + suffix);

  setTimeout(() => {
    // console.log('Now we have the data');
    // instead of returning the data before
    // it's available, wrap the data to be
    // returned in a callback, so it will have
    // access in the main execution loop

    // once setTimeout runs, we invoke the
    // retrieveDataCB function, which triggers
    // gives the main loop access to the data.

    retrieveDataCB({ newNumber: number + 1 });
  }, time);

  // Runs before data is available.
  // return number + 1;
}

//Run the sequence
const executeMainLoop = (startingNum) => {
  // Execute getNumber function and invoke the retrieveDataCB, which will have access to the newNumber object.
  logData(startingNum, 'rst', 0, (number1) => {
    // console.log('NewNumber2:', data.newNumber);
    // log 2nd stmt
    logData(number1.newNumber, 'nd', 75, (number2) => {
      // log 3rd stmt
      logData(number2.newNumber, 'rd', 0, (number3) => {
        // log 4th stmt
        logData(number3.newNumber, 'th', 50, (number4) => {
          // log 5th stmt
          logData(number4.newNumber, 'th', 0, (number5) => {});
        });
      });
    });
  });
};

//   run sequence function
executeMainLoop(1);
