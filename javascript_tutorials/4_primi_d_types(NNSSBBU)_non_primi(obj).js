// primitive datatypes-------NN SS BB U
const a=null;
const b=10;
const c=Symbol(b|15);
const d="tarun";
const e=true;


//           2 way to use bigInt
const f = BigInt(234) + 1n;
console.log(f);


//🛑const g; it give an error because const must be initialized
let g;
//🛑this is bug or error in javascript type of null is null , but here it is object , they dont solve this bug due to change it in millions of codes
console.log(typeof a,a); 





// non_primitive_datatype-----objects,arrays,----which just like dictionary in python
// by using const in front no one is able to change value of key
const items={
    name:"tarun",
    age:26,
    city:"delhi",
};

console.log(items["name"]);


// creating oxford dictionary 😍
const dict={
    Grateful:"feeling or showing an appreciation of kindness",
    Genetic:"relating to genes or heredity",
    Gigantic:"of very great size",
    Gaze:"look steadily and intently"
};


console.log(dict.Gaze);