import { adventurer as adventurerObj, Adventurer as AdventurerClass} from "./adventurer.js";
import Character from "./character.js";
import Companion from "./companion.js";

// console.log(adventurerObj);
adventurerObj.roll(); 


const robin = new Character("Robin");
// console.log(robin);

//PART 3:
const adventurer1 = new AdventurerClass("Robin", "Carpenter", "woodChooper", "Great with the axe");
// console.log(adventurer1);


const companion2 = new Companion("Leo", "cat");
// console.log(companion2);

const adventurer2 = new AdventurerClass("Robin", "Carpenter", "woodChopper", "Great with the axe", companion2);
// console.log(adventurer2);

// // const adventurer3 = new Adventurer("Bob", "Fighter", "Strong", "Great for lifting");


// //PART 5:

  
//   const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");



  