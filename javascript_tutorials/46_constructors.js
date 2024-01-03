// class railwayform{
//     // constructor is called when obj is created
//     constructor(givenname,train_no,address){
//         console.log("constructor called...." + givenname + " " + train_no);
//         this.name = givenname;
//         this.train_no = train_no;
//         this.address = address;
        
//     }
//     submit(){
//         console.log(this.name + ": your form is submitted with train_no " + this.train_no)
//     }
    
//     cancel(){
//         console.log(this.name + ": your form is cancelled with train_no " + this.train_no)
//     }
    
// }

// let harryform = new railwayform("harry",1020,"punjab");
// let rohanform = new railwayform("rohan",1033,"haryana");


// harryform.submit();
// rohanform.submit();
// rohanform.cancel();










// ------************ inheritance using ( extends keyword ) ************** --------------------------


// class animal1{

//     constructor(name){
//         this.name =name;
//     }

//     eat(){
//         document.write(this.name + " is eating ")
//     }

//     shout(){
//         document.write(this.name + " is shouting")
//     }
// }


// class monkey1 extends animal1{

//       jump(){
//         document.write(this.name + " is jumping");
//       }
// }

// let bruno = new animal1("bruno");
// let chimpo = new monkey1("chimpo");

// bruno.eat();
// chimpo.eat();
// chimpo.jump();









//------************ method overriding using( super keyword )  ************-----------------------
class animal2{

    constructor(name){
        this.name =name;
    }

    eat(fruit){
        document.write(this.name + " is eating " + fruit)
    }

    shout(){
        document.write(this.name + " is shouting")
    }
}


class monkey2 extends animal2{

      jump(){
        document.write(this.name + " is jumping");
      }

      eat(){
        super.eat("banana");
      }
}



let shimpo = new monkey2("shimpo");

shimpo.jump();
shimpo.eat();





//----------------************CONSTRUCTOR OVERLOADING ***********-----------------------------

class animal3{

    constructor(name){
        console.log(name + " is an animal ")
        this.name =name;
    }

    eat(fruit){
        document.write(this.name + " is eating " + fruit)
    }

    shout(){
        document.write(this.name + " is shouting")
    }
}


class monkey3 extends animal3{

    // constructor(...args){           // if constructor is not in child class, then it is called automatically
    //        super(...args)          // but if we want to create constructor in our child class then we can create like this (super keyword is must)
    // }

      constructor(name){
        super(name);
        console.log(name + " is an monkey ");
      }

      jump(){
        document.write(this.name + " is jumping");
      }

      eat(){
        super.eat("banana");
      }
}



let ghimpo = new monkey3("ghimpo");

ghimpo.jump();
ghimpo.eat();



// ------------********** static method *************----------------------------
// static method are used to implement func that belong to a class as whole and not to any paritcular obj ...so it is called by class name not other

class animal4{

       constructor(name){
           this.name = animal4.capitalize(name);
       }
       
       walk(){
           console.log("animal " + this.name + " is walking ");
       }

       static capitalize(name){
           return  name.charAt(0).toUpperCase() + name.substr(1,name.length);
       }
}

let sheru = new animal4("sheru");

sheru.walk();


//-----------************* getters and setters and instanceof *************------------------

class animal5{

    constructor(name){
        this._name = name;
    }
    
    walk(){
        console.log("animal " + this.name + " is walking ");
    }

    get name(){
        return this._name;
    }

    set name(newname){
        this._name = newname;
    }

}

class rabbit extends animal5{
    eatcarrot(){
        console.log("eating rabit");
    }
    
}

// let fheru = new animal5("fheru");
let fheru = new rabbit();

console.log(fheru.name);
fheru.name = " billu ";
console.log(fheru.name);

let c =55;

console.log(fheru instanceof animal5);
console.log(fheru instanceof rabbit);
console.log(c instanceof animal5);
