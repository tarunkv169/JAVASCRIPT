console.log("ehllo");

alert(document.cookie)

let key = prompt("enter your key phaji");
let value = prompt("enter yoru value ");
// setItem(,)
localStorage.setItem(key,value);
// getItem()
console.log(`the value at ${key} is ${localStorage.getItem(key)}`);


if(key == "red" ){
    localStorage.removeItem();
}

if(key == 0){
    localStorage.clear();
}







let f = fetch("41_2_readme.txt");

f.then((response)=>{
    return response.text();
}).then((data)=>{
    document.write(data);
})



let obj = {
    name : "tarun",
    surname : "kumar",
    rollno : "133"
};
let f1 = fetch("https://jsonplaceholder.typicode.com/posts",
          {
            method:"POST",
            body: JSON.stringify(obj),
            headers:{
              'Content-type':'applicaton/json'

            },
          })

f1.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})