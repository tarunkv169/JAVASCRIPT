// biggest drawback of using these is "it pauses the execution of the script for the user to interact"
alert("enter the value of a!");

let a=+prompt("enter the value of a ");

let write=confirm("do you want to write to the page");

if(write)
{
    document.write(a);
}
else
{
     document.write("please allow me to write");
}

