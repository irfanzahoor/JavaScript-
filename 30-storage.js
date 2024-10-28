let key = prompt("Enter key");
let value = prompt("Enter value");

localStorage.setItem(key, value);
console.log(localStorage.getItem(key));

if (key == null) {
    localStorage.removeItem(key);
}

// localStorage.clear();

console.log("The length of loacl storega is " + localStorage.length)