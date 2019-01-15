# Solid Principles of Object-Oriented design    
Course Notes from Plurasight course -
S - SRP  
O - Open/Closed  
L - Liskov Substitution  
I - Interface Segregation  
D - Dependency Inversion  
[See Part 1](../CodeLearning/Design Patterns/SolidPrinciples_part1.md)

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
