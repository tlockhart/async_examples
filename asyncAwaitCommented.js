// async await is a new syntax that allows us sequence asynchronous code that is easier to read.
// async is a keyword used to declare a function that returns a promise, which is a delayed value.

// async functions will return one of three values:
// 1) If nothing is returned from the function it will return undefined.
// 2) If the function returns a non-promise value, the function will return a promise resolved to that value.
// 3) If a promise is returned from the function, the promise will be returned

// await is a keyword that returns the resolved value of a promise.  It halst the execution of the async function until the promise is settled.

// IMPORTANT: Failing to add await before a async function will result in the return of a pending Promise, because program execution does not wait, before returning a result.
//Important: There is no need to await the value of the call to an async function.  That functionality is already handled by the async/await that is defined within the function.

//  Async/Await makes Error handling easier with a tryCatch block,  We can also use the promise's .catch() method, since async functions return a promise.  This is useful in the global scope to catch final errors, in complex code.

const getLogData = (number, suffix) => {
  console.log(`Runs ${number}` + suffix);
  return new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * 100) + 1;
    setTimeout(() => {
      if (true) {
        resolve({ newNumber: number + 1  });
      } else {
        reject(new Error('No data available'));
      }
    }, randomTime);
  });
};

const returnLogData = async (number) => {
    try {
        const promise1 = await getLogData(1, 'rst');
        const promise2 = await getLogData(promise1.newNumber, 'nd');
        const promise3 = await getLogData(promise2.newNumber, 'rd');
        const promise4 = await getLogData(promise3.newNumber, 'th');
        const promise5 = await getLogData(promise4.newNumber, 'th');
      }
    catch(err) {
        console.log('no data returned');
    }
};

//call the async function
returnLogData(1);


//   // Promise will return Pending, if the promise has not settled yet
//   console.log('Promise has not resolved yet:', logDataPromise);
