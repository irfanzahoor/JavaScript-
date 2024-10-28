// we make a function that return a promise
let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 4000);
    })
}


// this is a async function print the value of a using await
/*
let fun = async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
}
fun();
*/

// to invoked the above function immediately we use IIFE
(async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})();