// primitive datatypes-------NN SS BB U
const a=null
const b=10
const c=Symbol(b|15)
const d="tarun"
const e=true
const f=BigInt(234)
const g=undefined

console.log(a,b,c,d,e,f,g,typeof d)

// objects----which just like dictionary in python
// by using const in front no one is able to change value of key
const items={
    name:"tarun",
    age:26,
    city:"delhi",
}

console.log(items["name"])


// creating oxford dictionary 😍
const dict={
    Grateful:"feeling or showing an appreciation of kindness",
    Genetic:"relating to genes or heredity",
    Gigantic:"of very great size",
    Gaze:"look steadily and intently"
}


console.log(dict.Gaze)