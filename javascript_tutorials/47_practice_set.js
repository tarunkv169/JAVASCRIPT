// create a javascript class to create a complex number .create a constructor to set the real and the imaginary part
// and add two complex no.s
class complex{

    constructor(real,imaginary){
        this.real = real ;
        this.imaginary = imaginary;
    }

    complex_no(){
        console.log(this.real + " + " + this.imaginary + "i");
    }

    add(c2){
        this.real = this.real + c2.real;
        this.imaginary = this.imaginary + c2.imaginary;
    }
}


let c1 = new complex(3,4);
let c2 = new complex(4,3);
c1.add(c2);
console.log(`${c1.real} + ${c1.imaginary} i`);


// create a class student from a class human. overide a method and see changes

class human{
    constructor(name){
        this.name = name;
    }
    
    
    gender(gender_detail){
         console.log(`${this.name} is a ${gender_detail}`);
    }

}

class student extends human{
    
    gender(){
        super.gender("female")
    }
}


let robo = new human("robo");
robo.gender("male");

let robina = new student("robina");
robina.gender();


