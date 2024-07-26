"use strict";
class Singleton {
    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;
    }
    getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
