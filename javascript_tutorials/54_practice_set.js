// write a javascript prog to print the following after 2 sec delay ------hello world


function func_1()
{
     setTimeout(()=>{
           console.log("hello \n world");
     },2000)

}

func_1();


// write a javascript prog to find the average of numbers in an array using spread syntax

let arr1 = [1,2,3,4];

const average=(n1,n2,n3,n4)=>{
      return (n1+n2+n3+n4)/4;
}

console.log(average(...arr1));

// write a javascript func which resolves a promise after n sec. the function takes n as the parameter . use a IIFE to execute the func with different values of n

(function func_2(n){
      return new Promise((resolve,reject)=>{
        setTimeout(function(){
             resolve("true");
        },n)
      })

})(2000).then((value)=>{
    console.log(value);
})

// write a simple interest calculator using javascript

let choice = 1;

while(choice)
{
    let principle_amount = +prompt("enter the principle amount ");
    let interest_rate = +prompt("enter the interest rate ");
    let time = +prompt("enter the time of interest and amount ");

    let simple_interest = (principle_amount * interest_rate * time)/100

    console.log(simple_interest);

    choice = +prompt("enter 1 to continue and 0 to end");
}