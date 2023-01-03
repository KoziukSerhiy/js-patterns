class Validator {
  constructor() {
    this.strategy = "";
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  check(params) {
    return this.strategy.check(params);
  }
}

// strategys
class StringStrategy {
  check(s) {
    typeof s === "string"
      ? console.log(`It's a string`)
      : console.log(`Not a string`);
  }
}

class NumberStrategy {
  check(n) {
    typeof n === "number"
      ? console.log(`It's a number`)
      : console.log(`Not a number`);
  }
}

// test
const name = "Tom";
const age = 18;

const validator = new Validator();

validator.setStrategy(new StringStrategy());
validator.check(name);
validator.setStrategy(new NumberStrategy());
validator.check(age);
