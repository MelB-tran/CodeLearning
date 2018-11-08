## FreeCodeCamp Object-Oriented design with javascript
Notes from the O-O module. Some things I have skipped through as I have un grasp de los conceptos already :)

Use of prototype to share properties around multiple objects
Constructors of an object can be used to check what type of object it is

```
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true
```

Manually setting a prototype will erase the constructor property so it has to be manually set

```
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
```

With inheritance, an object must be initialized by getting clone from parent class' prototype (line 44)

```
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype);
```

The constructor of parent class will automatically be set for children objects, so it has to be updated manually... (line 54).
methods can be added after inheritance too (line 56), where  beagle is another function 

```
(same as above lines 33 - 40)

function Dog() { }
Dog.prototype =  Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
}
let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
```


```
```
