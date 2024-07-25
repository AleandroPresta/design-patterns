import { Priority, Request } from "./Request";

export interface SupportHandler {
    handleRequest(request: Request): void;
    setNextHandler(nextHandler: SupportHandler): void;
}

export class Level1SupportHandler implements SupportHandler {
    nextHandler: SupportHandler;

    setNextHandler(nextHandler: SupportHandler): void {
        this.nextHandler = nextHandler;
    }

    handleRequest(request: Request): void {
        if (request.getPriority() === Priority.BASIC) {
            console.log("Level 1 Support is handling the request.");
        } else if (this.nextHandler !== undefined) {
            this.nextHandler.handleRequest(request);
        }
    }

}

export class Level2SupportHandler implements SupportHandler {
    nextHandler: SupportHandler;

    setNextHandler(nextHandler: SupportHandler): void {
        this.nextHandler = nextHandler;
    }

    handleRequest(request: Request): void {
        if (request.getPriority() === Priority.INTERMEDIATE) {
            console.log("Level 2 Support is handling the request.");
        } else if (this.nextHandler !== undefined) {
            this.nextHandler.handleRequest(request);
        }
    }

}

export class Level3SupportHandler implements SupportHandler {

    setNextHandler(nextHandler: SupportHandler): void {
        // Do nothing
    }

    handleRequest(request: Request): void {
        if (request.getPriority() === Priority.CRITICAL) {
            console.log("Level 3 Support is handling the request.");
        } else {
            console.log("Request cannot be handler.");
        }
    }

}