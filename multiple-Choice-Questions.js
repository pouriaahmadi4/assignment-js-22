/*

1. How do we create a new promise?

✅ A: Using the new Promise() 
B: Using the window.createPromise() method
C: Using the Promise.new() method
=========================================================

2. In promise terminology, what do we call the function that's passed to the Promise() constructor as an argument?

✅ A: Executor 
B: Generator
C: Promise maker
D: None of the above
=========================================================

3. Suppose that you've been told that p is a promise. What will typeof p return?

✅ A: 'object' 
B: 'promise'
C: 'function' 
=========================================================

4. According to the ES6 specification, a promise can be in one of the three states... What are they?

A: Pending, withdrawn, terminated
✅ B: Pending, fulfilled, rejected 
C: Initialized, withdrawn, rejected
D: Initialized, accomplished, broken
=========================================================

5. What will the following code log, after 3 seconds?

let p = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve('Good');
   }, 3000);
});

p.then(function(data) {
   console.log('OK ' + data );
});


A: OK
B: OK undefined
✅ C: OK Good 
=========================================================

6. Which parameter of the executor serves to 'fulfill' its respective promise?

✅ A. First parameter 
B: Second parameter
=========================================================

7. Once p is fulfilled by calling resolve() in line 3, what value is stored in p's promise state?


let p = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve();
   }, 3000);
});

A: null
B: false
✅ C: undefined 
=========================================================

8. Promises simplify the task of writing complex asynchronous code. True or false?

✅ A: True 
B: False
=========================================================

9. What does the following code log?

let p = new Promise(function(resolve, reject) {
   resolve('First');
});

p.then(function(data) {
   console.log(data);
});

console.log('Second');


A:  First
    Second

✅ B:  Second 
    First

=========================================================

10. What is the value of the promise p3 when gets fullfild in the code below?

let p = new Promise(function(resolve) {
     resolve("OK");
});

let p2 = p.then(function(data) {
    return data;
});

let p3 = p2.then(function(data) {
    return data + " Bye";
});


A: "OK"
✅ B: "OK Bye" 
C: undefined 
=========================================================

11: Determine the state and value of the promise p in the following code.


let p = new Promise(function (resolve, reject) {
  reject('Sorry');
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


A: State: fulfilled, value: "Sorry" 
✅ B: State: rejected, value: "Sorry" 
C: State: fulfilled, value: undefined
D: State: rejected, value: undefined
=========================================================

12. What will the code below log?

let p = new Promise(function(resolve, reject) {
    resolve("OK");
});

let p2 = p.then(function(data) {
    return data;
});

let p3 = p.then(function(data) {
    return data;
});

console.log(p2 === p3);


A: True 
✅ B: False 
*/
