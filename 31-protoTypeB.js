// exp with .__proto__
/*

const animal = {
    eats: true
};

const rabbit = {
    jumps: true
};

// Setting the prototype of `rabbit` to `animal`
rabbit.__proto__ = animal;

console.log(rabbit.eats); // true, inherited from `animal`
console.log(rabbit.jumps); // true, own property of `rabbit`
console.log(rabbit.__proto__ === animal); // true
*/

// Exp with Object.getPrototypeOf

const animal = {
    eats: true
};

const rabbit = Object.create(animal); // `rabbit`'s prototype is `animal`
rabbit.jumps = true;

console.log(rabbit.eats); // true, inherited from `animal`
console.log(rabbit.jumps); // true, own property of `rabbit`

// Using `Object.getPrototypeOf` to check the prototype
console.log(Object.getPrototypeOf(rabbit) === animal); // true
