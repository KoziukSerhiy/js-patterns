/**
 * The `Counter` class is a singleton class that allows for counting and manipulating a single count value.
 * It ensures that only one instance of the class is created and provides methods to increment, decrement, and retrieve the count value.
 */
class Counter {
  /**
   * Initializes the count value to 0 and sets the instance of the class as a static property.
   * It ensures that only one instance of the class is created.
   */
  constructor() {
    if (!Counter.instance) {
      /**
       * @type {number} The current count value.
       */
      this.count = 0;
      Counter.instance = this;
    }

    return Counter.instance;
  }

  /**
   * Increments the count value by 1.
   */
  increment() {
    this.count++;
  }

  /**
   * Decrements the count value by 1.
   */
  decrement() {
    this.count--;
  }

  /**
   * Returns the current count value.
   * @returns {number} The current count value.
   */
  getCount() {
    return this.count;
  }
}

// Tests
const counter_1 = new Counter();

console.log(counter_1.getCount()); // 0
counter_1.increment();

const counter_2 = new Counter();

console.log(counter_2.getCount()); // 1
console.log(counter_1 === counter_2); // true
