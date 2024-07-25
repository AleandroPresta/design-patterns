import { Icon, FileIcon, FolderIcon } from './Icon';
import { ImageClass } from './Image';

export class IconFactory {
    private iconCache: Map<string, Icon> = new Map<string, Icon>();

    getIcon(key: string): Icon {
        if (this.iconCache.has(key)) {
            return this.iconCache.get(key) as Icon;
        } else {
            let icon: Icon | undefined = undefined;
            if (key === 'file') {
                icon = new FileIcon('document', this.loadImage('document.png'));
            } else if (key === 'folder') {
                icon = new FolderIcon('blue', this.loadImage('folder.png'));
            }
            this.iconCache.set(key, icon as Icon);
            return icon as Icon;
        }
    }

    private loadImage(filename: string): ImageClass {
        return new ImageClass(filename);
    }
}