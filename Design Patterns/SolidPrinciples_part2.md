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
LoginControl - only uses "ValidateUser" method in large "MembershipProvider" interface. So creating a custom membership provider based off that interface, the rest of that interface will have to be implemented.

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
