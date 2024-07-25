import { AudioPlayer, VideoPlayer, ImageLoader } from "./Device";

export class MultimediaFacade {
    private audioPlayer: AudioPlayer;
    private videoPlayer: VideoPlayer;
    private imageLoader: ImageLoader;

    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.videoPlayer = new VideoPlayer();
        this.imageLoader = new ImageLoader();
    }

    playMedia(filename: string, mediaType: string): void {
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