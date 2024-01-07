// node.js ---------> as our javascript is running only on our browser  but our node.js make it possible to run on operating system
// npm-------> node packaging manager------> which manages our packages

// 1. npm init
// 2. npm init -y
// 3. (npm module_name)
// 4. delete nodejs module
// 5. npm install ----> isme nodejs hamare liye package.json me jaake ga aur dependeies ko install krke ,,node modules folder banaye ga




//Required package------🛑pdf-creator-node is a package 🛑


var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("55_1_nodejs_npm.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};



var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };
  // By default a file is created but you cou


  pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });