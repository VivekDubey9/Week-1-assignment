/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout((res) => {
      resolve("resolve after 1 second");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout((res) => {
      resolve("resolve after 2 second");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout((res) => {
      resolve("resolve after 3 second");
    }, 3000);
  });
}

async function calculateTime() {
  const start = Date.now();

  const result1 = await waitOneSecond();
  console.log(result1);
  const result2 = await waitTwoSecond();
  console.log(result2);
  const result3 = await waitThreeSecond();
  console.log(result3);

  const endTime = Date.now();
  const duration = (endTime - start) / 1000;

  console.log(`duration now is ${duration}`);
}

calculateTime();

/*
  Sequential Calls:

  Each promise is awaited one after the other.
  Total time should be the sum of all individual times: 1 + 2 + 3 = 6 seconds.

  Promise.all:
  All promises run concurrently.
  Total time should be equal to the longest promise: 3 seconds. */
