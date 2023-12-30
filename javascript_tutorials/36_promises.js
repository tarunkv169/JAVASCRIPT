// u will get more clear from cwh notes 
// promise is helpfull in resolve 1. the pyramid of doom (by doing parallel execution of promises)
//                                2. provide two functions ( then(to print resolve value) catch(to print the error))
// these resolve and reject are the callbacks


//---------------------------- EXAMPLE OF HOW TO USE PROMISES----------------------------------------------------------------

// let p1 = new Promise(function(resolve,reject){

//      console.log("promise is pending ");
//      setTimeout(() => {
//         console.log("promise is fullfilled and resolved");
//         resolve(true)
//      }, 5000);

// })

// let p2 = new Promise(function(resolve,reject){
//     console.log("promis is pending ");
//     setTimeout(function(){
//        console.log("promise is fullfilled and rejected");
//        reject(new Error("i am an error"));
//     },5000);
// })

// console.log(p1,p2);

// p1.then((value)=>{
//  console.log(value);
// })

// p2.catch(()=>{
//     console.log('this is catch block');
// })

//  // or

// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })



//----------------------SOLN TO PYRAMID TO DOOM-------------------------------------------------------------------

// let p3 = new Promise((resolve)=>{
//     console.log("promise is pending ");
//     setTimeout(function(){
//         console.log("promise is fullfilled and resolved");
//         resolve("this is p3");
//     },5000)
// })

// p3.then((value)=>{
//     console.log(value);
//     let p4 = new Promise((resolve)=>
//     {
//         resolve("this is p4");
//     })
//     return p4;  // return is necessary

// }).then((value)=>{
//     console.log(value);
//     return p5 = new Promise((reject)=>{
//         setTimeout(function(){
//             console.log("this is p5 ");
//             reject(new Error("this is error phaji"));
//         },3000)

//     })
// }).catch((error)=>{
//     console.log(error);
// })


//----------------------loadscript function again with promises---------------------------------------------------------------------
// let loadscript=(src)=>{
//     return new Promise(function(resolve,reject){
//         var script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);

//         script.onload=()=>{
//             resolve("this is resolved by loading with src : "+ src);
//         }

//         script.onerror=()=>{
//             reject(new Error(`Cannot load script ${src}`));
//         }
//     })
// }

// let p6 = loadscript("https://cdn.ddjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
// p6.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// })



//----------------------------PROMISE API/ PROMISE CLASS------------------------------------------------------------------------------

// let p7 = new Promise((resolve,reject)=>{
//      setTimeout(function(){
//         resolve("ehllo");
//      },1000);
// })

// let p8 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//          resolve(2);
//     },2000);
// })

// let p9 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//           resolve(3);
//     },3000);
// })

// //             1. Promise.all([])-------------execute all promises at same time of (large settimeout)----but fail in case of reject out of resolve
// let promise_all = Promise.all([p7,p8,p9]);

// promise_all.then((value)=>{
//     console.log(value);
// })

// //             2. Promise.allsettled([])-------in case of reject out of resolves
// let promise_all_settled = Promise.allSettled([p7,p8,p9]);

// promise_all_settled.then((value)=>{
//     console.log(value);
// })

// //             3. Promise.race([])-------which took less time -----but fail in case of reject out of resolve
// let promise_race = Promise.race([p7,p8,p9]);
// promise_race.then((value)=>{
//     console.log(value);
// })

// //             4. Promise.any([])------- in case of reject out of resolve
// let promise_any = Promise.any([p7,p8,p9]);
// promise_any.then((value)=>{
//     console.log(value);
// })

// //             5. Promise.resolve([])-------
// let promise_resolve = Promise.resolve([p7,p8,p9]);
// promise_resolve.then((value)=>{
//     console.log(value);
// })


// //             6. Promise.catch([])-------
// let promise_reject= Promise.reject([p7,p8,p9]);
// promise_reject.then((value)=>{
//     console.log(value);
// })


//----------------------------ASYNC AND AWAIT------------------------------------------------------------
//        async--helpful in executing the numerious promises in one function
//        await--helpful in waiting the text to execute by our own wish
async function weather()
{

      let delhi_weather = new Promise(function(resolve,reject){
        setTimeout(function(){
              resolve("18 deg cel");
        },4000);
      })

      let banglore_weather = new Promise(function(resolve,reject){
              setTimeout(function(){
                resolve("20 deg cel");
              }, 7000);
      })

      // delhi_weather.then(alert);
      // banglore_weather.then(alert);
   console.log("fethcing delhi weather");
   let delhi = await delhi_weather;
   console.log("fethched delhi weather");

   console.log("fethcing banglore weather");
   let banglore = await banglore_weather;
   console.log("fethched banglore weather");

   return [delhi,banglore];
}

weather().then((value)=>{
    console.log(value);
})

weather();

let a= weather();
console.log(a);

// -------------------------------explainig await in good way(await always works in async function)-----------------------------

const climate=async()=>{
    console.log("this is climate details phaji ");
}

const hello=async()=>{
    let a = weather();
    let b = climate();
}

hello();
                        //  now see magic of await it will execute climate2() until weather() dosenot complete
const climate2=async()=>{
    console.log("this is climate details phaji ");
}

const hello2=async()=>{
    let a = await weather();
    let b = await climate2();
}

hello2();



