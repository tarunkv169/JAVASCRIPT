// 1.trim()
// 2.toUpperCase()
// 3.toLowerCase()
// 4.slice()
// 5.concatenation


let firstname="   tarunKUMAR sharma   ";
let secondname=" ji ";

//                         1. trim()
console.log(firstname.length);  

firstname=firstname.trim();
console.log(firstname +" "+ firstname.length);

//                        2. toUpperCase()
console.log(firstname.toUpperCase())

//                        3. toLowerCase()
console.log(firstname.toLowerCase())

//                        4. slice
console.log(firstname.slice(0,2))

//                        5.concatination
console.log(firstname+" "+secondname);

let a="23";
let b="7";
console.log(+a + +b);

a=23;
b=7;
console.log(a+"" + b+"");

//                        6.template strings
let Name="tarun";
let age=19;
//         normally
console.log("my name is "+ Name + " age is "+ age);
//         template---remember to use ``
console.log(`my name is ${Name} age is ${age}`);


//                        7.== vs ===
let num1="7";
let num2= 7;

console.log(num1==num2);
console.log(num1===num2);


