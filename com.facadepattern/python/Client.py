from MultimediaFacade import MultimediaFacade

class Client:
    def main() -> None:
        facade: MultimediaFacade = MultimediaFacade()
        
        facade.playMedia('audio.mp3', 'audio')
        
        facade.playMedia('video.mp4', 'video')
        
        facade.playMedia('image.jpg', 'image')
        
        facade.playMedia('invalid.txt', 'invalid')
        
    if __name__ == '__main__':
        main()