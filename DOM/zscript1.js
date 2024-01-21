// this program is about DOM and its examples 

// console.log('Hello')
// alert('Jai Sree Ram')

// console.log(window.document)
// console.dir(window.document)
// console.dir(document.body);
// // console.log(document.body);
// console.log(document.head);


// console.dir(document.body.childNodes[1]);

// document.body.style.background = 'green'


// document.body.childNodes[3].innerText = 'green'


// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class")
// console.dir(headings);
// console.log(headings);


// let firstEl = document.querySelector("p") // 1st elemnet
// console.dir(firstEl);



// let allEl = document.querySelectorAll("p") // All elemnet
// console.dir(allEl);



// let firstEl1 = document.querySelector(".myclass") //  myclass
// console.dir(firstEl1);



// let allEl2 = document.querySelectorAll("#myid") //  myid
// console.dir(allEl2);


// let btnEl = document.querySelector("#myid") // 1st elemnet
// console.dir(btnEl);

// console.dir(document.body.firstChild)


// let div = document.querySelector("div")
// console.dir(div);

// let heading = document.querySelector("h1")

//Pratice Question


//(Q1) Create a H2 heading element with text -"Hello Javascript".Append 
  //  "from Apna College students" to this text using JS .

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +  " from Apna College Students";

// let h3 = document.querySelector("h3");
// console.dir(h3.innerText);
// h3.innerText += " I am from Telangana and its Capital is Hyderabad ";

//  differnece methods to do is this are alternative methods

// h2.innerText += " from Apna College Students";

// h2.innerText = h2.innerText +  " from Apna College Students";

// h2.innerText = `${h2.innerText +" from Apna College Students"}`

// h2.innerText += `${" from Apna College Students"}`


//(Q2). Create  3 divs with comman class name- "box". Access them and add some
//    unique of them

// let div = document.querySelectorAll(".box");
// console.log(div[0]);


// let div = document.querySelectorAll(".box");
// div[0].innerText = "LigrajHirode"
// div[1].innerText = "BaswarajHirode"
// div[2].innerText = "AmarnathHirode"
// div[3].innerText = "YellarlingHrirode"

// div[0].style.color = "white";
// div[1].style.color = "white";
// div[2].style.color = "white";
// div[3].style.color = "white";


// div[0].style.background = "red";
// div[1].style.background = "red";
// div[2].style.background = "red";
// div[3].style.background = "red";
// // div[2].style.color = "white";

// let divs = document.querySelectorAll(".box");
// console.log(divs)// this line of code is opitonal

// let idx = 1;
// for(div of divs){
//     div.innerText = `LingrajHirode ${idx}`
//     // div.style.color = "white";
//     // div.style.background  = "green";
//     idx++;

// }



// let div = document.querySelectorAll(".box");
// let count = 0;

// div.forEach((element, index) => {
//   element.innerText = "new Unique value " + (index + 1);
//   element.style.color = "white";
//   count++;
// });

// console.log("Total elements: " + count);



// let divs =  document.querySelectorAll(".box");


// let i=1;
// for(div of divs) {
//   div.innerText = `BASWARAJ ${i}`;
//   i++;
// }

//////////////////////////////////////////////////////////////////////////

// Attributes in DOM  with examples

  // let div = document.querySelector("div");
  // console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);



//////////////////////////////////////////////////////////////
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));




// let div = document.querySelector("div");

// div.style.backgroundColor = "red";
// div.style.fontSize = "26px";
// // div.style.visibility = "hidden"

// div.innerText = "HELLO!";


////////////////////////////////////////

//DOM Manipulation with Insert Elements

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click ME!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);


// let div = document.querySelector("div");
// div.after(newBtn);



// let p = document.querySelector("p");
// p.after(newBtn);


//////////////////////////////////////////////////

// by using this method we can also create heading 

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, Lingraj Hirode!</i>";

// document.querySelector("body").prepend(newHeading);

// document.querySelector("body").append(newHeading);


//////////////////////////////////////////////////

// by using this method we can also Remove Elements

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();




/////////////////////////////////////////////////////////////////////////

// Pratice Questions

//(1Q) Create a new Button element .Give it a text "click me", 
//   background color of red and text color of white

// insert the button as the first element inside the body tag

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!1";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

/*
(Q2). Create a <p> tag in html, give it a class & some styling.

Now create a new class in CSS and try to append this class to the <p> el

Did you notice, how you overwrite the class name when you add a nev

Solve this problem using classList.
*/

// let para = document.querySelector("p");



//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Events in JavaScript

//Event Handling in Js

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn1 was clicked")
//   let a = 25;
//   a++;
//   console.log(a);
// };


// let div = document.querySelector("div")
// div.onmouseover = () => {
//   console.log("you are in inside div with Js")
// };



//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Event Object in JavaScript

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);  
//   console.log(evt.target);  
//   console.log(evt.clientX,evt.clientY);  

// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);  
//   console.log(evt.target);  
//   console.log(evt.clientX,evt.clientY);  
// };


//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Event Listeners in JavaScript

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//   console.log("button was clicked");
//   console.log(evt);
//   console.log(evt.type);  
//   console.log(evt.target);  
//   console.log(evt.clientX,evt.clientY);

// });


// btn1.addEventListener("click", () => {
//   console.log("button was clicked - handler2");

// });

// Remove Event Listeners in JavaScript

/*
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler1");
});

btn1.addEventListener("click", () => {
  console.log("button was clicked - handler2");

});

const handler3 = () => {
  console.log("button was clicked - handler3");

};
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click",handler3); 

btn1.addEventListener("click", () => {
  console.log("button was clicked - handler4");

});

// btn1.removeEventListener("click",handler3);

*/

// Pratice Qestion  
//(1Q) Create a toggle button that change the screen to dark-mode when 
// clicked and light-mode when clicked again

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; // dark


modeBtn.addEventListener("click", () => {
  if(currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    
  }else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");

  }
  console.log(currMode);
});













































































































































































































































































































































































































































































































































































































































































































































































































































































































































