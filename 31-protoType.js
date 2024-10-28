// Object one
let PlayerOne = {
    babar: () => {
        console.log("I am Babar Azam");
    }
};

// Object Two
let PlayerTwo = {
    virat: () => {
        console.log("I am Virat Kohli");
    }
};

// Set the prototype of PlayerOne to be PlayerTwo
PlayerOne.__proto__ = PlayerTwo;

// Ab PlayerOne PlayerTwo ky methods ka access bhi ly skyga
PlayerOne.babar();
PlayerOne.virat(); 
