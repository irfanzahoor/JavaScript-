/*
Create a faulty Calculator 

This will perform following operations 
1. take 2 input from user 
2 Perform wring operations 

+ --> -
* --> +
- --> /
/ -->*

It perform 10% times wrong operations 
*/

// matlab jab random 0.1 sy kam hoga tb wrong operations perform hongy

let random = Math.random();
console.log(random);

let num1 = prompt("Enter number 1 ");
let opt = prompt("Enter operation ");
let num2 = prompt("Enter number 2 ");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*"
}



if (random > 0.1) {
    alert(`The result is ${eval(`${num1} ${opt} ${num2}`)}`);
}
else {
    opt = obj[opt];
    alert(`The result is ${eval(`${num1} ${opt} ${num2}`)}`);
}