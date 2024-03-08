/**
 * The `Validator` class is responsible for validating data using different strategies.
 * It allows the user to set a strategy and then use that strategy to check the validity of a given set of parameters.
 */
class Validator {
  /**
   * Initializes the `Validator` object with a null strategy.
   */
  constructor() {
    /**
     * Holds the current validation strategy.
     * @type {Object}
     */
    this.strategy = null;
  }

  /**
   * Sets the validation strategy to be used.
   * @param {Object} strategy - The validation strategy to be set.
   */
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  /**
   * Calls the `check` method of the current strategy to validate the given parameters.
   * @param {Object} params - The parameters to be validated.
   * @returns {boolean} - True if the parameters are valid, false otherwise.
   */
  check(params) {
    return this.strategy.check(params);
  }
}

// strategies
class StringStrategy {
  check(string) {
    if (typeof string === "string") {
      console.log(`It's a string`);

      return true;
    } else {
      console.log(`Not a string`);

      return false;
    }
  }
}

class NumberStrategy {
  check(number) {
    if (typeof number === "number") {
      console.log(`It's a number`);

      return true;
    } else {
      console.log(`Not a number`);

      return false;
    }
  }
}

// test
const userName = "Tom";
const userAge = 18;

const validator = new Validator();

validator.setStrategy(new StringStrategy());
validator.check(userName);
validator.setStrategy(new NumberStrategy());
validator.check(userAge);
