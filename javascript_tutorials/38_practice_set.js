//-----------2----------- write a program ot load a javascript file in a browser using promises use async and await  syntax

// async function loadscript(src){

//       return new Promise((resolve,reject)=>{
//         var script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);

//         script.onload=setTimeout(function(){
//             resolve("script is loaded successfully ");
//         },5000);
//       })
      

// }

// const main=async()=>{
//      console.log("script is loading ");
//      let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
//      console.log(a);
//      console.log("do u want to do something else as script is loaded successfully ");

// }

// main();


//----------3----------- create a promise which rejects after 3 seconds use an async/await to get its value use a try catch to handle its error
async function rejects(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject(new Error("this is error of question 3"));
        },3000);
    })
}

const main2=async()=>{
    try{
        let a = await rejects();
        console.log(a);
    }
    catch{
        console.log("this error has been handled");
    }
}

main2();


//-------------4------------ write a program  using promise.all() inside an async/await to await 3 promises compare its results with the case where we await these promises one by one.


    let p1 = async()=>{

        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve("this is promise 1");
            },2000);
        })
        
    }
    let p2 = async()=>{

        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve("this is promise 2");
            },4000);
        })

    }
    let p3 = async()=>{

        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve("this is promise 3");
            },6000);
        })

    }
    


const main3=async()=>{

 console.time("run");
    let a1 = await p1();
    let a2 = await p2();
    let a3 = await p3();
    console.log(a1+"\n"+a2+"\n"+a3);
 console.timeEnd("run");

 
 console.time("run");
    let a4 = await Promise.all([p1(),p2(),p3()]);
    console.log(a4);
 console.timeEnd("run");
}

main3();