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

## The Dependency Inversion Principle, Pt 1 
coming soon...

## The Dependency Inversion Principle, Pt 2
coming soon...

## The Don't Repeat Yourself Principle, Pt 1 
coming soon...

## The Don't Repeat Yourself Principle, Pt 2 
coming soon...

## The Don't Repeat Yourself Principle, Pt 3
coming soon...
