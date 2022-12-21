
import superheroes from "superheroes";

import superVillains from "supervillains";

import fileSystem from "fs";
// destination.txt will be created or overwritten by default.
fileSystem.copyFileSync('text.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');

console.log("hello");

console.log(superheroes.random()); 

console.log(superVillains.random());