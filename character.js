// PART 2:
class Character {
    constructor(name) {
        this.name = name; 
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
    static MAX_HEALTH(){
        let health = this.health = 100;
        console.log(health)
    }
}


export default Character