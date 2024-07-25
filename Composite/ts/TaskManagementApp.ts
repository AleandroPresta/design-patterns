import { Task, SimpleTask, TaskList } from "./Task";


const simpleTask1: Task = new SimpleTask("Complete Coding");
const simpleTask2: Task = new SimpleTask("Write Documentation");

const projectTasks: TaskList = new TaskList("Project Tasks");
projectTasks.addTask(simpleTask1);
projectTasks.addTask(simpleTask2);

const phase1Tasks: TaskList = new TaskList("Phase 1 Tasks");
phase1Tasks.addTask(new SimpleTask("Design Application"));
phase1Tasks.addTask(new SimpleTask("Develop Application"));

projectTasks.addTask(phase1Tasks);

projectTasks.display();
