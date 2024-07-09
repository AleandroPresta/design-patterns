from MultimediaPlayer import AudioPlayer, VideoPlayer, ImageLoader

class MultimediaFacade:
    audioPlayer: AudioPlayer
    videoPlayer: VideoPlayer
    imageLoader: ImageLoader
    
    def __init__(self) -> None:
        self.audioPlayer = AudioPlayer()
        self.videoPlayer = VideoPlayer()
        self.imageLoader = ImageLoader()
        
    def playMedia(self, filename: str, media_type: str) -> None:
        if (media_type == 'audio'):
            self.audioPlayer.playAudio(filename)
        elif (media_type == 'video'):
            self.videoPlayer.playVideo(filename)
        elif (media_type == 'image'):
            self.imageLoader.loadImage(filename)
        else:
            print(f'Invalid media type: {media_type}')