console.log("               about children of element                 ");
console.log(document.body.firstChild);
console.log(document.body.lastchild);
console.log(document.body.childNodes);


// 🛑🛑🛑🛑actual childnodes is not array we can make it 
let child_arr = Array.from(document.body.childNodes);
console.log(child_arr);
console.log(child_arr[0]);
console.log(child_arr[child_arr.length-1]);



console.log("               about parent of element                 ");
a=document.body.firstChild;
console.log(a.parentNode); 