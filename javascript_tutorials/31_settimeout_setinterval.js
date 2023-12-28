// document.write("hello");

// setTimeout(function(){
//     alert('Hello World!');
// }, 5000);




// // user dependent timeout 
// let a = setTimeout(function(){
//     alert("this is taking input");
// }, 5000);

// let user = prompt("enter n for no timeout   \ny for yes timeout");

// if(user==="n")
// {
//     clearTimeout(a);
// }

// console.log(a);




// settimeout function
const sum=(a,b)=>{
    console.log("i am running",a+b);
}

setTimeout(sum,5000,1,2);


// setinterval function
const sum2=(a,b)=>{
    console.log("i am running",a+b);
}

setInterval(sum2,2000,1,2);




