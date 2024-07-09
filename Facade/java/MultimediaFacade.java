import com.facadepattern.java.AudioPlayer;
import com.facadepattern.java.VideoPlayer;
import com.facadepattern.java.ImageLoader;

// Facade class
class MultimediaFacade {
    private AudioPlayer audioPlayer;
    private VideoPlayer videoPlayer;
    private ImageLoader imageLoader;

    public MultimediaFacade() {
        this.audioPlayer = new AudioPlayer();
        this.videoPlayer = new VideoPlayer();
        this.imageLoader = new ImageLoader();
    }

    void playMedia(String filename, String mediaType) {
        if (mediaType.equals("audio")) {
            audioPlayer.playAudio(filename);
        } else if (mediaType.equals("video")) {
            videoPlayer.playVideo(filename);
        } else if (mediaType.equals("image")) {
            imageLoader.loadImage(filename);
        } else {
            System.out.println("Unsupported media type " + mediaType);
        }
    }
}