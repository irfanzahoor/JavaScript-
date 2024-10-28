let arr = ["IrfanZahoor", 20, 169, 1014, 1041];

// old way of assigning
/*
let name = arr[0];
let num1 = arr[1];
let num2 = arr[2];
*/

// assign IrfanZahoor to name 20 to num1 and 169 to num2 and assigning all left to rest operator and print them
// the vals in rest will be printed as array
let [name, num1, num2, ...rest] = arr;

console.log(name, num1, num2, rest);

// dont want to print 20 and 169
let [name2, , , ...rest2] = arr;

console.log(name, rest2);

// destructuring of objects

let obj = {
    Captain: "Babar Azam",
    no: 56,
};

let { Captain, no } = obj;
console.log(Captain);
console.log(no);
