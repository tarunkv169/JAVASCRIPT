// javascript can be used to send and return info form the network when needed
// What is an API (Application Programming Interface)
// https://github.com/public-apis/public-apis


// AJAX--------------(ASYNCHRONOUS JAVASCRIPT AND XML)
//-----------AJAX is a technique for creating fast and dynamic web pages
//----------------without reloading the whole browser it can reload a particular content in web page
//----------------in this from (XHR) request(readyState(0,1,2,3,4)) goes to (server) (to access textfile,xml data,json data)
//----------------------- from (server) respone(response(Text,XML) or status(200,401,404)) goes to (XHR) 


function load_data(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange= function()
    {
      if(this.readyState == 4 && this.status == 200)
       {
           document.getElementById("demo").innerHTML = this.responseText;
       }

    
    }; 


xhttp.open('GET',"40_2_readme.txt",true);
xhttp.send();
}




