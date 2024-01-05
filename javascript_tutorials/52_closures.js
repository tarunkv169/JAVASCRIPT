// closure is the combination of a function bundied together with refrences to its surrounding state
// closure help to use lexical(surrounding) variables and functions

function mms1()
{
    let message = "now";

    function mms2()
    {
        console.log("i am fine " + message);
    }

    message = "then";

    return mms2;
}


let a = mms1();
a();             // here u can see  its surrounding message declared also come with return













function return_a()
{

    function x()
    {
        let a = 1;
        console.log(a);

        function y()
        {
            let a = 2;
            console.log(a);

            function z()
            {
                let a = 3;
                console.log(a);
            }

            z()
        }

        y()
    }

    return x;
}


let b = return_a();
b();