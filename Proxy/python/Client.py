from Images import Image, ProxyImage

def main() -> None:
    image: Image = ProxyImage("test_10mb.jpg")
    image.display()
    
    image.display()
    

if __name__ == "__main__":
    main()