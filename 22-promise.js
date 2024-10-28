// this is single promise
let prom = new Promise((resolve, reject) => {

    let a = Math.random();
    console.log(a)

    if (a < 0.5) {
        reject("Default Promise is Rejected");
    }

    else {
        resolve("Default Promised fulfilled");
    }
})

prom.then((arg) => {
    console.log(arg);
}).catch((arg) => {
    console.log(arg)
})


// now we will see 2 promises reolve and catch
let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    console.log(a)

    if (a < 0.5) {
        reject("Promise 1 is Rejected");
    }

    else {
        resolve("Promised 1 fulfilled");
    }
})

let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    console.log(a)

    if (a < 0.5) {
        reject("Promise 2 is Rejected");
    }

    else {
        resolve("Promised 2 fulfilled");
    }
})

let prom3 = Promise.all([prom1, prom2]); // if any one of 2 promise is rejected it will throw error if both fulfilled it will give prom array
prom3.then((arg) => {
    console.log(arg);
}).catch((err) => {
    console.log(err);
})

let prom4 = Promise.allSettled([prom1, prom2]);  //this will give result which promise rejected and which is fullfilled with reason
prom4.then((arg) => {
    console.log(arg);
}).catch((err) => {
    console.log(err);
})

let prom5 = Promise.any([prom1, prom2]); //thorw aggregate error if promise rejected
prom5.then((arg) => {
    console.log(arg);
}).catch((err) => {
    console.log(err);
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ user: "IrfanZahoor", age: 21 })
    }, 1000);
}).then((data) => {
    console.log(data)
})


// using then chain
new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ name: "Babar Azam", num: 56 })
        }
        else {
            reject("The promise is rejected")
        }
    }, 1000);
})
    .then((data) => {
        return data.name;
    })
    .then((dataTwo) => {
        console.log(dataTwo)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Every this is completed")
    })


// using async await
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ name: "Babar Azam", num: 56 })
        }
        else {
            reject("The promise is rejected")
        }
    }, 1000);
})

async function asyncFun() {
    try {
        const response = await promise;
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}
asyncFun()

