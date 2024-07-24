from Document import Document
from History import History

def main() -> None:
    document: Document = Document("Initial content\n")
    history: History = History()
    
    document.write("Some more content\n")
    history.add_memento(document.create_memento())
    
    document.write("Even more content\n")
    history.add_memento(document.create_memento())
    
    document.restore_from_memento(history.get_memento(1))
    
    print(document.get_content())
    
if __name__ == "__main__":
    main()