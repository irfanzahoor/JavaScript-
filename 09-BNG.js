/*
Create a busines name by combining 3 words adjavtive , shop name , and another word

1.Adjavtive
Crazy
Amazing
Fire

2.Shop name
Food
Engine
Clothes

3. Another Word
Bros
Limited
Hub

*/


let rand = Math.random();
let first, second, third;


// generating first name
if (rand < 0.33) {
    first = "Crazy"
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing"
}
else {
    first = "Fire"
}

// generating second name
rand = Math.random();
if (rand < 0.33) {
    second = "Food"
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Engine"
}
else {
    second = "Clothes"
}

// generating first name
rand = Math.random();
if (rand < 0.33) {
    third = "Bros"
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}

document.write(`${first} ${second} ${third}`);




