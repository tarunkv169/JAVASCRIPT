let arr1=["tan","man","dhan"];
console.log(arr1[0]);

arr1[2]="ehllo"; // changing
arr1[4]="world"; // adding

console.log(arr1);

console.log(typeof arr1);
console.log(Array.isArray(arr1));





//                 methods of array
let arr2=[6,3,5,4,0];
let arr3=['c','a','b']

//                  1. (n to s) in array
let b=arr2.toString();
console.log(b);

//                  2. join
console.log(arr2.join(" and "));

//                  3. pop  (remove last)
console.log(arr2.pop());

//                  4. push (insert last)
arr2.push(6)
console.log(arr2);

//                  5.shift (remove begin)
console.log(arr2.shift());

//                  6.unshift (insert begin)
arr2.unshift(0)
console.log(arr2);

//                  7.delete 
delete arr2[3];
console.log(arr2);

//                  8.concat
let newarray = arr1.concat(arr2,arr3);
console.log(newarray);

//                  9.sort------>it sort in alphabatic order
let arr4 = arr3.sort();
console.log(arr4);

//                  10.sort(compare)------>it sort numbers 
let arr5 = [133,22,1,45,3,10,6,9,355]
//------------------------------to sort numbers in ascending order we need compare func
let compare=(a,b)=>{
    return a-b;
}
console.log(arr5.sort(compare));
//-------------------------------to sort numbers in descending order we need compare func
let compare2=(a,b)=>{
    return b-a;
}
console.log(arr5.sort(compare2));

//                  11.reverse()

console.log(arr1.reverse());

//                  12.splice()-------(I.D.I) --->it change original array
let arr6 = [0,1,2,3,4,5,6,7,8,9,10];
arr6.splice(2,3,1111,1112,1114,1113)
console.log(arr6)

//                  13.slice()-----
console.log(arr6.slice(2,6));
console.log(arr6);

//                  14.array is reference datatype
let num1=6;
let num2=num1;
console.log(num1+" "+num2);
num1++;
console.log(num1+" "+num2);

// u can see normal variable is not referenc but array is internally take the reference of other array
let arr7=[1,2,3];
let arr8=arr7;
console.log(arr7 + "     " + arr8);
arr7.push(4,5,6);
console.log(arr7 + "     " + arr8);
