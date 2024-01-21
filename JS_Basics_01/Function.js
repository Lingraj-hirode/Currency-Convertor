// this programs is about Function and its examples 



//function with Parameters
// function primeNumbers(startNumber, endNumber, increment){
//     let result = '';
//     for(let i=startNumber; i<=endNumber; i+= increment){
//         result +=`${i} `;
//     }
//     console.log(result);
// }
// primeNumbers(10,200,3)




//function without Parameters
// function greet(){
//     console.log('Good Morning');
// }
// greet();




// function sum(num1,num2){
//     let value = num1 + num2
//     return value;
// }
// result=sum(10,20);
// console.log(result);


// Function Expression
// let greetMe = function(){
//     console.log('Good Evening');
// };
// greetMe();


// function Expression with parameter

// let detailsOfMe = function(name,age){
//     let message = `Hello ${name} You are ${age} yrs Old`;
//     console.log(message);
// };
// detailsOfMe('lingraj',23);


// functions
// function sum(a,b){
//     console.log(a+b)

// }
// sum(10,20);


// functions Expressions

// let express = function(a,b){
//     console.log(a-b);
// }
// express(20,10);

// return functions

// function addition(x,y){
//    let value = x+y;
//     return value;
// }  
// value = addition(10,20);
// console.log(value);


// function expression example
// let mulpity = function(nums1,nums2){
//     value2 = nums1+nums2;
//     return value2;

// }
// result = mulpity(50,25)
// console.log(result);


// let mulpity =(nums1,nums2)=>{
//     value2 = nums1+nums2;
//     return value2;

// }
// result = mulpity(5,25)
// console.log(result);

// let sub22 = (num3,num4) => {
//     console.log(num3+num4);
// }
// sub22(20,24)

// let wishMe = (x,y) => {
//     console.log(x+y);
// }
// wishMe(30,20);



// let divide =(n1,n2)=>{
//     value = n1/n2;
//     return value;
// }
// let res = divide(120,6)
// console.log(res)

// function myFunction(a, b) {
//     return a * b;
// }
// res=myFunction(2,3);
// console.log(res);

/*
Write a JavaScript function to calculate the sum of two numbers. ...
Write a JavaScript program to find the maximum number in an array. ...
Write a JavaScript function to check if a given string is a 
palindrome (reads the same forwards and backwards).
*/

//Write a JavaScript function to calculate the sum of two numbers.

// function sum(n1,n2){
//         console.log(n1+n2);
// }
// sum(2,5);


// function mul(n2,n3){
//     return n2*n3;
// }
// val = mul(9,5);
// console.log(val);

//functiions expression
// let sub = function(m1,m2){
//     return m1-m2
// }
// val = sub(50,27);
// console.log(val);


// Arrow Funtions in javascript

// let add=(n1,n2)=>{
//     return n1+n2;

// }
// val = add(2,3);
// console.log(val);

// let greetMe = () =>{
//     return 'Good Night';
// }
// val = greetMe();
// console.log(val);


// let greetBy = function(){
//     return 'Good Eveing';
// }
// val = greetBy();
// console.log(val)

//Simple Function
// function greetMe(){
//     console.log('Good Morning');
// }
// greetMe();

// let wishMe = function(name,age){
//     let message = `Hello I am ${name} and my age is ${age} `
//     console.log(message);
// }
// wishMe('Lingraj Hirode',24);
// 

// let wishMe = function(name,age){
//     return `Hello I am ${name} and my age is ${age} `
    
// }
// resl=wishMe('Lingraj Hirode',24);
// console.log(resl);



// let wishMe = (name,age) => {
//     return `Hello I am ${name} and my age is ${age} `
    
// }
// resl=wishMe('Lingraj Hirode',24);
// console.log(resl);

// function with object as parameter
// let printObject = function(obj){
//     console.log(obj);
// };
// printObject({myName : 'lingraj', age : 25});


// let mobile = {
//     brand : 'Apple',
//     color : 'RedGreen',
//     price :  25000
// };
// printObject(mobile);





//Write a JavaScript program to find the maximum number in an array.


// Create a function using the 'function' keyword that takes a String as an
// argument  and returns the numbers of vowels in the string.

// let myString =(vowels) => {

//     return[a,e,i,o,u];
// }
// let result = myString('function');
// console.log(result);


// function sum(a,b){
//     return a+b;
// }
// let res = sum(2,3);
// console.log(res);

// function myString2(vowels2){
//     let vowels2 = [a,e,i,o,u];
//     return  vowels2 ;
// }
// let res2 =  myString2('function');
// console.log(res2);  



//forEach functions in JavaScript

// let nums = [98,87,99,78];

// nums.forEach((num) =>{
//     console.log(num**2);
// });


// Example of reduce with help of function in Javascript

// let n = prompt('Enter a Number : ');

// let arr = [];

// for (let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res+curr;
// });
// console.log('sum = ', sum);

// let factorial = arr.reduce((res,curr) => {
//     return res*curr;

// });
// console.log('factorical =',factorial);


