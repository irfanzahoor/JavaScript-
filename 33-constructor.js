// int this we dont need to create fill method we will simply do it in constructor

// in javascript we cannot define multiple constructor of a class like in c++ we have default and parameteized const

class Cricket {

    constructor(name, num) {
        console.log("This is defaulf as well as para const");
        this.name = name;
        this.num = num;
    }

    batting() {
        alert(this.name + " is batting " + this.num)
    }

    bowling() {
        alert(this.name + "  is bowling " + this.num)
    }

}


// In JavaScript we declare obj with new keyword

let playerOne = new Cricket("Babar", 56);
let playerTwo = new Cricket("Virat", 18);

playerOne.batting();
playerTwo.bowling();