import { DocumentClass } from "./Document";
import { DocumentMemento } from "./Memento";
import { HistoryClass } from "./History";

const document: DocumentClass = new DocumentClass("Initial content\n");
const history: HistoryClass = new HistoryClass();

document.write("Some more content\n");
history.addMemento(document.createMemento());

document.write("Even more content\n");
history.addMemento(document.createMemento());

console.log(document.getContent());

document.restoreFromMemento(history.getMemento(0));

console.log(document.getContent());