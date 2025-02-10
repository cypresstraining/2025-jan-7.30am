//exmaple for named export 

export class Animal {
    constructor(species) {
      this.species = species;
    }
  
    sound() {
      console.log(`${this.species} makes a sound`);
    }
  }
  
  export const PI = 3.14;//variable export
  
  export function add(a, b) { //function export 
    return a + b;
  }
  