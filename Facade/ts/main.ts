import { MultimediaFacade } from "./Facade";

const facade: MultimediaFacade = new MultimediaFacade();

facade.playMedia('song.mp3', 'audio');

facade.playMedia('movie.mp4', 'video');

facade.playMedia('picture.jpg', 'image');

facade.playMedia('book.pdf', 'document');