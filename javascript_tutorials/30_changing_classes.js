ssp.className =  "text-blue red";


console.log(ssp.classList);
ssp.classList.remove("red");
ssp.classList.add("red");
console.log(ssp.classList.toggle("red"));
console.log(ssp.classList.contains("red"));

 

setTimeout(function(){
    console.log('Executando callback...');

},5000)


const dosum=(a,b)=>{
    alert(`${a}+${b} is ${a+b}`);
}

setTimeout(dosum,5000,3,2);

setInterval(dosum,1000,4,5);