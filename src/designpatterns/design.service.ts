import { Injectable } from "@nestjs/common";
import { SingletonService } from "./singleton/singleton.services";

@Injectable()
export class DesignService {
  constructor() {}

  public singleton(): object {
    const singleton = SingletonService.getInstance();
    singleton.setState({ message: "The SingletonService object has been instantiated." });

    const newSingleton = SingletonService.getInstance();

    return newSingleton.executeOperationg();
  }
}
