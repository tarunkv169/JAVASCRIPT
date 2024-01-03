class railwayform{
    submit(){
        console.log(this.name + ": your form is submitted with train_no " + this.train_no)
    }

    cancel(){
        console.log(this.name + ": your form is cancelled with train_no " + this.train_no)
    }

    fill(givenname,train_no){
       this.name = givenname;
       this.train_no = train_no;
    }
}

let harryform = new railwayform();
let rohanform = new railwayform();

harryform.fill("harry",1020);
rohanform.fill("rohan",1033);
harryform.submit();
rohanform.submit();
rohanform.cancel();



