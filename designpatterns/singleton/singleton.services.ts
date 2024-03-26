import { Injectable } from "@nestjs/common";

@Injectable()
export class SingletonService {
    private static instance: SingletonService;
    private state: object;

    constructor() {
        this.state = {
            message: "Hello, I'm a Singleton!"
        };
    }

    public static getInstance(): SingletonService {
        if (!SingletonService.instance) {
            SingletonService.instance = new SingletonService();
        }
        return SingletonService.instance;
    }

    public getState(): object {
        return this.state;
    }

    public setState(state: object): void {
        this.state = state;
    }

    // This method is just for testing purposes
    public executeOperationg(): object {
        return {
          result: 'sucess',
          stateOfThisClass: this.state
        };
      }
    
}