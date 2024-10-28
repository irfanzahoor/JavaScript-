// In this below example we have a function that return a promise after 4 seconds and we have 4 console.log() this will one asynchronously mean task 1 to 4 will be done before promise fullilled in 4s  so we want that task3 and 4 should not done before promise fullfilled we can also use then and catch for it but we eill use async and await 

/*
function callData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise is fullfilled");
            resolve();
        }, 4000);
    })
}

console.log("Task 1 done");

console.log("Taks 2 done");

let data = callData();

data.then(() => {
    console.log(data);
    console.log("Task 3 done");
    console.log("Task 4 done");
})
*/

// ASYNC AWAIT

async function callData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise is fullfilled");
            resolve();
        }, 4000);
    })
}


async function main() {


    console.log("Task 1 done");
    console.log("Taks 2 done");

    let data = await callData(); //we write await now this will wait for callData func and then execute below code 

    console.log(data);
    console.log("Task 3 done");
    console.log("Task 4 done");
}

main();