from Shapes import Shape, Circle
from ShapeClient import ShapeClient

def main() -> None:
    circle_prototype: Shape = Circle("red")
    
    client: ShapeClient = ShapeClient(circle_prototype)
    
    red_circle: Shape = client.create_shape()
    
    red_circle.draw()
    
    
if __name__ == "__main__":
    main()