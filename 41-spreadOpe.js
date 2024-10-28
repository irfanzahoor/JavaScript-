

let arr = [1, 2, 3];
let obj = { ...arr }; //this will convert arr to obj
console.log(arr);
console.log(obj);

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...arr));


// print this obj using spread operator and change the fav nm
let objOne = {
    name: "IrfanZahoor",
    age: 21,
    favNum: 169,
}

console.log({ ...objOne, favNum: 20 });

// Spread operator Extend iterable into individual elements

let arr1 = [10, 20, 30, 40]
console.log(arr1) // this will print as in array
console.log(...arr1) // this is spread operator it will print number but not in array
console.log([...arr1]) // ye dubara array ban gya 

let arrayOne = [1, 2, 3, 4];
let arrayTwo = [5, 6];

// let arrayThree = arrayOne.concat(arrayTwo);
// same concatination can be done by spread opertaor

let arrayThree = [...arrayOne, ...arrayTwo]
console.log(arrayThree);


// combining objects
let obj1 = {
    name: "IrfanZahoor"
}
let obj2 = {
    age: 20
}

let obj3 = {
    ...obj1, ...obj2
}

console.log(obj3)



let a1 = 1
let b1 = 100
let r1_100 = a1 + (b1 - a1) * Math.random();