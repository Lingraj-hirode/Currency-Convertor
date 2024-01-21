// Creating Arrays in javascript with Example problems
/*
let numbers = [10, 20, 30, 'lingraj', 10.25];
console.log(numbers);

// access the element of an array
console.log(numbers[1]); //20

// access the non-existing 
console.log(numbers[5]); //undefined

// Iterations of array elements
let colors = ['white', 'black', 'sliver' , 'puple','blue','pink'];
console.log(colors);

// 1.normal for-loop
let result = '';
for(let i=0; i <=colors.length-1; i++){
    result += `${colors[i]} `;

}
console.log(result);

//2.for-in loop upto ES5
result = '';
for(let index in colors){
    result += `${colors[index]}`
}
console.log(colors);

// 3.for-of loop from ES6
result = '';
for(let color of colors){
    result += `${color}`
}
console.log(colors);

//4.forEach function upto ES6
result = '';
colors.forEach(function(color) {
    result +=`${color} `;
});
console.log(result);
*/

// let furits = ['mango' , 'apple', 'banan', 'kiwi']

// for(x of furits){
//     console.log(x)
// }

// let  furits = ['mango' , 'apple', 'banan', 'kiwi']
// for(index in  furits){
//     console.log(index);
// }

// let Brands = ['Mi', 'Samsung', 'Nokia', 'Apple', 'Redmi']
// for(mobile in Brands){
//     console.log(`${mobile} + ${Brands[mobile]}`)

    // console.log(mobile + ':' + Brands[mobile])

// }
// console.log(`${ mobile + Brands[mobile]}`);
//   console.log(`${mobile}:${Brands[mobile]}`);



//Examples of Arrays in JavaScript 

// let  furits = ['Mango' , 'Apple', 'Orange', 'Kiwi']
// console.log(furits[1])

// Array can be Mixed type of dataTypes

/*
const brand22 = ['Apple', 'Redim',1, true, 12.25, {myName : 'lingraj'}, 
'hello', 'Rajkumar']
console.log(brand22.length)

const newBrand = brand22;

newBrand[1] = 'Kiwi';
console.log(brand22);
console.log(newBrand);


newBrand[5] = 'Happy';
console.log(newBrand);

*/

// const nums = [4,2,5,6,1,9];
// console.log(nums.indexOf(8));
// console.log(nums.includes(80));
// nums.push ('raj');
// console.log(nums);
// nums.unshift('shiva');
// nums.pop();
// nums.shift();
// // nums.sort();
// const subArray = nums.slice(2,5);
// console.log(subArray);



// types of Methods in Array in JavaScript
/*
1.indexOf()
2.include()
3.push()
4.unshift()
5.pop()
6.shift()
7.sort()
8.slice()
*/

// const val = [2,5,8,9,7,2,1];
// // console.log(val.indexOf(1));
// // console.log(val.includes(10));
// val.push('Rajesh');
// val.unshift('ShivaKumar')
// val.pop();
// val.shift();
// val.sort();
// subArray = val.slice(2,5);
// console.log(subArray);

         // -10 -9 -8  -7  -6 -5 -4 -3   -2    -1 
        //   0  1  2  3   4   5  6  7    8     9
// const key = [5, 3, 6, 89, 57, 8, 9, 584, 978,  745]
// const subkeys = key.slice(3,-6);
// console.log(subkeys);
