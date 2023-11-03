// console.log()  is used to print just like( in c[printf(%d,var)]  in c++[cout<<var] in py[print(var)] in matlab fprintf['%d',var]    )
console.log("this is beginning of javascript")


// var           is global scoped , can be updated, can be re-declared  
var a = 10
var a = "tarun"
console.log(a)



// let           is block scoped,  can be updated , cannot be re-declared
let b=12
// let b="tan" //  this will erroe cannot re-declared
b="tan"        //   but can be updated
console.log(b)



// const         is block scoped,  neither updated nor re-declared
const c="sharma"
// c="suryansh"    // this will error as we are trying to update the value of constant variable
console.log(c)