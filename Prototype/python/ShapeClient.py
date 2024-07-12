from Shapes import Shape, Circle

class ShapeClient:
    shape_prototype: Shape
    
    def __init__(self, shape_prototype: Shape):
        self.shape_prototype = shape_prototype
        
        
    def create_shape(self) -> Shape:
        return self.shape_prototype.clone()