


//destructing assignment is used to unpack values from an array or properites form objects, into distinct variables


//-------********* 1. destructing in arrays ***********8------------------

let arr = [1,2,3,4];

let [a1,b1,c1,d1] = arr;

console.log(a1,b1,c1,d1);





let arr1 = [1,2,3,4,5,6,7];
let [a2,b2,c2,...rest] = arr1;

console.log(a2,b2,c2,rest);





// let arr2 = [1,2,3,4,5,6,7];
// let [a3,,b3,,...rest] = arr2;

// console.log(a3,b3,...rest);



//--------------*********2. destructuring in objects ****************__---------------
const obj = {
    a:1,
    b:2
}

const {a,b} = obj;

console.log(a,b);







//spread syntax==================






//----------------1.showing func of spread (as spread syntax spread the values in distinct values)

let arr3 = [1,2,3];

function sum(v1, v2, v3){
    return v1+v2+v3
}

console.log(sum(...arr3))// here u can see (...arr3) spreads arr3 values and snd the values as an distinct arguments


//---------------2. creating array into obj

let arr4 = [1,2,3,4];
let obj4 = {...arr4}; // here u can see (...arr4) spread arr4 values as distinct values to different keys

console.log(obj4);


//---------------3. updating obj using spread 

let obj5 ={
    name: "tarun",
    company: "company xyz",
    address: "XYZ"
}

console.log({...obj5, name: "parm", address: "ABC"}) // intialliay we spread values of obj5 using (...obj5) then update the values
