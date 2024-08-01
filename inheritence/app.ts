class animal{ // parent class or base class
    name:string;
    color:string;

    eat(){
        console.log("this animal is eating");
    }
    sleep(){
        console.log("this animal is sleeping");  
    }
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
}

class tiger extends animal{ // child class or sub class
    sound(){
        console.log("roar");
    }
    speed(){
        console.log(`${this.name} speed is 100km per hour`);
        
    }

    constructor(name:string,color:string){
        super(name,color)
    }
}

class cat extends animal{ // child class or sub class
    sound(){
        console.log("meow");
    }
    speed(){
        console.log(`${this.name} speed is 25km per hour`);
        
    }
    drink:string;

    constructor(name:string,color:string,drink:string){
        super(name,color)
        this.drink = drink
    }
}

// make an object of tiger & cat class
let tiger1 = new tiger("prada","orange");
let cat1 = new cat("stela","black","milk");

// push name & color values of cat & tiger class properties
// tiger1.name = "commando";
// tiger1.color = "yellow";
cat1.name = "angela";
// cat1.color = "white";

// print tiger & cat properties
console.log(tiger1);
console.log(cat1);

// call both speed methods
tiger1.speed()
cat1.speed()

// only print name
console.log(tiger1.name)
