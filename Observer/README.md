# Observer Design Pattern

The **Observer Design Pattern** is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.

## Table of Contents

1.  [Components of the Observer Pattern](#components-of-the-observer-pattern)
2.  [Observer Design Pattern Example](#observer-design-pattern-example)
    -   [Subject](#subject)
    -   [Observer](#observer)
    -   [ConcreteSubject](#concretesubject)
    -   [ConcreteObserver](#concreteobserver)
3.  [Implementation](#implementation)
    -   [Subject](#subject-implementation)
    -   [Observer](#observer-implementation)
    -   [Weather Station](#weather-station)
    -   [Concrete Observers](#concrete-observers)

## Components of the Observer Pattern

### Subject

The subject maintains a list of observers (subscribers or listeners). It Provides methods to register and unregister observers dynamically and defines a method to notify observers of changes in its state.

### Observer

Observer defines an interface with an update method that concrete observers must implement and ensures a common or consistent way for concrete observers to receive updates from the subject. Concrete observers implement this interface, allowing them to react to changes in the subject’s state.

### ConcreteSubject

ConcreteSubjects are specific implementations of the subject. They hold the actual state or data that observers want to track. When this state changes, concrete subjects notify their observers. For instance, if a weather station is the subject, specific weather stations in different locations would be concrete subjects.

### ConcreteObserver

Concrete Observer implements the observer interface. They register with a concrete subject and react when notified of a state change. When the subject’s state changes, the concrete observer’s update() method is invoked, allowing it to take appropriate actions. In a practical example, a weather app on your smartphone is a concrete observer that reacts to changes from a weather station.

## Implementation

![alt text](images/image.png)

### Subject Implementation

```java
public interface Subject {
    void addObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}
```

### Observer Implementation

```java
public interface Observer {
    void update(String weather);
}
```

### Weather Station

```java
import java.util.ArrayList;
import java.util.List;

public class WeatherStation implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String weather;

    @Override
    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(weather);
        }
    }

    public void setWeather(String newWeather) {
        this.weather = newWeather;
        notifyObservers();
    }
}
```

### Concrete Observers

```java
public class PhoneDisplay implements Observer {
    private String weather;

    @Override
    public void update(String weather) {
        this.weather = weather;
        display();
    }

    private void display() {
        System.out.println("Phone Display: Weather updated - " + weather);
    }
}
```

```java
class TVDisplay implements Observer {
    private String weather;

    @Override
    public void update(String weather) {
        this.weather = weather;
        display();
    }

    private void display() {
        System.out.println("TV Display: Weather updated - " + weather);
    }
}
```
