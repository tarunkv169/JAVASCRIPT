let arr1=["tan","man","dhan"];

for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}


// for in gives keys(indices)
for(let i in arr1)
{
    console.log(i);
}

// for of gives values
for(let i of arr1)
{
    console.log(i);
}

// good example

let arr2="tarun";
for(let i in arr2)
{
    console.log(`alphabet at ${i} is ${arr2[i]}`);
}


for(let i of "tarun")
{
    console.log(i);
}