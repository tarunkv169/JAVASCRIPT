// there are drawbacks of XHR thats why there is need of fetch()
//------------fetch(here it place the request of file to access)------fetch itself return promise to respose(resolve) the request
//------------fetch().then()-----------also a req


//***********************************here we are reading data from server******************************* */




// let f = fetch("41_2_readme.txt");

// f.then((response)=>{
//     return response.text();
// }).then((data)=>{
//      document.write(data);
// })

// or

// f.then(response => response.text())
// .then(data => document.write(data));










// let j = fetch("https://jsonplaceholder.typicode.com/users");

// j.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     for(var x in data){
//         var a = `${data[x].name}------${data[x].email}-------${data[x].address.city} <br>`;
//         document.write(a);
//     }
// }).catch((error)=>{
//       document.write(error);
// });












// let json_vs = fetch("41_31_fetch_api.json");

// json_vs.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     for(var x in data){
//         var a = `${data[x].name}------${data[x].age}-------${data[x].city} <br>`;
//         document.write(a);
//     }
// }).catch((error)=>{
//      document.write("this is error");
// });





//***********************************here we are inserting,updating,deleting data from server******************************* */

//                            insert
let obj1 ={
       name: "tarun",
       age: "20",
       city: "sunam"
};

let I = fetch("https://jsonplaceholder.typicode.com/users",{
           method : "POST", // "POST"(to insert) "PUT"(to update) "DELETE"(to delete) "GET"(to read)
           body : JSON.stringify(obj1), // JSON is universal format(as it can be read by any languages) so json is good to insert in server
           
           headers: {
            'Content-type': 'application/json'
           },

         })
I.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})



//                             trying the inserting of form in server
document.getElementById("saveform").addEventListener("click", function(e){
    
    e.preventDefault();
    
    
    let obj2 ={
        title: document.getElementById("titletext").value,
        body: document.getElementById("bodytext").value,
        userId: document.getElementById("userid").value,
    }
    
    let form = fetch("https://jsonplaceholder.typicode.com/users",{
               method : "POST", // "POST"(to insert) "PUT"(to update) "DELETE"(to delete) "GET"(to read)
               body : JSON.stringify(obj2), // JSON is universal format(as it can be read by any languages) so json is good to insert in server
               
               headers: {
                'Content-type': 'application/json'
               },
    
             })
    form.then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
    
    
});






















