/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// const GameObject = function(attributes){
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//   };
  
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
//   };
  
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

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   const CharacterStats = function(stats){
//     this.healthPoints = stats.healthPoints;
//     GameObject.call(this, stats);
//   };
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage.`;
//   };

class CharacterStats extends GameObject {
    constructor(stats){
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
};
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
//   const Humanoid = function(attributes){
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language
//     CharacterStats.call(this, attributes);
//   };
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function(){
//     return `${this.name} offers a greeting in ${this.language}.`;
//   };
  
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


  // Humanoid.prototype = Object.create(CharacterStats.prototype);
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
//   const Hero = function(attributes){
//     this.armor = attributes.armor;
//     this.attack = attributes.attack;
//     this.enemyHealth = attributes.enemyHealth;
//     Humanoid.call(this, attributes);
//   };
  
//   Hero.prototype = Object.create(Humanoid.prototype);

  
//   Hero.prototype.slashed = function(){
//     console.log(this.healthPoints = this.healthPoints + this.armor - this.attack);
//     if(this.healthPoints <= 0){
//       return `${this.name} is dead!`
//     }
//   };

class Hero extends Humanoid {
    constructor(attributes){
        super(attributes);
        this.armor = attributes.armor;
        this.attack = attributes.attack;
        this.enemyHealth = attributes.enemyHealth;
    }
    battleStart(){
        return `Our hero ${this.name} will duel with the terrible Drago!`;
    };
    slashed(){
        console.log(this.healthPoints = this.healthPoints + this.armor - this.attack);
        if(this.healthPoints <= 0){
        console.log(`${this.name} is dead!`);
        }
    }
};

//   const Villain = function(attributes){
//     this.armor = attributes.armor;
//     this.attack = attributes.attack;
//     this.enemyHealth = attributes.enemyHealth;
//     Humanoid.call(this, attributes);
//   };
  
//   Villain.prototype = Object.create(Humanoid.prototype);
  
//   Villain.prototype.damaged = function(){
//     console.log(this.healthPoints = this.healthPoints + this.armor - this.attack);
//     if(this.healthPoints <= 0){
//       return `${this.name} is dead!`
//     }
//   };

class Villain extends Humanoid {
    constructor(attributes){
        super(attributes);
        this.armor = attributes.armor;
        this.attack = attributes.attack;
        this.enemyHealth = attributes.enemyHealth;
    }
    damaged(){
        console.log(this.healthPoints = this.healthPoints + this.armor - this.attack);
        if(this.healthPoints <= 0){
        console.log(`${this.name} is dead!`);
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
        'Staff of Shamalama',
      ],
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
    console.log(knight.battleStart());
    evilKnight.damaged();
    knight.slashed();
    evilKnight.damaged();
    knight.slashed();
    evilKnight.damaged();
    knight.slashed();
    evilKnight.damaged();
   
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!