function requestPromise (currentNumber, ordinal) {
  console.log(`Runs ${currentNumber}` + ordinal);
  return new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * 100) + 1;
    setTimeout(() => {
      if (true) {
        resolve({ newNumber: currentNumber + 1  });
      } else {
        reject(new Error('No data available'));
      }
    }, randomDelay);
  });
}
const retrievePromises = async (startingNumber) => {
    try {
        const promise1 =  requestPromise(startingNumber, 'rst');
        console.log("promise1:", promise1);
        const promise2 = await requestPromise(promise1.newNumber, 'nd');
        const promise3 = await requestPromise(promise2.newNumber, 'rd');
        const promise4 = await requestPromise(promise3.newNumber, 'th');
        const promise5 = await requestPromise(promise4.newNumber, 'th');
      }
    catch(err) {
        console.log(`Error: ${err}`);
    }
};
retrievePromises(1);


//   // Promise will return Pending, if the promise has not settled yet
//   console.log('Promise has not resolved yet:', requestPromisePromise);
