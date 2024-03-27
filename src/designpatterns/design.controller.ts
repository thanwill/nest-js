import { Controller, Get } from "@nestjs/common";
import { DesignService } from "./design.service";

@Controller("design")
export class DesignController {
    constructor(
        private readonly designService: DesignService
    ) { }

    @Get("singleton")
    public singleton(): object {
        return this.designService.singleton();
    }

    @Get("facade")
    public facade(): object {
        return this.designService.facade();
    }
    
}