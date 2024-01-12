// alert bootstrap js code 

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

// card title my own code                 (1 document.getElementsByClassName("")[]        // [] these are a type of an array(🛑we say type of because need to convert into array using Array.from()  ) to access different elements of same class
//                                        (2         .getElementById("")               //🛑always use directly with document //🛑only in this "Element" is used not "Element"s"   //  id--- is unique thats why we dont use []       
//                                        (3         .getElementsByTagName("")[] 
//                                        (4         .getElementsByName("")[] 

//                                        (5         .querySelectorAll(".card-title")                    
//                                        (6         .querySelector(".this")                    
//                                                           

let ctitle = document.getElementsByClassName("card-title")[0];        // remmeber s is used in elements
ctitle.style.color = "red";

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("tarun"));
document.getElementsByName("tarun")[0].style.color = "green";


let cardtitiles = document.querySelectorAll(".card-title"); // for class we need to use (.)
cardtitiles[0].style.color = "green";
cardtitiles[1].style.color = "orange";
cardtitiles[2].style.color = "red";
console.log(cardtitiles);

document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "black";


// here u can see how to use [] in getElement 
let element = document.body.getElementsByTagName("p");
let elementArray = Array.from(element);

for(let i = 0 ; i<elementArray.length ; i+=2 )
{
  elementArray[i].style.color = "red";
}


