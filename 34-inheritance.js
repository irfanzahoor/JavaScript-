// we have a class animal now we want to create a class monkey and add a func eatBanana to it and we also want to get all features of animal this is done by inheritance using extend keyword

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running!");
    }
    eat() {
        console.log(this.name + " is eating!");
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log("Kela kha gya!!!")
    }
}

let m = new Monkey("Jaggu", "blue");
m.run();
m.eat();
m.eatBanana();

