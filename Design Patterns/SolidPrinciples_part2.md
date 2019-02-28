# Solid Principles of Object-Oriented design    
Course Notes from Plurasight course - [See Part 1](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md)  
[S - SRP (part 1)](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#srp---single-responsibility-principle)  
[O - Open/Closed (part 1)](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#the-open-closed-principle)  
[L - Liskov Substitution (part 1)](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#liskov-substitution-principle)  
[I - Interface Segregation](#the-interface-segregation-principle)  
[D - Dependency Inversion](#the-dependency-inversion-principle-pt-1)  
[D - Don't Repeat Yourself](#the-dont-repeat-yourself-principle-pt-1)  

## The Interface Segregation Principle
ISP - clients should not be forced to depend on unused methods  
**corollary** - prefer small, cohesive interfaces to "fat" interfaces 
Interface - non-implementable type representing public methods and properties. Public interface of a class

### The Problem
Walk-through a "Membership Provider", which has a very large interface.  
- LoginControl: only uses "ValidateUser" method in fat "MembershipProvider" interface. So creating a custom membership provider based off that interface, the rest of that interface would have to be implemented.
- Example no. 2: ``AboutPage`` that only needs a ``ApplicationName`` and ``AuthorName`` but instead forced to deal with large ``ConfigurationSettings`` class.

### Demo 
Example no. 2  
**1st Refactor**
Create a folder for Refactoring (Configuration2), adding new public class ``AboutPage`` that takes in a configuration file in the constructor for the class instead. It defaults to using a default ``Configurationsettings.Settings`` property from the pre-refactored class ``Configuration1`` . Otherwise, it takes an ``IConfigurationSettings`` object that *only* handles stuff specific to configuration.
In test method, you can test only for the Author name and title contents, using this interface into a new ``Settings`` class (but you're still having to implement the rest of unused methods in the class)
**2nd Refactor**
create a complete new interface ``IApplicationIdentitySettings`` in a new ``AboutPage``  with only fields needed (applicatioName and authorName).  
Problem: former ``IConfigurationSettings`` would not be able to be used in the constructor in this new page class.  
So... Make ``IConfigurationSettings`` inherit from 
``IApplicationIdentitySettings`` !! The constructor that only takes ``IApplicationIdentitySettings`` will now accept ``IConfigurationSettings`` too.
### Design Tips
- implementing ``throw new NotImplementedException()`` as a way to address having a large interface but not needing to implement all methods, is a violation of ISP! refactor so this doesn't happen
- client references a class but only uses small portion of it (fixing at the children instead of the parent, can break a class)
**when to fix?**  
Once there is pain, but also when you're depending on a "fat interface":
- Create a smaller interface with just what you need
- Have the fat interface implement your new interface
- Reference the new interface within your code  
When it's fat interfaces that cannot be customized
- Create a smaller interface with just what's needed
- Implement this interface using an Adapter that implements the full interface. [Adapter Pattern, from dofactory](https://www.dofactory.com/net/adapter-design-pattern)  
**ISP Tips**  
- Keep interfaces small, cohesive, and focused
- Whenever possible, let the client define the interface (what it needs)
- Whenever possible, package the interface with the client (2nd - package interface in a third assembly both the client and implementation depend upon; 3rd - package interfaces with their implementation)

### Summary
- Don't force client code to depend on things it doens't need 
- Keep intercaes lean and focused
- Refactor large itnerfaces so they inherit small interfaces

## The Dependency Inversion Principle, Pt 1 
Rlly important for o-o design
### DIP Defined
High-level modules should not depend on low-level modules. Both should depend on *abstractions*  
Abstractions should not depend on details. Details should depend on abstractions  
**What are dependencies?** 
things a program/app depends on. Like Framework (but something you don't expect much change through the course of development and not really applicable to this principle), but others:
- Access to third pary libraries: things that will change frequently. Want to be able to inject alternate implementations of these 3rd party libraries unles we're certain that they're not likely to change for lifetime of application.  
- Database: want to wrap in such a way that it is not an "implicit" dependency within the code, but rather something that could be injected or replaced
- File System: less obvious
- Email : email from POP box
- Web services: any network acces sat all
- System resources: accessing clock or date time. represent furter dependencies requireing to invest in situations that affect behavior of the application - no way to test unless run at specific times
- Configuration: in terms of files that you use for configuring app.
- The ``new`` Keyword - limit spaces where you instantiate new objects (What...) unless they're primitives like strings
- Static methods: everytime a static method is called, a dependency is added that cannot easily be separated from the calling code - especially for testing or changing (STOP Here, not sure I get this hmm)

### The Problem
xxx

### An Example
xxx

### Refactoring to Appli DIP
xxx

### Related Fundamentals 
xxx

## The Dependency Inversion Principle, Pt 2
coming soon...

## The Don't Repeat Yourself Principle, Pt 1 
coming soon...

## The Don't Repeat Yourself Principle, Pt 2 
coming soon...

## The Don't Repeat Yourself Principle, Pt 3
coming soon...
