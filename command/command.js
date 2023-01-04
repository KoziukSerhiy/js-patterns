// command
class Switch {
    constructor() {
        this.#commands = [];
    }
    // public methot
    do(commandName) {
        let fnName = `#${commandName}`;

        if (this[fnName]) {
            this.#commands.push(commandName);
            this[fnName]();
        };
    }
    // private methods
    #turnOn() {
        console.log('turnOn');
    }
    #turnOff() {
        console.log('turnOff');
    }
}

// test
var s = new Switch();

s.do('turnOn');
s.do('turnOff');
