class Player {
    constructor(name) {
        // this.name = name.toUpperCase();
        this.name = name;
    }

    batsman() {
        console.log(Player.Capitalize(this.name) + " is the best batsman in the world");
    }

    // static method belong to implement a function belongs to a particular class as a whole not to any object
    static Capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}


let py1 = new Player("IrfanZahoor");
py1.batsman();