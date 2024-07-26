export interface Observer {
    update(weather: string): void;
}

export class PhoneDisplay implements Observer {
    private weather: string;

    update(weather: string): void {
        this.weather = weather;
        this.display();
    }

    private display(): void {
        console.log(`Phone Display: Weather Updated - ${this.weather}`);
    }
}

export class TVDisplay implements Observer {
    private weather: string;

    update(weather: string): void {
        this.weather = weather;
        this.display();
    }

    private display(): void {
        console.log(`TV Display: Weather Updated - ${this.weather}`);
    }
}