import { Injectable } from "@nestjs/common";
import { SingletonService } from "./singleton/singleton.services";
import { Facade, Subsystem1, Subsystem2 } from "./facade/facade";

@Injectable()
export class DesignService {
  constructor() {}

  public singleton(): object {
    const singleton = SingletonService.getInstance();
    singleton.setState({ message: "The SingletonService object has been instantiated." });

    const newSingleton = SingletonService.getInstance();

    return newSingleton.executeOperationg();
  }

  public facade(): object {
    const facade = new Facade(new Subsystem1(), new Subsystem2());

    return {
      message: "The Facade object has been instantiated.",
      result: facade.operation(),
    }

  }
}
