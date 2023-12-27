let id1 = document.getElementById("id1");
console.log(id1);

console.log(id1.matches(".class"));  // as we know id1 is not matched with class named class 
//                                      it matched with class named box
console.log(id1.matches(".box"));

let c = document.body.childNodes[5].firstElementChild.firstElementChild;
console.log(c.closest(".its_div"));

console.log(c.closest(".its_div"))