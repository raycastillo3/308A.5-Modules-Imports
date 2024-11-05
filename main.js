import { adventurer as adventurerObj, Adventurer as AdventurerClass} from "./adventurer.js";
import Character from "./character.js";

// console.log(adventurerObj);
// adventurer.roll(); 


// const robin = new Character("Robin");
// console.log(robin);
// // robin.inventory = ["sword", "potion", "artifact"];
// // robin.companion = new Character("Leo");
// // robin.companion.type = "Cat";
// // robin.companion.companion = new Character("Frank");
// // robin.companion.companion.type = "Flea";
// // robin.companion.companion.inventory = ["small hat", "sunglasses"];

// // console.log(robin.roll());
// // console.log(robin.companion.roll());
// // console.log(robin.companion.companion.roll());

//PART 3:
  const adventurer1 = new AdventurerClass("Robin", "Carpenter", "woodChooper", "Great with the axe");
  console.log(adventurer1);
//   adventurer1.inventory.push("small hat", "sunglasses");
//   console.log(adventurer1.inventory);
//   console.log(adventurer1.duel("john"));



// //create a Companion class with properties and methods to the companions
// class Companion {
//     constructor(name, type){
//         this.name = name;
//         this.type = type; 
//     }
// }

// const companion2 = new Companion("Leo", "cat");
// const adventurer1 = new Adventurer("Robin", "Carpenter", "woodChopper", "Great with the axe", companion2);
// const adventurer2 = new Adventurer("John", "Fighter", "Strength", "A strong warrior", new Companion("Max", "Dog"));

// adventurer1.duel(adventurer2);

// // const companion2 = new Companion("Leo", "cat");
// // const adventurer2 = new Adventurer("Robin", "Carpenter", "Speed", "Great with the axe", companion2);
// // adventurer2.inventory.push("axe", "boots", "water bottle");
// // console.log(adventurer2);
// // console.log(adventurer2.scout());
// // console.log(adventurer2.chooseItem());
// // console.log(adventurer2.checkCoins());
// // console.log(companion2);
// // Character.MAX_HEALTH();
// // console.log(adventurer2);

// // const adventurer3 = new Adventurer("Bob", "Fighter", "Strong", "Great for lifting");


// //PART 5:
// class AdventurerFactory {  
//     constructor (role) {
//       this.role = role;
//       this.adventurers = [];
//     }
//     generate (name) {
//       const newAdventurer = new Adventurer(name, this.role);
//       this.adventurers.push(newAdventurer);
//     }
//     findByIndex (index) {
//       return this.adventurers[index];
//     }
//     findByName (name) {
//       return this.adventurers.find((a) => a.name === name);
//     }
//   }
  
//   const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");



  