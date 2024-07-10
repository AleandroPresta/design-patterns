# Singleton Design Pattern

Singleton Pattern is probably the most widely used design pattern. It is a simple pattern, easy to understand and to use. It ensures a class only has one instance, and provides a global point of access to it.

## Table of Content
1. [Uses](#uses)
2. [Initialization Types of Singleton](#initialization-types-of-singleton)
3. [Implementation](#implementation)

## Uses
Use the Singleton method Design Pattern when:
- There must be exactly one instance of a class and it must be accessible to clients from a well-known access point.
- When the sole instance should be extensible by subclassing and clients should be able to use an extended instance without modifying
- Singleton classes are used for logging, driver objects, caching, and thread pool, database connections.

## Initialization Types of Singleton
Singleton class can be instantiated by two methods:
- **Early initialization** : In this method, class is initialized whether it is to be used or not. The main advantage of this method is its simplicity. You initiate the class at the time of class loading. Its drawback is that class is always initialized whether it is being used or not.
- **Lazy initialization** : In this method, class in initialized only when it is required. It can save you from instantiating the class when you don’t need it. Generally, lazy initialization is used when we create a singleton class.

## Implementation
![alt text](images/implementation.png)

```java
/*package whatever //do not write package name here */
import java.io.*;

class Singleton {
    // static class
    private static Singleton instance;

    private Singleton(){
        System.out.println("Singleton is Instantiated.");
    }

    public static Singleton getInstance()
    {
        if (instance == null)
            instance = new Singleton();
        return instance;
    }

    public static void doSomething(){
        System.out.println("Somethong is Done.");
    }
}

class GFG {
    public static void main(String[] args)
    {
        Singleton.getInstance().doSomething();
    }
}
```