// Iterator
class Iterator {
    constructor(arr) {
        this.index = 0;
        this.arr = arr;
    }
    next() {
        let obj = this.index < this.arr.length ?
            {
                value: this.arr[this.index++],
                done: false
            } : {
                done: true
            };

        return obj;
    }
};

// test
var it = new Iterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true