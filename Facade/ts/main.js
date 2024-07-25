"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = require("./Facade");
const facade = new Facade_1.MultimediaFacade();
facade.playMedia('song.mp3', 'audio');
facade.playMedia('movie.mp4', 'video');
facade.playMedia('picture.jpg', 'image');
facade.playMedia('book.pdf', 'document');
