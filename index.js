// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat("Ralph");
console.log(cats);

cats.length = 0
cats.push("Milo", "Otis", "Garfield");
console.log(cats);


function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");
console.log(cats);

cats.length = 0
cats.push("Milo", "Otis", "Garfield");
console.log(cats);


function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
console.log(cats);


function destructivelyRemoveFirstCat() {
    return cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);

cats.length = 0
cats.push("Milo", "Otis", "Garfield");
console.log(cats);


function appendCat(name) {
     return [...cats, name];
}
console.log(appendCat("Broom"));


function prependCat(name) {
    return [name, ...cats];
}
console.log(prependCat("Arnold"));


function removeLastCat() {
    return cats.slice(0, -1);
}
console.log(removeLastCat());

function removeFirstCat() {
    return cats.slice(1);
}
console.log(removeFirstCat());