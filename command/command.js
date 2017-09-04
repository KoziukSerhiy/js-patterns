// command
class Switch {
    constructor() {
        this._commands = [];
    }
    // public methot
    do(commandName) {
        let fnName = `_${commandName}`;

        if (this[fnName]) {
            this._commands.push(commandName);
            this[fnName]();
        };
    }
    // private methods
    _turnOn() {
        console.log('turnOn');
    }
    _turnOff() {
        console.log('turnOff');
    }
}

// test
var s = new Switch();

s.do('turnOn');
s.do('turnOff');