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

// setInterval(()=>{
//     let a = new Date().toTimeString();
//     time.innerHTML = a;
//     document.getElementById("time").style.color ="white";
// },1000)


let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let AMPM = document.getElementById("AMPM");

setInterval(() => {
  let clock = new Date();
  let hrs = clock.getHours();
  let min = clock.getMinutes();
  let sec = clock.getSeconds();

  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs < 12) {
    AMPM.innerHTML = "PM";
  } else {
    AMPM.innerHTML = "AM";
  }

  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
});








