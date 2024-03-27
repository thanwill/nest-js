export class Facade {
    
    private subsystem1: Subsystem1;
    private subsystem2: Subsystem2;

    constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
        this.subsystem1 = subsystem1;
        this.subsystem2 = subsystem2;
    }

    public operation(): any {
        let result = [];
        
        result.push('Facade initializes subsystems:');
        result.push(this.subsystem1.operation1());
        result.push(this.subsystem2.operation1());
        result.push('Facade orders subsystems to perform the action:');
        result.push(this.subsystem1.operationN());
        result.push(this.subsystem2.operationZ());
        
        return result;
    }
}

export class Subsystem1 {
    public operation1(): string {
        return 'Subsystem1: Ready!\n';
    }

    public operationN(): string {
        return 'Subsystem1: Go!\n';
    }
}

export class Subsystem2 {
    public operation1(): string {
        return 'Subsystem2: Get ready!\n';
    }

    public operationZ(): string {
        return 'Subsystem2: Fire!\n';
    }
}
