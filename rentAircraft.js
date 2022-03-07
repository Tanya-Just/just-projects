const Passenger = require('./passenger')

console.log('Welcome aboard');

const dino = new Passenger('DJ Dino', 37);
const michael = new Passenger('DJ Michael', 35);
const donatella = new Passenger('Donatella', 50);
const blond = new Passenger('DJ Blond', 33);

const paxs = [dino, michael, donatella, blond]
dino.interests.push('Music');
dino.interests.push('Video games');
dino.catering.push('standart');
donatella.interests.push('Shoe design');
donatella.children.push('boy 4');
donatella.catering.push('vegan');
michael.interests.push('Music');
michael.catering.push('standart');
blond.children.push('boy 2');
blond.catering.push('standart');


printName = (Passenger) => console.log(Passenger.name);
paxs.forEach(printName); //list of names

console.log(paxs);

const Aircraft = require('./aircraft')
const citationX = new Aircraft('CitationX', 9);
const cj2 = new Aircraft('CJ2', 4);
const j700 = new Aircraft('J700', 11);

const jets = [citationX, cj2, j700];
//console.log(jets);

/*makeFriendsWith = (Passenger) =>
    this.friends.push(Passenger);
   dino.makeFriendsWith(michael);*/
