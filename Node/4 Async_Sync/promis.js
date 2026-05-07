


/*

JavaScript Promises were created to make asynchronous JavaScript easier to use.
A Promise object represents the completion or failure of an asynchronous operation.

Three States of a Promise
A Promise is always in one of these three exclusive states: 

Pending: The initial state; the operation has started but is not yet fulfilled or rejected.
Fulfilled: The operation completed successfully, and a result value is available.
Rejected: The operation failed, and a reason (error) for the failure is available

let myPromise = new Promise(function(res, err) {
// "Producing Code" (May take some time)

  res(); // when successful
  err();  // when error
});
myPromise.then(
  function(value) { code if successful },
  function(error) { code if some error  }
);


*/

let a=20;
let b=0;

let waitingData= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2000)
})
waitingData.then((result)=>{
   b=result;
   console.log(a+b)
})