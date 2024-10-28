// we cannot overwrite Math.PI
//bcz in behind the scene in c++ its writeable and some other properties are hard coded as false
const pie = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(pie)

const myObj = {
    name: "IrfanZahoor",
    age: 21,
    incAge: () => {
        age++;
    }
}


// Object.defineProperty(myObj, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
console.log(Object.getOwnPropertyDescriptor(myObj, "name"))

// iterate obj using for of
for (let [key, value] of Object.entries(myObj)) {
    if (typeof value !== "function") {
        console.log(key, value)
    }
}

