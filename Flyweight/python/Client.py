from FlyweightFactory import IconFactory
from Flyweight import Icon

def main() -> None:
    icon_factory: IconFactory = IconFactory()
    
    file_icon_1 : Icon = icon_factory.get_icon('file')
    file_icon_1.draw(10, 10)
    
    file_icon_2 : Icon = icon_factory.get_icon('file')
    file_icon_2.draw(20, 20)
    
    folder_icon_1 : Icon = icon_factory.get_icon('folder')
    folder_icon_1.draw(30, 30)
    
    folder_icon_2 : Icon = icon_factory.get_icon('folder')
    folder_icon_2.draw(40, 40)

if __name__ == '__main__':
    main()