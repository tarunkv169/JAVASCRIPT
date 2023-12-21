let arr1=["tan","man","dhan"];

//                 0. Array.form()------>to convert an obj to array
let my_obj="tarun";
let name_arr=Array.from(my_obj);
console.log(name_arr);


//                 1. for loop
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}


//                 2. forEach()----->it is itself is func and takes argument as func
let arr3=[1,2,3,4,5];
arr3.forEach( (v,i,ch_arr)=>{

     console.log(ch_arr[i]);
     console.log(v); 

} )


//                 3. for in gives keys(indices)
for(let i in arr1)
{
    console.log(i);
}


//                 4. for of gives values
for(let i of arr1)
{
    console.log(i);
}


//                 5. good example

let arr2="tarun";
for(let i in arr2)
{
    console.log(`alphabet at ${i} is ${arr2[i]}`);
}


for(let i of "tarun")
{
    console.log(i);
}