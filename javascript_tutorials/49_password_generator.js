// // create a javascript program capable of generating a program which contains atleat one lowercase,oneuppercase and one special charcter.create a password class to achive the same

// class password
// {
//    static generate_password(uppercase,lowercase,number,symbol)
//    {
//     const uppercase_alphabat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercase_alphabat = "abcdefghijklmnopqrstuvwxyz";
//     const number_arr = "0123456789"
//     const symbol_arr = "~!@#$%^&*?"
//     let password = "";

//     if(uppercase){
//         password += uppercase_alphabat[ Math.floor(Math.random() * uppercase_alphabat.length)];
//     }
//     if(lowercase){
//         password += lowercase_alphabat[ Math.floor(Math.random() * lowercase_alphabat.length)];
//     }
//     if(number){
//         password += number_arr[ Math.floor(Math.random() * number_arr.length)];
//     }
//     if(symbol){
//         password += symbol_arr[ Math.floor(Math.random() * symbol_arr.length)];
//     }
    
//     return password;
//    }
// }
    
//     document.getElementById("submit").addEventListener("click",(e)=>{
//         e.preventDefault();
     
//         const uppercase = document.getElementById("uppercase").Checked;
//         const lowercase = document.getElementById("lowercase").Checked;
//         const number = document.getElementById("uppercase").Checked;
//         const symbol = document.getElementById("uppercase").Checked;

//         const generatedpassword = password.generate_password(uppercase,lowercase,number,symbol);
//         document.getElementById("input_password").value = generatedpassword;
//     });
   




let show_password = document.getElementById("show_password");

let STpass1 = [1, 2, 35, 88, 44, 34, 5, 15, 33, 58, 9, 65];
let Alphabets1 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let Alphabets2 = [
  "a",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let characters = ["!", "~", "@", "_", "%", "$", "-", "/"];

// STRONG PASSWORD ---->

// SETUP

let funnypassbtn = document.getElementById("funnypassbtn");
let stpassbtn = document.getElementById("stpassbtn");
let weakpassbtn = document.getElementById("weakpassbtn");

stpassbtn.addEventListener("click", () => {
  let strongPassMaker1 = STpass1[Math.floor(Math.random() * STpass1.length)];
  let strongPassMaker2 =
    Alphabets1[Math.floor(Math.random() * Alphabets1.length)];
  let strongPassMaker3 =
    Alphabets2[Math.floor(Math.random() * Alphabets2.length)];
  let strongPassMaker4 =
    characters[Math.floor(Math.random() * characters.length)];

  let strongPass =
    strongPassMaker1 +
    strongPassMaker4 +
    strongPassMaker3 +
    strongPassMaker2 +
    strongPassMaker1 +
    strongPassMaker3 +
    strongPassMaker4 +
    strongPassMaker3;
  show_password.innerHTML = strongPass;
});

// WEAK PASSWORD ---->

weakpassbtn.addEventListener("click", () => {
  let weakPassMaker1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let weakPassMaker2 = ["_", "42", "-", "=", "41", "11", "**", "$", "!!", "^"];

  let weakPass1 =
    weakPassMaker1[Math.floor(Math.random() * weakPassMaker1.length)];
  let weakPass2 =
    weakPassMaker2[Math.floor(Math.random() * weakPassMaker2.length)];

  let weakPasswordMaker =
    weakPass1 + weakPass2 + weakPass1 + weakPass1 + weakPass1 + weakPass2;

  show_password.innerHTML = weakPasswordMaker;
});

// FUNNY PASSWORD ---->

funnypassbtn.addEventListener("click", () => {
  let funnyPassMaker = [
    "password",
    "ineedapassword",
    "changeme",
    "secret",
    "iamforgetful",
    "newpassword",
    "IamACompleteIdiot",
    "nothing",
    "nothingagain",
    "iforgot",
    "user",
    "YouWontGuessThisOne",
    "PasswordShmashword",
    "doubleclick",
    "password123",
    "memorysucks",
    "earlyalzheimers",
    "LOL111",
  ];

  let funnyPass =
    funnyPassMaker[Math.floor(Math.random() * funnyPassMaker.length)];
  show_password.innerHTML = funnyPass;
});