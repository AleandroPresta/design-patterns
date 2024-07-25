"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = exports.SimpleTask = void 0;
class SimpleTask {
    constructor(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    display() {
        console.log(`Simple Task: ${this.title}`);
    }
}
exports.SimpleTask = SimpleTask;
class TaskList {
    constructor(title) {
        this.tasks = [];
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
    }
    display() {
        console.log(`Task List: ${this.title}`);
        this.tasks.forEach(task => task.display());
    }
}
exports.TaskList = TaskList;
