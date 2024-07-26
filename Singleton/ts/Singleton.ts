class Singleton {
    private instance: Singleton;

    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;
    }

    getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}