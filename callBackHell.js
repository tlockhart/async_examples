function requestNumber(currentNumber, ordinal, delay, numberCB) {
  console.log(`Runs ${currentNumber}` + ordinal);
  setTimeout(() => {
    numberCB({ newNumber: currentNumber + 1 });
  }, delay);
}
const retrieveNumbers = (startingNum) => {
  requestNumber(startingNum, 'rst', 0, (number1) => {
    requestNumber(number1.newNumber, 'nd', 75, (number2) => {
      requestNumber(number2.newNumber, 'rd', 0, (number3) => {
        requestNumber(number3.newNumber, 'th', 50, (number4) => {
          requestNumber(number4.newNumber, 'th', 0, (number5) => {});
        });
      });
    });
  });
};
retrieveNumbers(1);

