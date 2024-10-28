// Lexical scope is like a set of rules that determine where you can use or access certain variables in your code, based on where those variables are written.

function Outer() {
    let name = "IrfanZahoor"
    // console.log("Outer age " + age) //wrong cant access
    function innerOne() {
        let age = 21;
        console.log("Inner One " + name)
        console.log("Inner One Age " + age)
    }
    function innerTwo() {
        console.log("Inner Two " + name)
        // console.log("Inner Two age " + age) //wrong cant access
    }
    innerOne();
    innerTwo();
}
Outer()