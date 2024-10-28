let num1 = prompt("ENter first number ");
let num2 = prompt("ENter second number ");


if (isNaN(num1) || isNaN(num2)) {
    throw SyntaxError("SOrry not allowed");
}

function main() {

    try {
        document.write((parseInt(num1) + parseInt(num2)) * x);
    } catch (error) {
        console.log("Error agya hai bahi ");
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }

    finally {
        console.log("Files closed and everything removed");
    }
}
main();

// jab func kuch return krdy tou nechy ka code nai chlta lkin agr hum chahty hain k return k baad b nevy ha chly tou hum finally use krty hain