# Mediator Design Pattern

The Mediator design pattern is a behavioral pattern that defines an object, the mediator, to centralize communication between various components or objects in a system. This promotes loose coupling by preventing direct interactions between components, instead of having them communicate through the mediator, facilitating better maintainability and flexibility in the system architecture.

## Table of Contents

-   [Components of the Mediator Design Pattern](#components-of-the-mediator-design-pattern)
-   [Implementation](#implementation)

## Components of the Mediator Design Pattern

1. **Mediator**:
   The Mediator interface defines the communication contract, specifying methods that concrete mediators should implement to facilitate interactions among colleagues.. It encapsulates the logic for coordinating and managing the interactions between these objects, promoting loose coupling and centralizing control over their communication.

2. **Colleague**:
   Colleague classes are the components or objects that interact with each other. They communicate through the Mediator, and each colleague class is only aware of the mediator, not the other colleagues. This isolation ensures that changes in one colleague do not directly affect others.

3. **Concrete Mediator**:
   Concrete Mediator is a specific implementation of the Mediator interface. It coordinates the communication between concrete colleague objects, handling their interactions and ensuring a well-organized collaboration while keeping them decoupled.

4. **Concrete colleague**:
   Concrete Colleague classes are the specific implementations of the Colleague interface. They rely on the Mediator to communicate with other colleagues, avoiding direct dependencies and promoting a more flexible and maintainable system architecture.

## Implementation

![uml](uml.png)

1. **Colleague Interface(Airplane)**

    ```java
    // Colleague Interface
    public interface Airplane {
        void requestTakeoff();
        void requestLanding();
        void notifyAirTrafficControl(String message);
    }
    ```

2. **ConcreteColleague Class(CommercialAirplane)**

    ```java
    // Concrete Colleague
    public class CommercialAirplane implements Airplane {
        private AirTrafficControlTower mediator;

        public CommercialAirplane(AirTrafficControlTower mediator) {
            this.mediator = mediator;
        }

        @Override
        public void requestTakeoff() {
            mediator.requestTakeoff(this);
        }

        @Override
        public void requestLanding() {
            mediator.requestLanding(this);
        }

        @Override
        public void notifyAirTrafficControl(String message) {
            System.out.println("Commercial Airplane: " + message);
        }
    }
    ```

3. **Mediator Interface(AirTrafficControlTower)**

    ```java
    // Mediator Interface
    public interface AirTrafficControlTower {
        void requestTakeoff(Airplane airplane);
        void requestLanding(Airplane airplane);
    }
    ```

4. **ConcreteMediator Class(AirportControlTower)**

    ```java
    // Concrete Mediator
    public class AirportControlTower implements AirTrafficControlTower {
        @Override
        public void requestTakeoff(Airplane airplane) {
            // Logic for coordinating takeoff
            airplane.notifyAirTrafficControl("Requesting takeoff clearance.");
        }

        @Override
        public void requestLanding(Airplane airplane) {
            // Logic for coordinating landing
            airplane.notifyAirTrafficControl("Requesting landing clearance.");
        }
    }
    ```

5. **Main**

    ```java
    // Main class
    public class MediatorAirplaneExample {
        public static void main(String[] args) {
            // Instantiate the Mediator (Airport Control Tower)
            AirTrafficControlTower controlTower = new AirportControlTower();

            // Instantiate Concrete Colleagues (Commercial Airplanes)
            Airplane airplane1 = new CommercialAirplane(controlTower);
            Airplane airplane2 = new CommercialAirplane(controlTower);

            // Set up the association between Concrete Colleagues and the Mediator
            airplane1.requestTakeoff();
            airplane2.requestLanding();

            // Output:
            // Commercial Airplane: Requesting takeoff clearance.
            // Commercial Airplane: Requesting landing clearance.
        }
    }
    ```
