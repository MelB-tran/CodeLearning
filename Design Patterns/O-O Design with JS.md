## FreeCodeCamp Object-Oriented design with javascript
Notes from the O-O module. Some things I have skipped through as I have un grasp de los conceptos already :)
Further material from [this dev article]()  

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

With inheritance, it must be explicitly declared on child object initialization for inheritance to take effect  
``Object.create`` allows you to create an object which will delegate to another object on failed lookups (it can consult another object to check if it has that property),
in this case the parent objects
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

Once inheritance is declared though, the top-most parent constructor takes precedence, so the parent constructor must be set manually (line 55)
```
(same as above lines 33 - 40)

function Dog() { }
Dog.prototype =  Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
``` 

You can use the ``new`` keyword to accomplish pretty much the same as setting functions in ``prototype``, and using ``Object.create``. As well as being able to use the ``this`` keyword and 