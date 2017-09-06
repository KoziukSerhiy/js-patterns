// singletone
class CreateInstance {
    constructor() {
        this.counter = 0;
    }
    increaseCounter() {
        this.counter++;
    }
    getCounter() {
        return this.counter;
    }
}

var CounterModule = (function () {
    var instance = null;

    return function () {
        return instance || (instance = new CreateInstance());
    };
})();

// Tests
var coun1 = new CounterModule();

console.log(coun1.getCounter()); // 0
coun1.increaseCounter();

var coun2 = new CounterModule();
console.log(coun2.getCounter()); // 1

console.log(coun1 === coun2); // true
