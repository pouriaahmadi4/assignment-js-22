/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

// answer :

function sumNum (a, b) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (a<0 || b<0) {
        reject("One of the numbers are negative...");
      } else {
        let sum = a+b;
        resolve(sum)
      }
    },1500);
  });
}

// calling the sumNum (passing two numbers) to see the resolve/reject result in console:

sumNum (-10, 90).then(result=>console.log(result)).catch(error => console.error(error));



