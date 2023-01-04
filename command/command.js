// command
class Switcher {
    constructor() {
        this.#commands = [];
    }
    // public methot
    do(commandName) {
        const fnName = `#${commandName}`;

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
const switcher = new Switcher();

switcher.do('turnOn');
switcher.do('turnOff');
