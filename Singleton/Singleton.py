class Singleton:
    __instance = None

    @staticmethod
    def get_instance():
        if Singleton.__instance is None:
            Singleton()
        return Singleton.__instance

    def __init__(self):
        if Singleton.__instance is not None:
            raise Exception("This class is a singleton!")
        else:
            Singleton.__instance = self
    
    
def main() -> None:
    s1 = Singleton()
    
    print(s1)
    
    try: 
        s2 = Singleton()
    except Exception as e:
        print(e)
    
    
if __name__ == "__main__":
    main()