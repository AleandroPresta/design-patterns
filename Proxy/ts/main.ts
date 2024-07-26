import { ImageClass, ProxyImage } from "./ImageClass";

const image: ImageClass = new ProxyImage("test_10mb.jpg");

image.display();

image.display();