class Animal {
    constructor(name) {
        this._name = name;
    }

    fly() {
        console.log("Hello I'm Flying!!");
    }

    get getName() {
        return this._name;
    }

    set setName(newName) {
        this._name = newName;
    }
}

let a = new Animal("Tiger");
a.fly();
console.log(a.getName);
a.setName = "Lion";
console.log(a.getName);

let b = 20;


// instance of operator allows to check wether an obj belong to that class or any other class inheriting from it  
console.log(a instanceof Animal);
console.log(b instanceof Animal);