// this program is about JS basics with help of  css and html


// console.log('Welcome to JavaScript');
// console.log('Welcome to JavaScript');

// log , info , warn , error, table 



// log

// console.log('I am a log message')


// info

// console.info("I am an INformation Message")


// warn

// console.warn("I am Warning Message")

// Error
// console.error(" i am an Error Messaage");

// table

// let student ={
//   name :"Lingraj",
//   age : 22  ,
//   course : "Python"
// };
// console.table(student)


/*
chrome --  google -- v8 Engine
FireFox-- Mozilla --Spider Monkey
IE ----Microsoft----Chakra   

*/


// this a small example in javascript on console.log()

// let a=2;
// let b=6;
// let sum = a-b;
// console.log(`the sum of ${a} , ${b} is : ${sum}`);

// console.log("This value of x is:",sum);
// console.log("This value of x is:",y);


// how to declare a variable
// let myName = 'lingraj';
// myName  = 'mahesh';
// console.log(myName );


// data types in javascript 


// string
// let employeeName = 'lingraj'
// console.log(`value :${employeeName} Type :${typeof employeeName}`)

// number
// let number = 10
// console.log(`value :${ number} Type :${typeof  number}`)

//boolean
// let isManager = true
// console.log(`value :${ isManager} Type :${typeof  isManager}`)

//undefined
// let myName;
// console.log(`value :${ myName} Type :${typeof  myName}`)


//null(dummy value)
// let test=null;
// console.log(`value :${test} Type :${typeof test}`)


// Re-Assignment is allowed
// let abc;
// abc=10;
// abc='lingraj'
// abc=true
// abc=null
// console.log(`value :${abc} Type :${typeof abc}`)






//Operators in JavaScript  

//Assignmnet Operators : =
// let test = 50;
// console.log(test);

// Arithmetic Operators

// let num1 = 10;
// let num2 = 20;
// console.log(`sum:${num1 + num2}`);
// console.log(`sum:${num1 - num2}`);
// console.log(`sum:${num1 * num2}`);
// console.log(`sum:${num1 / num2}`);
// console.log(`sum:${num1 % num2}`);
// console.log(`sum:${num1 ** num2}`);

// find the number is even or odd
// let number = 123;
// if(number % 2 === 0){
//     console.log(`${number} is Even Number`)
// }
// else{
//     console.log(`${number} is Odd Number`)
// }


//Short hand Math Operators : ==, -= , /= , ==

// let a = 20;
// let b = 30;
// let add = 10;
// add += (a+b);add -= (a+b);add *= (a+b);add /= (a+b);add %= (a+b);add **= (a+b);
// console.log(add);

//Conditional Operators
// let marks = 25;
// if(marks <=35){
//     console.log('You Failed the Exam')
// }
// else{
//     console.log('You Cleared the Exam')
// }

// Unary Operators : ++ ,--
// let x = 23;
// x=x+1;
// x+=1;
// x++;
// console.log(x);

// let y= 2;
// y++;
// console.log(y);



// let r = 8;
// r=r-1;
// r-=1;
// r--;
// console.log(r);


// Logical Operators:&&(AND),||(OR),^(XOR)

/*
AND=>T && T --> T
OR=>F || F --> F
XOR=>T ^ F ,F ^ T--> T
*/


//AND OPERATORE (&&)
// let inRealtion=true
// let partenAgreed=true
// if(inRealtion && partenAgreed){
//     console.log('Get Marry Soon')
// }
// else{
//     console.log('Wait until the parents Agreed')
// }

//OR OPERATORES(||)
// let inRealtions=false
// let partenAgreeds=false
// if(inRealtions || partenAgreeds){
//     console.log('Get Marry Soonnnnnnnn')
// }
// else{
//     console.log('Wait until the parents Agreeddddddddddddd')
// }


// XOR (^)
// let inRealtions=true
// let partenAgreeds=false
// if(inRealtions ^ partenAgreeds){
//     console.log('Get Marry Soonnnnnnnn')
// }
// else{
//     console.log('Wait until the parents Agreeddddddddddddd')
// }


// Ternary Opertator : ture : false;

