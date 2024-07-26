"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TVDisplay = exports.PhoneDisplay = void 0;
class PhoneDisplay {
    update(weather) {
        this.weather = weather;
        this.display();
    }
    display() {
        console.log(`Phone Display: Weather Updated - ${this.weather}`);
    }
}
exports.PhoneDisplay = PhoneDisplay;
class TVDisplay {
    update(weather) {
        this.weather = weather;
        this.display();
    }
    display() {
        console.log(`TV Display: Weather Updated - ${this.weather}`);
    }
}
exports.TVDisplay = TVDisplay;
