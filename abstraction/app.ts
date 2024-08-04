//  ABSTRACTION

 abstract class Animal{  // parent class

    //create methods without body or implement
    abstract makeSound() 
    abstract speed()

    // method for child
    breath(){  
        console.log("this animal is breathing");
    }

    //abstract property
    abstract name:string; 
    abstract color:string;
}


//inheritance
class tiger extends Animal{ // child class
    makeSound(){  // method with body
        console.log("roar !!!");
    }
    speed(){
        console.log("speed is 100");
    }
    name:string;
    color:string;
}

//inheritance
class cat extends Animal{ // child class
    makeSound(){  // method with body
        console.log("meow !!!");
    }
    speed(){
        console.log("speed is 20");
    }
    name:string;
    color:string;
}

// create objects
let tiger1 = new tiger();
let cat1 = new cat();

// print properties values
tiger1.name = "sultan";
tiger1.color = "orange";
console.log(tiger1);

cat1.name = "tom";
cat1.color = "blue";
console.log(cat1);

// invoke method
cat1.makeSound()
cat1.speed()
cat1.breath()
tiger1.makeSound()
tiger1.speed()

