// create an array of numvers and take input form the user to add numvers to this array?
// let arr1 = [1,2,3,4,5];
// let num1=+prompt("enter the number to add ");
// arr1.push(num1);
// console.log(arr1);

//keep adding numvers to the array in 1st until 0 is added to the array?
// let num2;
// let arr2=[1,2,3,4,5,6,7];
// for(let i=0;i<arr2.length;i++)
// {
//     num2=+prompt("enter the number to add ");
//     arr2.push(num2);
//     if(num2==0)
//     {
//         break;
//     }

// }
// console.log(arr2);

//fileter for numvers divisible by 10 from a given array
let arr3=[9,10,11,20,15,30];
let filter_arr=arr3.filter( (value)=>
{
    if(value%10==0)
    {
        return value;
    }
})

console.log(filter_arr);