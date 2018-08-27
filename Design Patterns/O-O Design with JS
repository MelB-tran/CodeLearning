## FreeCodeCamp Object-Oriented design with javascript
Notes from the O-O module. Some things I have skipped through as I have un grasp de los conceptos already :)

Use of prototype to share properties around multiple objects
Constructors of an object can be used to check what type of object it is
``
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true
``
Manually setting a prototype will erase the constructor property so it has to be manually set 
`` 
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
``
With inheritance, an object must be initialized/set a specific way in order for inheritance to take effect