export interface ImageClass {
    display(): void;
}

export class RealImage implements ImageClass {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    display(): void {
        console.log(`Displaying ${this.fileName}`);
    }

    private loadFromDisk(): void {
        console.log(`Loading ${this.fileName}`);
    }
}

export class ProxyImage implements ImageClass {
    private realImage: RealImage;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    display(): void {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}