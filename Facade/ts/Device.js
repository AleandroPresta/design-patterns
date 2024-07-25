"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLoader = exports.AudioPlayer = exports.VideoPlayer = void 0;
class VideoPlayer {
    playVideo(filename) {
        console.log(`Playing video: ${filename}`);
    }
}
exports.VideoPlayer = VideoPlayer;
class AudioPlayer {
    playAudio(filename) {
        console.log(`Playing audio: ${filename}`);
    }
}
exports.AudioPlayer = AudioPlayer;
class ImageLoader {
    loadImage(filename) {
        console.log(`Loading image: ${filename}`);
    }
}
exports.ImageLoader = ImageLoader;
