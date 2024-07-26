import { DocumentMemento } from "./Memento";

export class HistoryClass {

    private mementos: DocumentMemento[];

    constructor() {
        this.mementos = [];
    }

    addMemento(memento: DocumentMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): DocumentMemento {
        return this.mementos[index];
    }

}