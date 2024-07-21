from Handler import Level1SupportHandler, Level2SupportHandler, Level3SupportHandler, SupportHandler
from Request import Priority, Request

def main() -> None:
    level1_handler: SupportHandler = Level1SupportHandler()
    level2_handler: SupportHandler = Level2SupportHandler()
    level3_handler: SupportHandler = Level3SupportHandler()
    
    level1_handler.set_next_handler(level2_handler)
    level2_handler.set_next_handler(level3_handler)
    
    request1: Request = Request(Priority.BASIC)
    request2: Request = Request(Priority.INTERMEDIATE)
    request3: Request = Request(Priority.CRITICAL)
    request4: Request = Request(Priority.FATAL)
    
    level1_handler.handle_request(request1)
    level1_handler.handle_request(request2)
    level1_handler.handle_request(request3)
    level1_handler.handle_request(request4)
    
    
if __name__ == "__main__":
    main()