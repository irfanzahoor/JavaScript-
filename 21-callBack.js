// In callBack function we pass a function in another function like we pass varibales in a function

function player1() {
    console.log("Babar Azam");
}

function player2() {
    console.log("Virat Kohli")
}

function callFun(n1, n2, callback) {
    console.log(n1 + n2);
    callback();
};

let a = 10;
let b = 20;
callFun(a, b, player1);
callFun(a, b, player2);

callFun(a, b, function () {
    console.log("Hello")
})

// ANOTHER EXAMPLE OF CALLBACK 


const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hello Im callBack function");
    document.head.append(sc);

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);



