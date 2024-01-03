// there are alot of prototype(like constructor,destructor etc )------but we can make our own prototype by name( __proto__ );

let obj1={
    name1:"tarun",
    branch:"CSE"
}

console.log(obj1);  // u can see in console all the registered prototypes



let obj2={
    run:()=>{
        alert("run as fast as u can");
    }
}

obj2.__proto__ = {
 
    stop: "please stop"

}


obj1.__proto__ = obj2;   // creating obj2 as prototype of obj1
obj1.run();              // running the obj2 func using obj1 
console.log(obj1.stop);             // running the prototype channing


