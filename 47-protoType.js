let myArr = [1, 2]

let myObj = {
    name: "IrfanZahoor",
    num: 20
}

// Now we will add a property in base object to that every func array  obj and string can access this property
Object.prototype.addIrfanZahoor = () => {
    console.log("IrfanZahoor is present in base Object")
}

// But if we ass a property in Arrays that only arrays can have its access not obj fun and string
Array.prototype.arrIrfanZahoor = () => {
    console.log("IrfanZahoor is only in arrays")
}

myArr.addIrfanZahoor()
myObj.addIrfanZahoor()

myArr.arrIrfanZahoor()
// myObj.arrIrfanZahoor() //this will give 