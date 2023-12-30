/* Create a digital seconds clock using setInterval and date object in javascript  */


//-------------------------some functions of date----------------------------------------------------------

// let a = new Date();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// let d = a.getDate();

// console.log(h, m, s, d);


// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(new Date().toTimeString());







setInterval(()=>{
    let a = new Date().toTimeString();
    time.innerHTML = a;
    document.getElementById("time").style.color ="white";
},1000)