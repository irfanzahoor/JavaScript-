class Cricket {
    batting() {
        alert(this.name + " is batting")
    }

    bowling() {
        alert(this.name + "  is bowling")
    }

    fill(n) {
        this.name = n;
    }

}


// In JavaScript we declare obj with new keyword

let playerOne = new Cricket();
playerOne.fill("Babar");
let playerTwo = new Cricket();
playerTwo.fill("Virat");

playerOne.batting();
playerTwo.bowling();