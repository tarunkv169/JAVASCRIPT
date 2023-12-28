// 🛑old method of insertion
let first = document.getElementById("first");

// first.innerHTML=first.innerHTML + `<h3>i am head with strong</h3>`
// console.log(first.innerHTML);









// 🛑INSERT--------ELEMENT-------(append,  prepend,  before,  after,  replacewith)


// new ways  need to create our own div in js
// let div = document.createElement("div");
// div.className = "its div class";
// div.innerHTML = '<span>this is new div</span>'

// // 1. append at end
// first.append(div);

// // 2. prepend at first
// first.prepend(div);

// // 3. before out of container (tag)
// first.before(div);

// // 4. after out of container (tag)
// first.after(div);

// // 5. replace the existed tag in html
// first.replaceWith(div);

// console.log(document.body.getElementsByClassName("its div class")[0]);




// 🛑INSERT ADJACENT----HTML/ELEMENT/TEXT-----(beforebegin, afterbegin, beforeend, afterend)

first.insertAdjacentHTML('beforebegin', '<h1>hari</h1>');
first.insertAdjacentHTML('afterbegin', '<h1>om</h1>');
first.insertAdjacentHTML('beforeend', '<h1>ji</h1>');
first.insertAdjacentHTML('afterend', '<h1>sir</h1>');



first.remove();