// Example of Arrays with loops some examples

// let cities = ['Pune', 'Mumbai', 'Srilanka', 'Hyderabad'];
// for(let city of cities){
//     console.log(city);
//     // console.log(city.toUpperCase());
// }


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// let cities = ['Pune', 'Mumbai', 'Srilanka', 'Hyderabad', 'Paris'];
// for(let city in cities ){
//     console.log(city)
// }


// Calcutale  Average marks of  Students by Arrays
// let marks = [97,48,78,58,65,85];

// let sum = 0;

// for(let val of marks){
//     sum+=val;
// }

// let avg = sum / marks.length;
// console.log(`Avg marks of the class =${avg}`);

// const array = [1,2,3,4,5,6];
// const length = array.length;
// console.log(length);

// some loops in partical questions in javascript
// Calaculate sum of 1 to 5
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum+=i;
// }
// console.log(sum);
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum+=i;
// }
// console.log(sum);


// for loop
// let sum = 0;
// let n = prompt('Enter a number')
// for(let i=1; i<=n; i++){
//     sum+=i;
// }
// console.log(`sum fo n numbers is ${sum}`);

// while-loop

// let i = 1;
// let num = prompt('Enter a Number :')
// while(i<=num) {
//     console.log(i);
//     i++

// }
// while loop
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }



///////////////////////////////////////////////

// DO-While-Loop
// let i =1;
// do{
//     console.log('Jai Sree Ram',i);
//     i++;
// }while(i<=5);



// for-loop\
// let sum=0
// let num=prompt('Enter a Number')
// for(let i=1; i<=num; i++){
//     sum+=i;
// }
// console.log(sum);


//while-loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


//do-while-loop
// let i=6;
// do{
//     console.log('Ram',i);
//     i++;

// }while(i<=5);

// for-of-loop

// let a = 'lingraj';
// for(let val of a){
//     console.log(val);
// }

// Practice question 2
// let gameNum = 35;
// let userNum = prompt('Enter a Number');

// while((userNum != gameNum)){

// userNum = prompt('You Entered Wrong Number,Guess Again :');

// }
// console.log('Congratulations, you Entered the Right Number');



///////////////////////////////////////////////////////

// Pratical question
/*
For a given with prices of 5 items => [250,65,300,900,50]
All items an offer of 10% off on them.Change the array to Store final price
after appling offer
*/
// let items = [250,65,300,900,50]
// for(let i=0; i<items.length; i++){
//     let offer =items[i]/10;
//     items[i]-=offer;

// }
// console.log(items);

////////////////////////////////////////////

// let items2 = [250, 650, 300, 900, 500];

// for (let index in items2) {
//     let offer = items2[index] / 10;
//     items2[index] -= offer;
// }

// console.log(items2);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Functions with Examples and Pratical questions


// // Simple Functions
// function myFunction(){
//     console.log('Jai Sree Ram');
//     console.log('Hello Hyderabad');
// }
// myFunction();


// function myFunction(a,b){
//     console.log(a+b,a*b);
 
// }
// myFunction(2,5);
// myFunction(10,5);
// myFunction(22,5);
// myFunction(12,5);


// Functions with Parameters

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction('hello');

// Functions with return value

// function add(x,y){
//     val=  x+y;
//     return val
// }
// let result1 = add(8,2)
// let result2 = add(7,5)
// let result3 = add(12,2)
// console.log(result1);
// console.log(result2);
// console.log(result3);


// Arrow Functions with Examples in Javasript

// const arrowSum = (a,b) =>{
//     console.log(a+b);
// }
// arrowSum(2,3);

// // Arrow function with  return statement
// const arrowSum22= (a,b) => {
//     return (a*b);
// }
//  const result= arrowSum22(8,7);
//  console.log(result);


// Arrow Functions in JavaScript

// const arrowAdd = (a,b)=>{
//     console.log(a+b)

// }
// arrowAdd(4,5);


// Arrow Functions with return Statement in JavaScript

// const arrowMult = (x,y) => {
//     let result = x*y
//     return  result;
// }
// let value = arrowMult(8,6);
// console.log(value);


// const divide =(a,b) => {
//     return (a/b);
// }
// let res=divide(150,8);
// console.log(res);


// Arrow Functions with return value
// const arrowSubt = (a,b) => {
//     return a-b;
// }
// const result = arrowSubt(45,15);
// console.log(result);



// const greetMe22 = () => {
//     console.log('hello,hyderabad')
// }
// greetMe22();

// const greetMe23 = () => {
//     return 'hi Linraj Hirode';
// }
// const value = greetMe23();
// console.log(value);

// (1Qs).Create a fucntion using the 'function' keyword that takes a String
// as an argument and return the number of vowels in the string.

// function countVowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if( char === 'a'  || char === 'e'  || char === 'i'  || char === 'o'  || char === 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels('lingrajHirode');
 

// const countVowels22 = (str) => {
//     let count = 0;
//     for(const char of str) {
//         if( char === 'a'  || char === 'e'  || char === 'i'  || char === 'o'  || char === 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels22('Hinduistan');
 


