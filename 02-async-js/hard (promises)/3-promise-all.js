/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

function calculateTime() {
  const start = Date.now();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((results) => {
      const endTime = Date.now();
      const duration = (endTime - start) / 1000;
      console.log("All promises resolved:");
      console.log(results); // ["First promise resolved", "Second promise resolved", "Third promise resolved"]
      console.log(`resolved aftter ${duration} seconds`);
    })
    .catch((error) => {
      console.error("One of the promises rejected:", error);
    });
}

calculateTime();
