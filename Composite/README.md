# Composite Pattern
The Composite Design Pattern is a structural design pattern that lets you compose objects into tree-like structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly. In other words, whether dealing with a single object or a group of objects (composite), clients can use them interchangeably.

## Table of Contents
- [Components of Composite Design Pattern](#components-of-composite-design-pattern)
    - [Component](#component)
    - [Leaf](#leaf)
    - [Composite](#composite)
    - [Client](#client)
- [Implementation](#implementation)
    - [Task](#task)
    - [SimpleTask (Leaf)](#simpletask-leaf)
    - [TaskList (Composite)](#tasklist-composite)
    - [TaskManagerApp (Client)](#taskmanagementapp-client)

## Components of Composite Design Pattern
### Component
The **component** declares the interface for objects in the composition and for accessing and managing its child components. This is like a blueprint that tells us what both individual items (leaves) and groups of items (composites) should be able to do. It lists the things they all have in common.
### Leaf
**Leaf** defines behavior for primitive objects in the composition. This is the basic building block of the composition, representing individual objects that don’t have any child components. Leaf elements implement the operations defined by the Component interface.
### Composite
**Composite** stores child components and implements child-related operations in the component interface. This is a class that has child components, which can be either leaf elements or other composites. A composite class implements the methods declared in the Component interface, often by delegating the operations to its child components.
### Client
The **client** manipulates the objects in the composition through the component interface. The client uses the component class interface to interact with objects in the composition structure. If the recipient is a leaf then the request is handled directly. If the recipient is a composite, then it usually forwards the request to its child components, possibly performing additional operations before and after forwarding.
## Implementation
![uml](uml.png)
### Task
- Represents the common interface for both simple tasks and task lists.
- Defines methods such as `getTitle()`, `setTitle()`, and `display()`.

```java
public interface Task {
    String getTitle();
    void setTitle(String title);
    void display();
}
```
### SimpleTask (Leaf)
- Represents an individual task with a title.
- Implements the Task interface.

```java
public class SimpleTask implements Task {
    private String title;
 
    public SimpleTask(String title) {
        this.title = title;
    }
 
    @Override
    public String getTitle() {
        return title;
    }
 
    @Override
    public void setTitle(String title) {
        this.title = title;
    }
 
    @Override
    public void display() {
        System.out.println("Simple Task: " + title);
    }
}
```
### TaskList (Composite)
- Represents a collection of tasks, which can include both simple tasks and other task lists.
- Implements the Task interface but also has a list of tasks (List\<Task\>).
- Defines methods to add, remove, and display tasks.

```java
import java.util.ArrayList;
import java.util.List;

public class TaskList implements Task {
	private String title;
	private List<Task> tasks;

	public TaskList(String title) {
		this.title = title;
		this.tasks = new ArrayList<>();
	}

	@Override
	public String getTitle() {
		return title;
	}

	@Override
	public void setTitle(String title) {
		this.title = title;
	}

	public void addTask(Task task) {
		tasks.add(task);
	}

	public void removeTask(Task task) {
		tasks.remove(task);
	}

	@Override
	public void display() {
		System.out.println("Task List: " + title);
		for (Task task : tasks) {
			task.display();
		}
	}
}

```
### TaskManagementApp (Client)
- Represents the application that uses the Composite Design Pattern to manage tasks.
- It creates a mix of simple tasks and task lists, showcasing how the Composite pattern allows treating both individual tasks and task collections uniformly.
- The created tasks are displayed in a hierarchical structure to illustrate the pattern’s flexibility and uniform handling of different task types.

```java
public class TaskManagementApp {
	public static void main(String[] args) {
		// Creating simple tasks
		Task simpleTask1 = new SimpleTask("Complete Coding");
		Task simpleTask2 = new SimpleTask("Write Documentation");

		// Creating a task list
		TaskList projectTasks = new TaskList("Project Tasks");
		projectTasks.addTask(simpleTask1);
		projectTasks.addTask(simpleTask2);

		// Nested task list
		TaskList phase1Tasks = new TaskList("Phase 1 Tasks");
		phase1Tasks.addTask(new SimpleTask("Design"));
		phase1Tasks.addTask(new SimpleTask("Implementation"));

		projectTasks.addTask(phase1Tasks);

		// Displaying tasks
		projectTasks.display();
	}
}

```