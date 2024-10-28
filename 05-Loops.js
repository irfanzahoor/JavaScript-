console.log("Loop");


// For Loop
for (let i = 0; i < 10; i++) {
    console.log(i + " ");
}

let obj = {
    name: "IrfanZahoor",
    role: "Web Developer",
    company: "MDS"
}

// For in Loop
for (const key in obj) {
    const element = obj[key];
    console.log(element);
}


// For of Loop
for (const ch of "IrfanZahoor") {
    console.log(ch);
}


let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);