// Map Filter Reduce in JavaScript

let arr = [1, 12, 34, 7, 10];

// -----first way of doing this-------
let newArr = [];  //now we want to store sq val in new array

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element ** 2);
}

console.log(newArr);

// -----second way of doing this-------
let newArray = arr.map((e) => {
    return e ** 2;
})

console.log(newArray);

// map method iterates over each element of array and applies a func to it return sq vals



// FILTER METHOD

let hundVal = (e) => {
    if (e > 100) {
        return true;
    }
    return false;
}

console.log(newArray.filter(hundVal));

// REDUCE METHOD

let arr2 = [1, 2, 3, 4, 5];

const red = (a, b) => {
    return a * b;
}

console.log(arr2.reduce(red));



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (prevVal, currentValue) {
    return prevVal + currentValue;
}, 0);
console.log(sum);


let currVal = 1;
const mul = numbers.reduce = (prevVal, currVal) => {
    return prevVal ** currVal;
}

console.log(mul);

const player = ["IrfanZahoor", "Danish", "Babar"];

player.forEach((e) => {
    console.log(e);
})