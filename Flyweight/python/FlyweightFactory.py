from Image import Image
from Flyweight import Icon, FileIcon, FolderIcon

class IconFactory:
    icon_cache: dict = {}
    
    def get_icon(self, key: str) -> Icon:
        if( self.icon_cache.get(key) != None ):
            return self.icon_cache[key]
        else:
            icon: Icon = None
            if key == 'file':
                icon = FileIcon('document', self.load_image('document.png'))
            elif key == 'folder':
                icon = FolderIcon('blue', self.load_image('folder.png'))
            else:
                raise ValueError(f'Unsupported icon type: {key}')
            self.icon_cache[key] = icon
        return icon
    
    def load_image(self, filename: str) -> Image:
        return Image(filename)