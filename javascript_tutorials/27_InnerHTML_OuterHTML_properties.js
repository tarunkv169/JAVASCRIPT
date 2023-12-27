//   1.  // log gives exact written in html
console.log(document.body.getElementsByTagName("span")[0]);
// dir gives tag only and show all the attributes
console.dir(document.body.getElementsByTagName("span")[0]);



//   2. //innerHTML

//we can get------ text of tag------ using (id).innerHTML
console.log(first.innerHTML);
//we can ---------change anything------- using (id).innerHTML
first.innerHTML ="<h1>this is heading u know</h1>";


//   3. //outerHTML

//we can get-----text along with its tags(all attributes)------- using (id).outerHTML
console.log(first.outerHTML);
//we can change anything using (id).innerHTML
first.outerHTML ="<h1>hari om</h1>";


//   4. //.data
console.log(document.body.firstChild.nodeValue);

//   5. //.textContent-----gives text of all html
console.log(document.body.textContent); // helpful in coping the text of any website


