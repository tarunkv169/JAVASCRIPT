// arrow func help to------- 
//--------------(1). to write func in one line

const func_1=()=> console.log("hello"); console.log("world");

func_1();



// ---------------(2).---------help to keep reference of lexical variables and functions and this

let obj = {
    name: "tarun",
    role: "js developer",
    exp: "30 years",

    show: function func_2(){
               console.log(`${this.name} is a ${this.role}`);

               setTimeout(()=>{
                console.log(`he has experiance of ${this.exp}`)
               },2000)
           }
}


console.log(obj.name);
console.log(obj.show());