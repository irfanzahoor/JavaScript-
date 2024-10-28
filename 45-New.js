let obj = {
    name: "IrfanZahoor",
    age: 21,
    uni: "UCP",
    getDetails: function () {
        console.log(this)  //this will give us current object
        console.log(this.name)  //THIS will refer to current obj name
    }
}

console.log(this)  //now THIS give us undefined
// console.log(this)  //name THIS in browser console will give us window object


function User(userName, age) {
    this.userName = userName;
    this.age = age;
}

const userOne = new User("Babar", 56)
const userTwo = new User("Virat", 18)
console.log(userOne)
console.log(userTwo)
// Instanceof is an operator used to check whether an object is an instance of a particular constructor or class.
console.log(userOne instanceof User);  // true
console.log(userTwo instanceof User);  // true
// console.log(userTwo instanceof User2);  // false
