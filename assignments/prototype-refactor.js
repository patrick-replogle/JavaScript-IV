//Refactored code from Javascript III
 
class GameObject {
  constructor(attributes){
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game.`;
  }
};


class CharacterStats extends GameObject {
  constructor(stats){
    super(stats);
    this.healthPoints = stats.healthPoints;
  }
  takeDamage(){
    return `${this.name} took damage.`;
  }
};
  
class Humanoid extends CharacterStats {
  constructor(attributes){
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}.`;   
  }
};

class Hero extends Humanoid {
    constructor(attributes){
        super(attributes);
        this.armor = attributes.armor;
        this.attack = attributes.attack;
        this.enemyHealth = attributes.enemyHealth;
    }
    fight(){
        return `Our hero ${this.name} will duel with the terrible Drago!`;
    };
    slashed(){
        this.healthPoints = this.healthPoints + this.armor - this.attack;
        if(this.healthPoints <= 0){
        return `${this.name} is dead!`;
        } else {
          return `${this.name} was slashed. Life bar = ${this.healthPoints}/10 left`;
        }
    }
};


class Villain extends Humanoid {
  constructor(attributes){
    super(attributes);
    this.armor = attributes.armor;
    this.attack = attributes.attack;
    this.enemyHealth = attributes.enemyHealth;
  }
  damaged(){
    this.healthPoints = this.healthPoints + this.armor - this.attack;
    if(this.healthPoints <= 0){
    return `${this.name} is dead!`;
    } else {
      return `${this.name} was damaged. Life bar = ${this.healthPoints}/10 left`;
    }
  }
};
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama'],
  language: 'Common Tongue',
});
  
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
   healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});
  
  
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
  });
  
const knight = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Burt',
  team: 'The Good Guys',
  weapons: [
    'Sword',
    'Bow',
  ],
  language: 'Old English',
  armor: 3,
  attack: 6,
  enemyHealth: 50
});
  
const evilKnight = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Drago',
  team: 'The Bad Guys',
  weapons: [
    'Morning Star',
    'Fire Breathing Skulls',
  ],
  language: 'Necronomicon',
  armor: 3,
  attack: 6,
  enemyHealth: 50
});
  
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(knight.fight());
console.log(evilKnight.damaged());
console.log(knight.slashed());
console.log(evilKnight.damaged());
console.log(knight.slashed());
console.log(evilKnight.damaged());
console.log(knight.slashed());
console.log(evilKnight.damaged());
   