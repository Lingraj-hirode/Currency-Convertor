// this program  examples are for callBack ,Promiese and Async Await in Javascript

// callback, callback Hell, Promises, Promises Chaining, Async await Topices are there in below examples

// Asynchronous example program

// function hello() {
//     console.log("hello, lingraj");
// }

// setTimeout(hello,4000) ; //2sc = 2000ms(mileSeconds);


// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello,Lingraj");
// }, 4000); // timeout;

// console.log("three");
// console.log("four");


// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log(20+3);
// }, 4000); // timeout;

// console.log("three");
// console.log("four");



///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// callBack functions

// function sum (a,b) {
//     console.log(a+b);
// }

// function calculate(a,b, sumAdd) {
//     sumAdd(a,b);
// }

// calculate(2,4, sum);


// function sum (a,b) {
//     console.log(a+b);
// }

// function calculate(a,b, sumAdd) {
//     sumAdd(a,b);
// }

// calculate(2,6, (a,b) =>{
//     console.log(a+b);
// });


// const hello = () => {
//     console.log("hello, raj");
// }

// setTimeout(hello,3000)

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// callBack Hell 








// Async and Await example program

/*
async function always returns a promise
async function muFunc() {....}

await pauese the execution of its surrounding async function until the 
promise is settled.


*/
// async function hello(){
//     console.log("hello");
    
// }


// function api() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weathere data");
//             resolve(200);
//         },2000);

//     });

// };

// async function getWeatherData() {
//     await api(); //1st
//     await api(); //2nd
// };



//another real example of asyn and await

// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("seccess");
//         }, 2000);
//     });
// }

// // Async- await

// async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....");
//     await getData(5);

// }







