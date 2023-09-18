import generateName from 'sillyname';
import superheroes from "superheroes";

var sillyName = generateName();
let mySuperHeroName = superheroes.random();
console.log(`My silly name is ${sillyName}`);

console.log(`I am ${mySuperHeroName}`);
