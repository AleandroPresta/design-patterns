# State Design Pattern

The State design pattern is a behavioral software design pattern that allows an object to alter its behavior when its internal state changes. It achieves this by encapsulating the object’s behavior within different state objects, and the object itself dynamically switches between these state objects depending on its current state.

## Table of Contents

-   [Components of State Design Pattern](#components-of-state-design-pattern)
-   [Implementation](#implementation)

## Components of State Design Pattern

1. **Context**:
   The Context is the class that contains the object whose behavior changes based on its internal state. It maintains a reference to the current state object that represents the current state of the Context. The Context provides an interface for clients to interact with and typically delegates state-specific behavior to the current state object.

2. **State Interface or Base Class**:
   The State interface or base class defines a common interface for all concrete state classes. This interface typically declares methods that represent the state-specific behavior that the Context can exhibit. It allows the Context to interact with state objects without knowing their concrete types.

3. **Concrete States**:
   Concrete state classes implement the State interface or extend the base class. Each concrete state class encapsulates the behavior associated with a specific state of the Context. These classes define how the Context behaves when it is in their respective states.

## Implementation

![uml](uml.png)

1. **Context(VendingMachineContext)**:
   The context is responsible for maintaining the current state of the vending machine and delegating state-specific behavior to the appropriate state object.

    ```java
     public class VendingMachineContext {
         private VendingMachineState state;

         public void setState(VendingMachineState state) {
             this.state = state;
         }

         public void request() {
             state.handleRequest();
         }
     }
    ```

2. **State Interface (VendingMachineState)**:
   This interface defines the contract that all concrete state classes must implement. It typically contains a method or methods representing the behavior associated with each state of the vending machine.

    ```java
    public interface VendingMachineState {
        void handleRequest();
    }
    ```

3. **Concrete States (Specific Vending Machine States)**:
   Concrete state classes represent specific states of the vending machine, such as “ReadyState,” “ProductSelectedState,” and “OutOfStockState.” Each concrete state class implements the behavior associated with its respective state, like allowing product selection, processing payment, or displaying an out-of-stock message.

    ```java
     public class ReadyState implements VendingMachineState {
         @Override
         public void handleRequest() {
             System.out.println("Ready state: Please select a product.");
         }
     }

     public class ProductSelectedState implements VendingMachineState {
         @Override
         public void handleRequest() {
             System.out.println("Product selected state: Processing payment.");
         }
     }

     public class PaymentPendingState implements VendingMachineState {
         @Override
         public void handleRequest() {
             System.out.println("Payment pending state: Dispensing product.");
         }
     }

     public class OutOfStockState implements VendingMachineState {
         @Override
         public void handleRequest() {
             System.out.println("Out of stock state: Product unavailable. Please select another product.");
         }
     }
    ```

4. **Client**:

    ```java
    public class Main {
        public static void main(String[] args) {
            // Create context
            VendingMachineContext vendingMachine = new VendingMachineContext();

            // Set initial state
            vendingMachine.setState(new ReadyState());

            // Request state change
            vendingMachine.request();

            // Change state
            vendingMachine.setState(new ProductSelectedState());

            // Request state change
            vendingMachine.request();

            // Change state
            vendingMachine.setState(new PaymentPendingState());

            // Request state change
            vendingMachine.request();

            // Change state
            vendingMachine.setState(new OutOfStockState());

            // Request state change
            vendingMachine.request();
        }
    }
    ```
