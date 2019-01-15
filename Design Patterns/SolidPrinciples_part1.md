# Solid Principles of Object-Oriented design    
Course Notes from Plurasight course -
S - SRP  
O - Open/Closed  
L - Liskov Substitution  
I - Interface Segregation  
D - Dependency Inversion

## SRP - Single Responsibility Principle 
is about ev object having a single responsibility, which should be entirely "encapsulated" in the class - meaning it shouldn't have to use other classes to carry out diff responsibilities. Not dependent.

### Cohesion and Coupling
Ev program/app should strive for high cohesion and lo coupling, where  
- Cohesion is how strongly-related and focuesd are the various responsibilities of a module
- Coupling is the degree to which each program module (classes sometimes) relies on the other modules

### Responsibilities
*definition* changes in behavior from client's pov - a reason to change, difference in usage scenarios  
Mapping:  
Requirements changes => responsibilities  
More responsibilities => more likelihood of change  
Multiple responsibilities within a class => ?
More classes a change affects => more likely change will introduce errors

### Problem analysis
walk through a program that uses classes that depend on other parent classes, where the classes using them do not necessarily use, so any changes have a higher likelihood of introducing issues to the whole program.  
**Solution** multiple small interfaces that abstract out the functionality and also only have one responsibility. So the main programs use them as needed (stitch together), without any depending on the other. In this case, the "Online Order" class using diff itnerfaces that are relevant to the online ordering process

### Summary
- Following Single Responsibility Principle leads to lower coupling (each program module relying on other modules) and higher cohesion (strongly-related and focused responsibilities of a module)  
- Many small classes with distinct responsibilities => more flexibility
**Related Fundamentals (a continuaci�n)**
- Open/Closed Principle
- Interface Segregation Principle
- Separation of Concerns

## The Open/Closed Principle
*definition* software entities (classes, modules, functions, etc) should be open for extension but closed to  modification  
be able to extend with new functionality and classes without modifying the source 

### Overview
How do you change behavior without changing code exactly? Relying on abstractions. There's no limit to variety of implementations of each abstraction (how? more explanation needed)  
In .NET this can be accomplished with interfaces and abstract base classes, in procedural programming, some level of OCP can be achieved thru parameters (como?)
New classes are less likely to introduce new problems (no dependencies at first, no legacy coupling)
### Problem & Analysis
walk thru a "store checkout" program where the `Cart` class has a price calculation method that figures out the total to pay - with hardcoded values to calculate total amount, does all calculations within the same method, and no space to abstract it out
any changes to the fees or rates would require going into the source code and changing it, re-building/re-compiling, etc.  

### How to achieve
on top of being a "cart", this class also does pricing calculations. So theres an interface created for this that is then added as a `private readonly` property in the `Cart` class. This new interface *only* calculates the price 
```
public interface IPricingCalculator {
    decimal CalculatePrice(OrderItem item);
}
```
So each price rule is added as a diff class, based on this interface (example buy 4 or 5 get 1 free) but the original cart class remains untouched. 

Method in `Cart` class, where you get `total amount`  
```
    public decimal TotalAmount(){
        var total = 0m;
        foreach(var orderItem in Items){ //Items is a public property in the class
            // _pricingCalculator is a implementation of the PricingCalculator class (which initializes a list of IPriceRule objects and has a "CalculatePrice" method that runs "calculatePrice" for each matched item)
            total += _pricingCalculator.CalculatePrice(orderItem);
            // more rules are coming
        }
        return total;
    }
```
the only code that really had to be touched was the "CalculatePrice" method inside each specific class inheriting `IPriceRule`

### Conclusions
Si sabes por propia experiencia that a particular type of change is likely to recur, you can use OCP as a pre-emptive measure  

if there's more than one change, refactor to achieve OCP  
no design can be closed to all changes tho

## Liskov Substitution Principle
Subtypes (child) must be substitutable for their (parent) base types, proper use of polymorphism. 
Child classes must not  
1. Remove class behavior  
2. Violate base class invariants (see más abajo)
3. should not require calling code to identify if it's diff from their base type

Old OOP uses *IS-A* to describe child classes' relationship to base class
LSP suggest *IS-A* should be replaced with *IS-SUBSTITUTABLE-FOR* 

**Invariants**
1. Reasonable assumptions of behaviors by clients
2. Can be expressed as preconditions and postconditions for methods
3. Unit tests are used to specify expected behavior of method or class 
4. *Design By Contract* makes pre- and post- conditions explicit within the code
5. Derived clases must violate constraints define by base class 

### Demo
Rectangle class (width and height) -> Square (width, height with setters and getters)
AreaCalculator class (calculateArea , takes Rectangle or Square object)
Unit Tests walk-throughs:
- test area for `Rectangle` and `Square` objects initialized with corresponding types - passes
- test method creates new `Rectangle` object as `Square` object, and assumes area calculated to be 20, but isn't because Area is calculated differently for a `Square` object - violating this principle
- another issue with this design is violating "tell don't ask" rules. (two calculateArea methods) behavior de-coupled from state - *state* from `Rectangle` height and width is contained within `Rectangle` class and its *behavior* is contained within `AreaCalculator`. 
- Can argue this meets standards of SRP, *but* `Rectangle` lacks cohesion - methods depending on `Rectangle` object are moved to a class which can't exist on its own (in this case `AreaCalculator`)
- Push responsibility for calculating area to `Rectangle` or `Square` classes and abstract class `Shape` without an area method that both child inherit, but this requires `if/then` check which would affect OCP as you would have to edit the `if/then` clauses every time a new shape is added....

### The Problem & other smells
- Non-substitutable code breaks polymorphism
- Client code expects child classes to work in place of their base class
- "Fixing" substitutability problems by adding if-then or switch statement becomes maintenance issue and violates OCP
- 0ther violations that pop up are cild classes not implementing all methods from a Base class

### Demo - Refactoring to a Better Design 
- Add a `public abstract int Area();` method to your base `Shape` class, and override it in child classes
- This abstraction into shape also makes `Square` and `Rectangle` no longer interchangeable
- Calculating Area for multiple shapes won't violate OCP because that particular method wouldn't have to be updated (if-else)
### When do we fix LSP?
- If you notice issues like those under "The Problem & other smells"
- Noticing the OCP violations LSP violations cause, como por ejemplo having to explicitly check which type an object is because the methods aren't inheritable and diff ones have to be called (i.e. Don't interrogate objects for their internals - might be better to move that behavior to the object itself). 
### LSP Tips
Tell the object what you want it to do and use its *own internal* state 

**Consider Refactoring to a new Base Class**  
- Cuando dos clases comparten mucho behavior pero *no* son substitutable  
- Crea una tercera clase both can derive from  
- Asegura substitutability is retained between each class and the new base through Unit Testing  

[Part 2 notes of this Course](/CodeLearning/Design Patterns/SolidPrinciples_part2.md)
