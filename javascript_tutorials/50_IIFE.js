// Immediately Invoked Function Expressions
// to remove the pollution of the variables of global scope , we use IIFE  



// just-like----->         function func1()
//                         {
//                              console.log("db connected")
//                         }

//                         func1()

(function func1()
{
    console.log("db connected");
})();    // semicolon is must
// here first()---> used for defination
//      second()---> used for execution to immediatily invoked






(()=>{
    console.log("db connected two");
})();



        // or




        

((name)=>{
    console.log(`db connnected two ${name}`);
})("tarun");

















let a=()=>{
    return new Promise((resolve,reject)=>{
          
        setTimeout(function(){
          resolve(465);
        },4000)
    })
}


(async ()=>{
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})()