// function countVowels55(str){
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' ||char === 'i' ||char === 'o' ||char === 'u'){            
//             count++;  
//         }
        
//     }
//     return count;
// }
// let value = countVowels55('aaaaaa');
// console.log('Number of vowels are :',value);

// numberOfVowles=(str) => {
//     let count = 0;
//     for(const char of str){
//         if(char ==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u'){
//             count++;
//         }
//     }
//     return count;
// }
// let result = numberOfVowles('HRD Degree and PG College');
// console.log('Number of Vowles are :',result);


// forEach in Functions with callback functions

// function wishMe2(){
//     console.log('hi,Hyderabad');
// }

// function myFunction(wishMe2) {
//     return wishMe2;
// }
// wishMe2();



// function add2(a,b){
//     console.log(a+b);
// }

// // function myFunction(add2) {
// //     return add2;
// // }
// add2(2,3);


// function add(a,b){
//     return a+b;
// }

// function mult(a,b){
//     return a*b;
// }

// function sub(a,b){
//     return a-b;
// }

// function calculate(n,m, nums) {
//     return nums(n,m);
// }
// console.log(calculate(4,5,add))
// console.log(calculate(5,5,mult))


// console.log ('Sum of Two Numbers :',calculate(5, 5,add));
// console.log('Product of Two Numbers :',calculate(5, 5, mult));
// console.log('Substration of Two Numbers :',calculate(10, 5, sub));

// console.log(add(5,3))
// console.log(mult(9,3))
// console.log('Sum of Two Numbers :',add(2,2));
// console.log('Product of Two Numbers :',mult(3,5));
// console.log('Sum of Two Numbers :',add(4,2));
// console.log('Product of Two Numbers :',mult(8,5));
// console.log('Sum of Two Numbers :',add(6,2));
// console.log('Product of Two Numbers :',mult(9,5));
// console.log('Sum of Two Numbers :',add(6,6));
// console.log('Product of Two Numbers :',mult(3,8));

// forEach funtion exampele

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });


// forEach funtion exampele with arrow Function

// let arr = [6,7,8,9,10];
// arr.forEach((val) => {
//     console.log(val);

// });

// arr = [11,12,13,14,15];
// arr.forEach(value => {
//     console.log(value);
    
// });

// fruites1 = ['Mango','Apple','Orange','Bananna','Jackfruit']

// fruites1.forEach(vlaue1 => {
//     console.log(vlaue1);    
// });

// let citites = ['Pune', 'Mumbai', 'Hyderabad', 'Jaipur', 'Telangana'];

// citites.forEach((value, idx, cities) => {
//     console.log(value.toUpperCase(),idx,cities);
// });

// (Q2) For a given array of Numbers, Print the Square of each value using 
//  the forEach loop.

// let sqr = [66,75,89,97,120 ];

// sqr.forEach((vlaue) => {
//     console.log(vlaue*vlaue);
// })


// Another way to callback the funtions in forEach

// let sqr = [6,5,9,7,12 ];

// let calcSqare = (sqr) => {
//     console.log(sqr**2);
// };

// sqr.forEach(calcSqare);

// Map Method in JavaScript

// let nums =[1,2,3,4,5];

// let newArr=nums.map((val) => {
//     return val*5;
// })

// console.log(newArr);


// let sum222 = [6,7,8,9,10];

// let newArry = sum222.map((result) => {
//     return result *2;
// })
// console.log(newArry);

// fliter function or Method in javascript

// let number = [1,2,3,4,5,6,7,8,9,10];

// let newArry = number.filter((val) => {
//     return val % 2 === 0;

// })
// console.log(newArry);

// let number = [1,2,3,4,5,6,7,8,9,10];

// let newArry = number.filter((val) => {
//     return val >5;

// })
// console.log(newArry);

// Reduce Method in javascript

// let arry = [1,2,3,4,5,6,7,8,9,10];

// const output = arry.reduce((res,curr)=>{
//     return res + curr
// });
// console.log(output);


// let arry = [0,5555,9,7,89999,95,7,2,1];

// const output = arry.reduce((res,curr)=>{
//     return res > curr ? res : curr;
// });
// console.log(output);

/*
(Q3) we are given array of marks of students .
filter out of the marks of students that scored 90+
*/

// let marks = [45,55,42,99,78,100,98];

// const arrymarks = marks.filter((val) => {
//     return val > 90;
// });
// console.log(arrymarks);

/*
(Q4) Take a number n as input form user.create an array of numbers from 1 to n.
User the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

// let n = prompt('Enter a number : ');

// let arry = [];

// for(let i=1; i<=n; i++) {
//     arry [i-1]= i;
// }
// console.log(arry);

// let sum = arry.reduce((res, curr)=>{
//     return res + curr;
// });
// console.log('sum = :',sum);


// let product = arry.reduce((res, curr)=>{
//     return res * curr;
// });
// console.log('product = :',product);
