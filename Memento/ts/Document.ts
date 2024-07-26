import { DocumentMemento } from './Memento';

export class DocumentClass {

    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    write(text: string): void {
        this.content += text;
    }

    getContent(): string {
        return this.content;
    }

    createMemento(): DocumentMemento {
        return new DocumentMemento(this.content);
    }

    restoreFromMemento(memento: DocumentMemento): void {
        this.content = memento.getSavedContent();
    }

}