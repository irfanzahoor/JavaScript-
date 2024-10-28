// This is the example of prototypal inheritance

const User = {
    name: true
}

const Teacher = {
    isAvailable: true,
    __proto__: User,
}

const Student = {
    isPresent: true,
}

const App = {
    isWorking: true
}

Student.__proto__ = Teacher  //old method
Object.setPrototypeOf(App, Student) //new method

console.log(App.name)
console.log(App.isAvailable)
console.log(App.isPresent)
console.log(App.isWorking)