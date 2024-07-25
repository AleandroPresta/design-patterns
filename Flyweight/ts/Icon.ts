import { ImageClass } from "./Image";

export interface Icon {
    draw(x: number, y: number): void;
}

export class FileIcon implements Icon {
    private type: string;
    private image: ImageClass;

    constructor(type: string, image: ImageClass) {
        this.type = type;
        this.image = image;
    }

    draw(x: number, y: number): void {
        console.log(`Drawing ${this.type} icon at (${x}, ${y})`);
    }
}

export class FolderIcon implements Icon {
    private color: string;
    private image: ImageClass;

    constructor(color: string, image: ImageClass) {
        this.color = color;
        this.image = image;
    }

    draw(x: number, y: number): void {
        console.log(`Drawing ${this.color} icon at (${x}, ${y})`);
    }
}