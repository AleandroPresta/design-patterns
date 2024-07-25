export enum Priority {
    BASIC,
    INTERMEDIATE,
    CRITICAL
}

export class Request {
    priority: Priority;

    constructor(priority: Priority) {
        this.priority = priority;
    }

    getPriority(): Priority {
        return this.priority;
    }
}