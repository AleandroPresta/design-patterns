import { IconFactory } from './IconFactory';
import { Icon } from './Icon';

const iconFactory: IconFactory = new IconFactory();

const icon1: Icon = iconFactory.getIcon('file');
icon1.draw(100, 100);

const icon2: Icon = iconFactory.getIcon('file');
icon2.draw(200, 200);

const icon3: Icon = iconFactory.getIcon('folder');
icon3.draw(300, 300);

const icon4: Icon = iconFactory.getIcon('folder');
icon4.draw(400, 400);