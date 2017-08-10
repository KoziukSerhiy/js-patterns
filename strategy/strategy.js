class Validator {
    constructor() {
        this.type = '';
    }
    setStrategy(t) {
        this.type = t;
    }
    check(s) {
        return this.type.check(s);
    }
}
var String = function () {
    this.check = (s) => {
        (typeof s === 'string') ?
            console.log(`It's a string`) :
            console.log(`Not a string`)
    }
};
var Number = function () {
    this.check = (n) => {
        (typeof n === 'number') ?
            console.log(`It's a number`) :
            console.log(`Not a number`)
    }
};

// test
var name = 'Tom',
    age = 18;

var string = new String();
var number = new Number();

var validator = new Validator();

validator.setStrategy(string);
validator.check(name);
validator.setStrategy(number);
validator.check(age);