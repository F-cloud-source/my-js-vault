// ASYNC AND AWAIT = Async = Make a function that Return a promise
//                   Await = make a async function that return a promise


//  Allows you to Write your Asyncronous code in syncronous Manner 
//  Async doesn't have resolve or reject parameters 
//  Ecerything after Await is place in a Event quene


function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is big enough");
    } else {
      reject("Number is too small");
    }
  });
}

checkNumber(15)
  .then((msg) => {
    console.log("Step 1:", msg);
    return 20;
  })
  .then((value) => {
    console.log("Step 2:", value);
    if (value % 2 === 0) {
      return "Even number, passing on";
    } else {
      throw new Error("Odd number error");
    }
  })
  .then((msg) => {
    console.log("Step 3:", msg);
  })
  .catch((err) => {
    console.log("Caught error:", err);
  });


  function addFive(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve(num + 5);
    } else {
      reject("Not a number!");
    }
  });
}

function multiplyByTwo(num) {
  return new Promise((resolve) => {
    resolve(num * 2);
  });
}

// Chained Promises
addFive(10)
  .then((result) => {
    console.log("After adding 5:", result);
    return multiplyByTwo(result);
  })
  .then((result) => {
    console.log("After multiplying by 2:", result);
    return addFive("oops"); // intentionally wrong type
  })
  .then((result) => {
    console.log("This won't run:", result);
  })
  .catch((err) => {
    console.log("Caught an error:", err);
  });
