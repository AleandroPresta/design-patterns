export class VideoPlayer {
    playVideo(filename: string): void {
        console.log(`Playing video: ${filename}`);
    }
}

export class AudioPlayer {
    playAudio(filename: string): void {
        console.log(`Playing audio: ${filename}`);
    }
}

export class ImageLoader {
    loadImage(filename: string): void {
        console.log(`Loading image: ${filename}`);
    }
}