export interface Task {
    getTitle(): string;
    setTitle(title: string): void;
    display(): void;
}

export class SimpleTask implements Task {
    private title: string;

    constructor(title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    display(): void {
        console.log(`Simple Task: ${this.title}`);
    }
}

export class TaskList implements Task {
    private tasks: Task[] = [];
    private title: string;

    constructor(title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(task: Task): void {
        this.tasks = this.tasks.filter(t => t !== task);
    }

    display(): void {
        console.log(`Task List: ${this.title}`);
        this.tasks.forEach(task => task.display());
    }
}