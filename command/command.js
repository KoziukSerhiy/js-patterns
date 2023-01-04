// command
class Switcher {
  _commandsList;

  constructor() {
    this._commandsList = [];
  }
  // public methot
  do(commandName) {
    const fnName = `_${commandName}`;

    if (this[fnName]) {
      this._commandsList.push(commandName);
      this[fnName]();
    }
  }
  // private methods
  _turnOn() {
    console.log("turnOn");
  }
  _turnOff() {
    console.log("turnOff");
  }
}

// test
const switcher = new Switcher();

switcher.do("turnOn");
switcher.do("turnOff");
