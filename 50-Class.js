
/*
class Cricket {
    constructor(name, num) {
        this.name = name;
        this.num = num;
    }

    getName() {
        return this.name;
    }
    getNum() {
        return this.num;
    }
}
    */

// const objOne = new Cricket("Babar", 56)
// console.log(objOne.getName())
// console.log(objOne.getNum())

// BEHIND THE SCENE

function Cricket(name, num) {
    this.name = name
    this.num = num;
}

Cricket.prototype.getName = function () {
    return this.name;
}
Cricket.prototype.getNum = function () {
    return this.num;
}

const objTwo = new Cricket("Virat", 18)
console.log(objTwo.getName())
console.log(objTwo.getNum())