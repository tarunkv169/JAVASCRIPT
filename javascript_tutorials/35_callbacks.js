function loadscript(src,callback){
      var script = document.createElement("script");
      script.src = src;

      script.onload = function(){
          console.log("script is loaded with src " + src);
          callback(null,src);
      }

      script.onerror = function(){
         console.log("error is occured with src " + src );
         callback(new Error("this is error"));
      }

      document.body.appendChild(script);
}

function hello(error,src){
     
    if(error)
    {
        console.log(error);
        return;
    }
    alert("this is hello world :  " + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)

