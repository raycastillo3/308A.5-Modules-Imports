import Character from "./character.js";
//PART 1:
// const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"]
    // }
    
//create a loop that logs each item in Robin's inventory: 
// for (let item of adventurer.inventory){
//     console.log(item)
// }

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor (name, role, ability, fact, companion) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        //Every adventurer have a special ability.
        this.ability = ability;
        //Every adventurer have an interesting fact. 
        this.fact = fact;  
        
        this.companion = companion;
        //PART 4: write a check to the constructor of the Adventurer class
        Adventurer.ROLES.forEach((rol) =>{
            if (this.role.toLowerCase() === rol.toLowerCase()){
                console.log(`The role ${this.role} matches one of our default roles!`);
            }
        })
    }

    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    duel(adventurer) {
        console.log(`Duel starts between ${this.name} and ${adventurer.name}!`);

        while (this.health > 50 && adventurer.health > 50) {
            const roll1 = this.roll();
            const roll2 = adventurer.roll();

            if (roll1 > roll2) {
                adventurer.health -= 1;
                console.log(`${this.name} wins the round! ${adventurer.name} loses 1 health. Current health: ${this.name} ${this.health}, ${adventurer.name} ${adventurer.health}`);
            } else if (roll2 > roll1) {
                this.health -= 1;
                console.log(`${adventurer.name} wins the round! ${this.name} loses 1 health. Current health: ${this.name} ${this.health}, ${adventurer.name} ${adventurer.health}`);
            } else {
                console.log(`It's a tie! Both adventurers remain the same health: ${this.health}`);
            }
        }
        if (this.health <= 50) {
            console.log(`${this.name} has been defeated!`);
            console.log(`${adventurer.name} wins the duel!`);
        } else {
            console.log(`${adventurer.name} has been defeated!`);
            console.log(`${this.name} wins the duel!`);
        }
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result; // Return the roll result for comparison
    }
  }

export {adventurer, Adventurer}