// marks=15;
// let message='';
// (marks <= 35) ? message = 'You Failed the Exam' : message = 'You Cleared the Exam';
// console.log(message);


// Equality Operator : == , ===

// s=10;
// g='10';
// if(s==g){
//     console.log('Both are Equal')
// }
// else{
//     console.log('Both are Not Equal');
// }



// t=10;
// h='10';
// if(t===h){
//     console.log('Both are Equal')
// }
// else{
//     console.log('Both are Not Equal');
// }




//Conditional and Loopoing Statements:
//if-else

// let time =-25;
// let wishMessage = '';
// if(time>=0 && time <=12){
//     wishMessage = 'Good Morning';
// }
// else if (time > 12 && time <=17){
//     wishMessage = 'Good Afternoon'
// }
// else if (time > 17 && time <=23){
//     wishMessage = 'Good Evening'
// }
// else{
//     wishMessage = 'Enter a Proper Time'
// }
// console.log(wishMessage);



//Switch Case:

// let day = new Date().getDay();
// let today = '';
// switch(day) {
//     case 0 :
//         today ='Sunday';
//         break;
//     case 1 :
//         today ='Monday';
//         break;
//     case 2 :
//         today ='Tuesday';
//         break;
//     case 3 :
//         today ='Wednesday';
//         break;    
//     case 4 :
//         today ='Thursday';
//         break;
//     case 5 :
//         today ='Friday';
//         break;
//     case 6 :
//         today ='Saturday';
//         break;
//     default :
//         today ='Enter a Proper day';
//         break;                                                    
// }
// console.log(`Today is :${today}`);


//For-loop Example in JavaScript

//print  the values for 0 - 10 differ by 1

// let result ='';
// for (let i=0; i<=0; i++){
//     console.log(i);
// }
// console.log(result);

// let result ='';
// for (let i=0; i<=10; i++){
//     if (i<=9){
//         result +=`${i} , `;
//     }
//     else{
//         result +=`${i} `;
//     }
// }
// console.log(result);



// print the values from 20 - 0 differ 2

// result = '';
// for (let i=20; i >=0; i-=2){
//     if (i > 0){
//         result +=`${i} , `;
//     }
//     else{
//         result +=`${i} `;
//     }
// }
// console.log(result);


/*  *
    * *
    * * *
    * * * *
    * * * * *
    Example of making start with JavaScript
*/
/*
let number =6;
result = '';
for (let i=1; i<=number; i++){
    for (let j=1; j<=i; j++){
        result +=' *'
    }
    result +='\n';
}
console.log(result)



//////////////////////////////////////////////////////////////////

/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
/*
result = '';
for (let i=1; i<=5; i++){
    for (let j=1; j<=i; j++){
        result +=`${j} `
    }
    result +='\n';
}
console.log(result)


//////////////////////////////////////////////////////////////////

/*
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
*/
/*
result = '';
for (let i=1; i<=5; i++){
    for (let j=1; j<=i; j++){
        result +=`${i} `
    }
    result +='\n';
}
console.log(result)





////////////////////////////////////////////////////////////////////////
/*
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
*/

/*
result = '';
for (let i=5; i>=1; i--){
    for (let j=1; j<=i; j++){
        result +=`${j} `
    }
    result +='\n';
}
console.log(result)  
*/

////////////////////////////
/*
5 5 5 5 5 
4 4 4 4 
3 3 3 
2 2 
1 

result = '';
for (let i=5; i>=1; i--){
    for (let j=1; j<=i; j++){
        result +=`${i} `
    }
    result +='\n';
}
console.log(result) 
*/

// While Loop in JavaScript with example 
// let result = '';
// let i=0;
// while(i<=10){
//     if (i<=9){
//         result += `${i} ,`;
//     }
//     else{
//         result += `${i}`;
//     }
//     i++;
// }
// console.log(result);


//print the values from 20-0 differ 2


/*
result = '';
i = 20;
while(i >= 0){
    if (i > 0){
        result += `${i} ,`;
    }
    else{
        result += `${i}`;
    }
    i -=2;
}
console.log(result);
*/

// Objects in JavaScript with example


