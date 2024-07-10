# Factory Pattern
The Factory Method Design Pattern is a creational design pattern that provides an interface for creating objects in a superclass, allowing subclasses to alter the type of objects that will be created. It encapsulates object creation logic in a separate method, promoting loose coupling between the creator and the created objects. This pattern is particularly useful when the exact types of objects to be created may vary or need to be determined at runtime, enabling flexibility and extensibility in object creation.
## Table of Contents
- [Components](#components)
    - [Creator](#creator)
    - [ConcreteCreator](#concretecreator)
    - [Product](#product)
    - [ConcreteProduct](#concreteproduct)
- [Implementation](#implementation)
    - [Product Interface](#product-interface)
    - [Concrete Products](#concrete-products)
    - [Creator Interface](#creator-interface)
    - [Concrete Creators](#concrete-creators)
    - [Client](#client)
## Components
### Creator
This is an abstract class or an interface that declares the factory method. The creator typically contains a method that serves as a factory for creating objects. It may also contain other methods that work with the created objects.
### ConcreteCreator
Concrete Creator classes are subclasses of the Creator that implement the factory method to create specific types of objects. Each Concrete Creator is responsible for creating a particular product.
### Product
This is the interface or abstract class for the objects that the factory method creates. The Product defines the common interface for all objects that the factory method can create.
### ConcreteProduct
Concrete Product classes are the actual objects that the factory method creates. Each Concrete Product class implements the Product interface or extends the Product abstract class.
## Implementation
![alt text](uml.png)
### Product Interface
```java
public abstract class Vehicle {
    public abstract void printVehicle();
}
```
### Concrete Products
```java
public class TwoWheeler extends Vehicle {
    public void printVehicle() {
        System.out.println("I am two wheeler");
    }
}

public class FourWheeler extends Vehicle {
    public void printVehicle() {
        System.out.println("I am four wheeler");
    }
}
```
### Creator Interface
```java
public interface VehicleFactory {
    Vehicle createVehicle();
}
```
### Concrete Creators
```java
// Concrete factory class for TwoWheeler
public class TwoWheelerFactory implements VehicleFactory {
    public Vehicle createVehicle() {
        return new TwoWheeler();
    }
}

// Concrete factory class for FourWheeler
public class FourWheelerFactory implements VehicleFactory {
    public Vehicle createVehicle() {
        return new FourWheeler();
    }
}
```
### Client
```java
public class Client {
    public static void main(String[] args) {
        VehicleFactory twoWheelerFactory = new TwoWheelerFactory();
        Vehicle twoWheeler = twoWheelerFactory.createVehicle();
        twoWheeler.printVehicle();

        VehicleFactory fourWheelerFactory = new FourWheelerFactory();
        Vehicle fourWheeler = fourWheelerFactory.createVehicle();
        fourWheeler.printVehicle();
    }
}
```