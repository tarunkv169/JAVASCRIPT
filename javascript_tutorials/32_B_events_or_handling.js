let element = document.body.getElementsByClassName("container")[0];

element.onclick=()=>{
    alert('You clicked on me!');
}







// handling of events--------just 1. write event in good way    2. we can also remove event   3. we can check the events also
let btn = document.body.getElementsByClassName("btn")[0];

let x = function(e){ alert("this is first add"); }
let y = function(e){ alert("this is second add"); }

btn.addEventListener('click',x);
btn.addEventListener('click',y);

let user = +prompt("enter 1 to remove addevent \n0 to not");

if(user === 1)
{
    btn.removeEventListener('click',y);
}


// EVENT ATTRIBUTES
let z = function(event){ console.log(event); console.log(event.target); console.log(event.type , event.clientX, event.clientY);}

btn.addEventListener('click', z);


