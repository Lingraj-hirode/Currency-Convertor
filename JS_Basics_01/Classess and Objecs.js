
// these programs are about Classes and Objests in Js


// __proto__ type in Js
// const student = {
//     fullName : "LingrajHirode",
//     marks : 94.4,
//     printMarks : function () {
//         console.log("marks = ", this.marks);  // student.marks
//     },
// };

// console.log(student)
// console.log(student.fullName);
// console.log(student.marks);

// console.log(student.printMarks()); 



// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     },
//     calctax2 : function () {
//         console.log("Tax rate is 10%");
//     }

// };

// const kuranArjun = {
//     salary : 1000000,
// };

// kuranArjun.__proto__ = employee;


// Classess and objects in Js

// class ToyotaCar {
//     start(){
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner1 = new ToyotaCar();
// fortuner1.setBrand("fortuner")
// let audi = new ToyotaCar();
// audi.setBrand("audi");



// class Animals{
//     dog() {
//         console.log("Boa Boa");
//     }

//     cat() {
//         console.log("Maue Maue");
//     }

//     setMammules(Mammules){
//         this.Mammules = Mammules;
//     }
// };

// let t = new Animals(); 
// t.setBrand("t")




// class Student2 {
//     setmyName (myname) {
//         this.myName = myname;
//     }

//     getmyName() {
//         return this.myName;   
//     }

// }; 

// let s =  new Student2();
// s.setmyName("lingraj");
// console.log(s.getmyname());
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// constructor with example

// class ToyotaCar {
//     constructor(brand,milage) {
//         console.log("crating new object");
//         this.brand = brand;
//         this.milage = milage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }


// };

// let fortuner = new ToyotaCar(" fortuner",20);
// console.log(fortuner);
// let lexus = new ToyotaCar( "lexus",50);
// console.log( lexus );



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Inhertinece  in Js

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();


// class Student2 {
//     myName() {
//         console.log("LingrajHirode");
//     }
// }

// class Childerns extends Student2 {};

// let obj = new Childerns();
// obj.myName();

// class Person {
//     eat(){
//         console.log(" I like to Ice-Cream");
//     }

//     sleep() {
//         console.log("I like to Sleep very well");
//     }
// }

// class Enignner  extends Person{
//     work() {
//         console.log(" I like to slove problme which i like");
//     }
// }

// let lingrajObj = new Enignner();
// lingrajObj.eat();
// lingrajObj.sleep();
// lingrajObj.work();



// class School {
//     student() {
//         console.log("Students like to Play in Ground");
//     }

//     study() {
//         console.log("Students like study ")
       
//     }

// };

// class Teacher  extends School{
//     teach() {
//         console.log("Teacher like to Teach  leasson for students");
//     }
// };

// let parentObj = new Teacher();
// parentObj.student();
// parentObj.study();
// parentObj.teach();


///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// class College{
//     subject(){
//         console.log("i like all subject in college ")
//     }

//     study(){
//         console.log(" i like to all study in college ")
//     }
// };

// class Leterctuer extends College {
//     teach() {
//         console.log("Letercture like to Teach more Subject in College ")
//     }
// };

// let parentObj22 =  new Leterctuer();
// parentObj22.subject(); 
// parentObj22.study(); 
// parentObj22.teach(); 

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//super keyword in Js with example


// class Person {
//     constructor() {
//         console.log("enter parent construcor");
//         this.species = "homo species"
//     }
//     eat(){
//         console.log(" I like to Ice-Cream");
//     }

//     sleep() {
//         console.log("I like to Sleep very well");
//     }
// }

// class Enignner  extends Person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super() // to invoke parent class cosntructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }
//     work() {
//         console.log(" I like to slove problme which i like");
//     }
// }

// let engObj = new Enignner("Mechical Enginner ");


// another example of super keyword


// class Person {
//     constructor(name) {
//         this.species = "homo species";
//         this.name = name;
//     }
//     eat(){
//         console.log(" I like to Ice-Cream");
//     }

//     sleep() {
//         console.log("I like to Sleep very well");
//     }
// }

// class Enignner  extends Person{
//     constructor(name){
//         super(name) // to invoke parent class cosntructor
//     }
//     work() {
//         super.eat();
//         console.log(" I like to slove problme which i like");
//     }
// }

// let engObj = new Enignner("LingrajHirode");


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Pratise Qestiosn 

//(1Q). you are creating a website for your college. Create a class User with
// 2 properties, name and email. it also has a method called viewData()
// that allows user to view website data.

// let DATA = "secret information";


// class User {
//     constructor(name , email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let student1 = new User("lingrajHirode", "lingrajhirode9703@gamil.com");
// let student2 = new User("baswarajHirode", "baswarajhirode214@gamil.com");

// let teacher1 = new User("Dean",  "dean@college.com");

// let admin1 = new Admin("admin", "admin@123.gamil.com");


//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Error Handling try,catch  and finally

// const test = () => {
//     try{
//         throw new error("This is Error")
//     }catch(error){
//         return "Inside catch";
//     }finally {
//         return "Inside Finally";
//     }
// };

// let res = test(x=10);
// console.log(res);



// function divideNumbers(x, y) {
//     try {
//       // Attempt to divide x by y
//       if (y === 0) {
//         // If the divisor is zero, throw a custom error
//         throw new Error("Division by zero is not allowed");
//       }
  
//       // Perform the division
//       const result = x / y;
//       console.log(`Result of ${x} / ${y} is:`, result);
  
//     } catch (error) {
//       // Handle errors that may occur during the division
//       console.error("An error occurred:", error);
  
//     } finally {
//       // This block will be executed no matter what, whether an exception occurred or not
//       console.log("Finally block executed.");
  
//       // Clean-up or finalize operations can be placed here
//       // For example, logging or updating UI elements
//     }
//   }
  
//   // Example usage:
//   const numerator = 10;
//   const denominator = 0;
  
//   // Case 1: Normal division
//   divideNumbers(numerator, 5);
  
//   // Case 2: Division by zero
//   divideNumbers(numerator, denominator);
  
// let a = 5;
// let b = 10;
// console.log("a ",a);
// console.log("b ",b);
// console.log("a+b =", a+b);
// try{
//     console.log("a+b = ",a+c); // error
// } catch(err) {
//     console.log(err);
// }
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);

 
function divideNumbers(a, b) {
    try {
      // Attempt to divide a by b
      if (b === 0) {
        throw new Error("Division by zero is not allowed ");
      }
      let result = a / b;
      console.log("Result:", result);
    } catch (error) {
      // Catch any errors that occurred in the try block
      console.error("Error:", error.message);
    } finally {
      // Code in the finally block will always execute, whether there was an error or not
      console.log("Execution complete, regardless of success or failure");
    }
  }
  
  // Example usage:
  divideNumbers(10, 2);   // Result: 5, Execution complete, regardless of success or failure
  divideNumbers(10, 0);   // Error: Division by zero is not allowed, Execution complete, regardless of success or failure
  































//(2Q).Create a new class called Admin which inherits form User. Add a new
// method called editData tp Admin it to edit website data.





