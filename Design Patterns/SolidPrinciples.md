## Solid Principles of Object-Oriented design    
SRP - Single Responsibility Principle is about ev object having a single responsibility, which should be entirely "encapsulated" in the class - meaning it shouldn't have to use other classes to carry out diff responsibilities. Not dependent.

### Cohesion and Coupling
Ev program/app should strive for high cohesion and lo coupling, where  
- Cohesion is how strongly-related and focuesd are the various responsibilities of a module
- Coupling is the degree to which each program module (classes sometimes) relies on the other modules

### Responsibilities
*definition* changes in behavior from client's pov - a reason to change, difference in usage scenarios  


### Problem analysis
walk through a program that uses classes that depend on other parent classes, where the classes using them do not necessarily use, so any changes have a higher likelihood of introducing issues to the whole program. 
**Solution** multiple small interfaces that abstract out the functionality and also only have one responsibility. So the main programs use them as needed (stitch together), without any depending on the other. In this case, the "Online Order" class using diff itnerfaces that are relevant to the online ordering process

## Summary


## The Open/Closed Principle
*definition* software entities (classes, modules, functions, etc) should be open to --- but closed to  ---

### Overview


### Problem & Analysis
walk thru a "store checkout" program where an important method - calculating the total to pay - uses hardcoded values to calculate total amount, does all calculations within the same method, and no space to abstract it out
any changes to the fees or rates would require going into the source code and changing it, re-building/re-compiling, etc.  
New classes is less likely to introduce new problems (no dependencies at first, no legacy coupling)

### How to achieve
