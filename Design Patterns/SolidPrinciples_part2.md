# Solid Principles of Object-Oriented design    
Course Notes from Plurasight course - [See Part 1](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md)  
[S - SRP (part 1)](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#srp---single-responsibility-principle)  
[O - Open/Closed (part 1)](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#the-open-closed-principle)  
[L - Liskov Substitution (part 1)](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#liskov-substitution-principle)  
[I - Interface Segregation](#the-interface-segregation-principle)  
[D - Dependency Inversion, pt 1](#the-dependency-inversion-principle-pt-1)  
[D - Dependency Inversion, pt 2](#the-dependency-inversion-principle-pt-2)  
[D - Don't Repeat Yourself](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_pt3.md)

## The Interface Segregation Principle ##
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

## The Dependency Inversion Principle, Pt 1 ##
Rlly important for o-o design ###
### DIP Defined
High-level modules should not depend on low-level modules. Both should depend on *abstractions*  
Abstractions should not depend on details. Details should depend on abstractions  
#### Dependencies defined
Things a program/app depends on. Like Framework (but something you don't expect much change through the course of development and not really applicable to this principle), but others (most common in .NET applications):
- Access to third pary libraries: things that will change frequently. Want to be able to inject alternate implementations of these 3rd party libraries unles we're certain that they're not likely to change for lifetime of application.  
- Database: want to wrap in such a way that it is not an "implicit" dependency within the code, but rather something that could be injected or replaced
- File System: less obvious
- Email : email from POP box
- Web services: any network acces sat all
- System resources: accessing clock or date time. represent furter dependencies that might require to invest in situations that affect behavior of the application - no way to test unless run at specific times
- Configuration: in terms of files that you use for configuring your app.
- The ``new`` Keyword - you want to limit places in app where you instantiate new objects (why?) unless they're primitives like strings
- Static methods: everytime a static method is called, a dependency is added that cannot easily be separated from the calling code - in case of tests or changing how code works throughout entire app with one startup file/config file
- thread.sleep
- Random - hard to test code that uses random values
- etc
#### Dependencies and Traditional Programming
In traditional programming, typical for high level modules to call lower level modules. User interface depending on business logic, business logic depending on data access.  
Static methods are used for convenience  
Class instantiation/call stak logic scattered through all modules - violates SRP  

----------
Class constructors should require dependencies the class needs - **explicit** dependencies  
Classes should declare what they need!  
```
public class HelloWorldExplicit
  {
    private readonly DateTime _timeofGreeting;
    
    public HelloWorldExplicit(DateTime timeOfGreeting)
    {
      _timeOfGreeting = timeOfGreeting;
    }
    
    public string Hello(string name){
      // uses _timeOfGreeting to output corresponding hello
    }
  }
 ```  
here, the example changed by removing dependency on DateTime.hour, and added explicitly

### Demo
Looks at a commerce application including an ``Order`` class with checkout method with purchased items, payment details, and bool flag to notify customer  
Method runs ChargeCard(...)  ReserveInventory(...) and NotifyCustomer(...)  
With NotifyCustomer(...) having a mail dependency (smtp, ``mailMessage(...)``, ``datetime``, and exception catch  
ReserveInventory(...) instantiates ``new InventorySystem()`` and ``new PaymentGateway()``  

What's the problem? if you're going to test "Order" class, it's going to take effort to inject the stuff it requires.
* 1st test added, no notify but can't assume that it's successful other than it didn't throw an exception
* 2nd test added, yes notify but because no SMTP server running, test fails. you could write fake smtp message. various hacks to get around it (including smtp4dev ;), test database etc)
* but having to put together infrastructure just to test logic of class, or specifically test the parts that you actually care about, it's not psosible (ie messaging working regardless of the specific process)

### The Problem
Order has hidden dependencies:
* MailMessage
* SmtpClient
* InventorySystem
* PaymentGateway
* Logger
* DateTime.Now

Result
* Tight coupling
* No way to change implementation details ( [OCP](https://github.com/MelB-tran/CodeLearning/blob/master/Design%20Patterns/SolidPrinciples_part1.md#the-open-closed-principle) violation)
* Difficult to test

#### Dependency Injection
A technique that is used to allow calling code to inject dependencies a class needs when it is instantiated  
**Three Primary Techniques**
* Constructor Injection - strategy pattern where dependencies are passed via constructor. PROS: self-documenting, works well with our without a container, classes are always in a valid state once constructed. CONS: too many params/dependencies; some features (like serialization) may require a *default* constructor, like a parameter list constructor; some methods in class may not require things other methods require (maybe refactor to methods that do share dependencies)
* Property Injection - also known as setter injection. PROS: dependency can be changed at any time during object lifetime, very flexible. CONS: objects may be in invalid state between construction and setting of dependentcies via setters, less intuitive (may need documentation to make sense)
* Parameter Injection - dependencies passed in via a method parameter. PROS: most granular, flexible, requires no changes to rest of class. CONS: breaks method signature, can result in many parameters *consider only if one method has the dependency, otherwise prefer constructor injection* cause it's explicit to anyone using code what esactly is needed.

Other methods exist too, like service location (lookup) etc

### Refactoring to Apply DIP
Basic steps:
* Extract dependencies into interfaces
* Inject implementations of interfaces into ``Order``
* Reduce responsibilities by applying (SRP)[#]

Order has number of dependencies so address by
1. constructor injection in ``Order`` class with ``Cart`` and ``PaymentDetails`` field parameters, where the class has ``private readonly`` fields for each parameter (renamed with syntax ``_nameofParameter``)
2. create interface in same class for now ``INotifyService`` with ``void NotifyCustomer(Cart cart)`` signature method
3. create derived type (class) that inherits interface in step 2 as ``NotifyService`` that defines ``NotifyCustomer(Cart cart)`` method within it
4. pass in ``INotifyService notifyService`` into constructor created in step 1
5. in methods where these methods were being used (ex. ``NotifyCustomer(...)``), replace with the call to ``private readonly`` service: ``_notifyService.NotifyCustomer(cart)``  
this removes dependency within ``Order`` for SMTP, and can be used for other dependencies too :)

Injecting implementations of interfaces
Remove payment processing, reservation of products, and notification out of ``Order`` class. So you end up with something like
```
  private readonly [for each parameter passed]
  // constructor
  public OnlineOrder(Cart cart, 
                     PaymentDetails paymentDetails,
                     IPaymentProcessor paymentProcessor,
                     IReservationService reservationService,
                     INotificationService notificationService) : base(cart)
                     { ... }
```
this makes it easy to test the class through the use of "fake implementations", for example:
```
[TestMethod]
public void SendTotalAmountToCreditCardProcessor(){
  var paymentProcessor = new FakePaymentProcessor();
  var reservationService = new FakeReservationService();
  var notificationService = new FakeNotificationService();
  
  var cart = new Cart{ TotalAmount = 5.05m};
  var paymentDetails = new PaymentDetails(){
     PaymentMethod = PaymentMethod.CreditCard };
  var order = new OnlineOrder(cart, 
                              paymentDetails, 
                              paymentProcessor, 
                              reservationService,
                              notificationServie);
  order.CheckOut();
  
  Assert.IsTrue(paymentProcesor.WasCalled);
  Assert.AreEqual(cart.TotalAmount, paymentProcessor.AmountPassed);
}
```
### Related Fundamentals 
xxx

## The Dependency Inversion Principle, Pt 2
coming soon...
