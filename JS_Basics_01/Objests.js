// Objects in JavaScript with Examples

// JavaScript Object
let camera = {
    brand :  'Samsung',
    price :   650000,
    color :   'Red',
    mfg   :   2023
};
console.log(camera);

// access the properties of an objects
console.log(camera.brand);
console.log(camera.price);
console.log(camera.color);
console.log(camera.mfg);

// access the non-existing property
console.log(camera.megaPixel); //undefined

// access the properties using dot, [] notations
console.log(camera.price); //6500000
console.log(camera['price']); //6500000


// for dynamic properties dot ,[] notations
let prop = 'brand';
console.log(camera.prop); //undefined
console.log(camera[prop]); // Red

// Nested Objects in JavaScript
let student = {
    name : 'Lingraj Hirode',
    age  :  25 ,
    course : 'Degree College',
    address : {
        street : 'Jiyaguda',
        city :   'Hyderabad',
        state :  'Telangana'
    }
};


//  How  to access  Nested Objests in Javascript
console.log(student);
console.log(student.address);

// access  the properties of an objects
console.log(student.address.state);


// CURD  Operations with Object

// Create Operations
let mobile = {};

mobile.brand = 'Asus';
mobile.color = 'Black';
mobile.price = 750000;
mobile.isInsured = false;

console.log(mobile);


// Read Operations
console.log(mobile.brand); //Asus


// Update Operations
console.log(mobile.price); //750000
mobile.price = 9500000;
console.log(mobile.price);

mobile.brand = 'Apple 15 Plus ProMAx';
console.log(mobile.brand);

mobile.color = 'ForestGreen';
console.log(mobile.color);


//Delete Operations in JavaScript
delete mobile.isInsured;
console.log(mobile.isInsured);

delete mobile.mfg;
console.log(mobile.mfg);

delete mobile.price;
console.log(mobile);

delete mobile.color;
console.log(mobile);

mobile.price = 1200000;
console.log(mobile);

mobile.color = 'SkyBlue';
console.log(mobile);

mobile.mfg = 2023;
console.log(mobile);


mobile.isInsured = true;
console.log(mobile);

delete mobile.color;
console.log(mobile);

delete mobile.mfg;
console.log(mobile);


// creating the Object in javascript
let camera2 = {
    brand2 : 'Nokia',
    price2 : 250000,
    color2 : 'SliverGreen',
    mfg2     : 2024
};
console.log(camera2);

//accessing the properties from objects 
console.log(camera2.brand2);
console.log(camera2.price2);
console.log(camera2.color2);
console.log(camera2.mfg2);

console.log(camera2.megaPixel2);

console.log(camera2);
console.log(camera2.brand2);
console.log(camera2['price2']);
 

let custum = 'color2';
console.log(camera2[custum]);



// Nested Objects in JavaScript with Exmple
let employee = {
    name :  'Ramesh',
    age  :   35,
    company : 'TATA Steel',
    position  : 'HeadManager',
    address :{
        state : 'Telangana',
        city  : 'Hyderabad',
        street : 'RamNagar'
    }
};
console.log(employee);
console.log(employee.name);
console.log(employee.address);
console.log(employee.address.city);


// CURD operations in javascript with example 
let phone = {};
phone.brand3 = 'Redmi 15ProMax';
phone.color3 = 'YellowGrenn';
phone.price3 = 8500000;
phone.isInsured3 = true;

// Read opertaions
console.log(phone.brand3);
console.log(phone.color3);
console.log(phone.price3);
console.log(phone.isInsured3);


// update operations
console.log(phone.brand3);
phone.brand3 = 'iPhone 15ProMax';
console.log(phone.brand3);

// delete operations 

delete phone.brand3;
console.log(phone.brand3);



// create opertaions

let network = {};

network.brand = 'Airtel';
network.mbps  = '130mbps';
network.speed = 200;
network.price = 1500;
network.status ='Active';

//Read opertations

console.log(network.brand);
console.log(network.price);

//update operations

network.brand = 'Jio Fider';
console.log(network.brand);


//delete opertiaos
delete network.brand;
console.log(network.brand);






















