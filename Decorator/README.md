# Decorator Design Pattern

The Decorator Design Pattern is a structural design pattern that allows behavior to be added to individual objects dynamically, without affecting the behavior of other objects from the same class. It involves creating a set of decorator classes that are used to wrap concrete components.

## Table of Contents

1. [Characteristics of the Decorator Pattern](#characteristics-of-the-decorator-pattern)
2. [Use Cases for the Decorator Pattern](#use-cases-for-the-decorator-pattern)
3. [Key Components of the Decorator Design Pattern](#key-components-of-the-decorator-design-pattern)
4. [Implementation](#implementation)
    - [Component Interface(Coffee)](#component-interfacecoffee)
    - [ConcreteComponent(PlainCoffee)](#concretecomponentplaincoffee)
    - [Decorator(CoffeeDecorator)](#decoratorcoffeedecorator)
    - [ConcreteDecorators(MilkDecorator,SugarDecorator)](#concretedecoratorsmilkdecoratorsugardecorator)

## Characteristics of the Decorator Pattern

-   This pattern promotes flexibility and extensibility in software systems by allowing developers to compose objects with different combinations of functionalities at runtime.
-   It follows the open/closed principle, as new decorators can be added without modifying existing code, making it a powerful tool for building modular and customizable software components.
-   The Decorator Pattern is commonly used in scenarios where a variety of optional features or behaviors need to be added to objects in a flexible and reusable manner, such as in text formatting, graphical user interfaces, or customization of products like coffee or ice cream.

## Use Cases for the Decorator Pattern

-   **Extending Functionality**: When you have a base component with basic functionality, but you need to add additional features or behaviors to it dynamically without altering its structure. Decorators allow you to add new responsibilities to objects at runtime.
-   **Multiple Combinations of Features**: When you want to provide multiple combinations of features or options to an object. Decorators can be stacked and combined in different ways to create customized variations of objects, providing flexibility to users.
-   **Legacy Code Integration**: When working with legacy code or third-party libraries where modifying the existing codebase is not feasible or desirable, decorators can be used to extend the functionality of existing objects without altering their implementation.
-   **GUI Components**: In graphical user interface (GUI) development, decorators can be used to add additional visual effects, such as borders, shadows, or animations, to GUI components like buttons, panels, or windows.
-   **Input/Output Streams**: Decorators are commonly used in input/output stream classes in languages like Java. They allow you to wrap streams with additional functionality such as buffering, compression, encryption, or logging without modifying the original stream classes.

## Key Components of the Decorator Design Pattern

-   **Component Interface**: This is an abstract class or interface that defines the common interface for both the concrete components and decorators. It specifies the operations that can be performed on the objects.
-   **Concrete Component**: These are the basic objects or classes that implement the Component interface. They are the objects to which we want to add new behavior or responsibilities.
-   **Decorator**: This is an abstract class that also implements the Component interface and has a reference to a Component object. Decorators are responsible for adding new behaviors to the wrapped Component object.
-   **Concrete Decorator**: These are the concrete classes that extend the Decorator class. They add specific behaviors or responsibilities to the Component. Each Concrete Decorator can add one or more behaviors to the Component.

## Implementation

![UML Decorator Pattern](images/uml.png)

### Component Interface(Coffee)

This is the interface Coffee representing the component.
It declares two methods `getDescription()` and `getCost()` which must be implemented by concrete components and decorators.

```java
// Coffee.java
public interface Coffee {
    String getDescription();
    double getCost();
}
```

### ConcreteComponent(PlainCoffee)

PlainCoffee is a concrete class implementing the Coffee interface.
It provides the description and cost of plain coffee by implementing the `getDescription()` and `getCost()` methods.

```java
// PlainCoffee.java
public class PlainCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Plain Coffee";
    }

    @Override
    public double getCost() {
        return 2.0;
    }
}
```

## Decorator(CoffeeDecorator)

CoffeeDecorator is an abstract class implementing the Coffee interface.
It maintains a reference to the decorated Coffee object.
The `getDescription()` and `getCost()` methods are implemented to delegate to the decorated coffee object.

```java
// CoffeeDecorator.java
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription();
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost();
    }
}
```

### ConcreteDecorators(MilkDecorator,SugarDecorator)

MilkDecorator and SugarDecorator are concrete decorators extending CoffeeDecorator.
They override `getDescription()` to add the respective decorator description to the decorated coffee’s description.
They override `getCost()` to add the cost of the respective decorator to the decorated coffee’s cost.

```java
// MilkDecorator.java
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Milk";
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost() + 0.5;
    }
}

// SugarDecorator.java
public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Sugar";
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost() + 0.2;
    }
}
```
