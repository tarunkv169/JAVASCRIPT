// Q1      Create a navbar and change the color of its first element to red

// let n = document.body.firstElementChild.getElementsByClassName("navbar-brand")[0];
// n.style.color = "red";

// let n2 = document.body.getElementsByTagName("nav")[0].firstElementChild;
// n2.style.color = "red";



// Q2     Create a table without tbody now use "view page source" button to check whether it has a tbody or  not
// Q3     Create an element with 3 children now change the color of first and last element to green

                       // let element = document.body.getElementsByTagName("div")[0].childNodes;
                       // let elementArray = Array.from(element);
                       
                       // for(let i = 1 ; i<elementArray.length ; i+=4)
                       // {
                       //     elementArray[i].style.color = "green";
                       // }

let e = document.body.getElementsByTagName("div")[0];
e.firstElementChild.style.color = "green";
e.lastElementChild.style.color = "green";



//  Q4     Write a javascript code to change background of all <li> tags to cyan

                   // let c = document.body.getElementsByTagName("li");
                   // let cArray = Array.from(c);
                   
                   // for(let i=0 ; i <=cArray.length ; i++)
                   // {
                   //     cArray[i].style.background= "red";
                   // }

                   Array.from(document.body.getElementsByTagName("li")).forEach((element)=>{
                    element.style.background ="red";
                   })


//   Q5    