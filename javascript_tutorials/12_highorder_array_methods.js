//all those we read dont change or effect the original array


//             1.forEach()   ---> it just do operation on array---->like printing
//             2.map(),3.filter()    --> give new array by doing operations
//             4.reduce()    --->give single value by doing operations


//             1.forEach()   ---> it just do operation on array---->like printing
let arr1=["tan","man","dhan"];

arr1.forEach( (value,index,array)=>
{

 console.log(index,value,array);

} )

//             2.map()--> give new array by doing operations
let map_arr=arr1.map( (value,index,array)=>
{
    console.log(index,value,array);
    return value+1;
} )

console.log(map_arr);


//             3.filter() --> give new array by doing operations
let arr2=[12,3,4,16,8,10];

let filter_arr=arr2.filter( (value)=>
{
    return value>10;
} )

console.log(filter_arr);


//              4.reduce()    --->give single value by doing operations  
let arr3=[1,2,3,4,5,6];

let reduce_value=arr3.reduce( (value1,value2)=>
{
    return value1+value2;
})

console.log(reduce_value);


