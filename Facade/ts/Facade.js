"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaFacade = void 0;
const Device_1 = require("./Device");
class MultimediaFacade {
    constructor() {
        this.audioPlayer = new Device_1.AudioPlayer();
        this.videoPlayer = new Device_1.VideoPlayer();
        this.imageLoader = new Device_1.ImageLoader();
    }
    playMedia(filename, mediaType) {
        switch (mediaType) {
            case 'audio':
                this.audioPlayer.playAudio(filename);
                break;
            case 'video':
                this.videoPlayer.playVideo(filename);
                break;
            case 'image':
                this.imageLoader.loadImage(filename);
                break;
            default:
                console.log('Unsupported media type');
        }
    }
}
exports.MultimediaFacade = MultimediaFacade;
