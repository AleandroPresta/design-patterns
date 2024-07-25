import { Priority, Request } from "./Request";
import { Level1SupportHandler, Level2SupportHandler, Level3SupportHandler } from "./SupportHandler";

const level1Handler: Level1SupportHandler = new Level1SupportHandler();
const level2Handler: Level2SupportHandler = new Level2SupportHandler();
const level3Handler: Level3SupportHandler = new Level3SupportHandler();

level1Handler.setNextHandler(level2Handler);
level2Handler.setNextHandler(level3Handler);

const request1: Request = new Request(Priority.BASIC);
const request2: Request = new Request(Priority.INTERMEDIATE);
const request3: Request = new Request(Priority.CRITICAL);

level1Handler.handleRequest(request1);
level1Handler.handleRequest(request2);
level1Handler.handleRequest(request3);