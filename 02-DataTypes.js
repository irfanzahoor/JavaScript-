
var n1 = 10;
n1 = n1 + 1;
var n2 = 20;
var ch = "IrfanZahoor";
console.log(typeof (ch));
console.log(typeof n1, typeof n2);


// CONST
// cannot redeclared and update
// const must be intialized at time of declaration
const n3 = 10;
// n3 = n3 + 1  // wrong
console.log(n3);


// VAR vs LET

//  var is have a global scope and let have only within its block

var a1;
var a1;  //can be declared again within same scope
let a2;
// let a2;  //can not be declared again within same scope


// var and const diff
var numVar = 56;

{
    var numVar = 100;
    console.log(numVar)
}

console.log(numVar)

var numVar = 156;

{
    var numVar = 100;
    console.log(numVar)
}

console.log(numVar)

let numLet = 20;

{
    let numLet = 169;
    console.log(numLet)
}
console.log(numLet);