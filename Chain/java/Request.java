package Chain.java;

// Priority Enum
enum Priority {
    BASIC, INTERMEDIATE, CRITICAL
}

class Request {
    private Priority priority;

    public Request(Priority priority) {
        this.priority = priority;
    }

    public Priority getPriority() {
        return priority;
    }
}