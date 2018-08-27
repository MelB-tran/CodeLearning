## FreeCodeCamp Object-Oriented Design with Javascript

Javascript use of an Object's prototype for inheritance
whatever child objects are under it will have parent's properties - but must be added to that object's "protoype"
all classes are of type Object, which includes prototype. To actually inherit these prorperties the code is as follows:
``
let animal = Object.create(Animal.prototype); // where Animal is a "parent" object with a prototype that has properties
``

From FreeCodeCamp's "Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent"
