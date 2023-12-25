

let b=document.body;
console.log(b.firstChild);
console.log(b.firstElementChild); // it gives exact ele we use dont include the empty text 
console.log(b.lastElementChild);
console.log(b.previousElementSibling);
console.log(b.nextElementSibling);

const changeBgRed =()=>{
    document.body.firstElementChild.style.background = "green"
}

