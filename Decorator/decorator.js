function Coffee(price) { }
Coffee.prototype.getPrice = function () {
    console.log('1');
}

function Decorator(obj) {
    this._obj = obj;
}
Decorator.prototype = Object.create(Coffee.prototype);
Decorator.prototype.constructor = Decorator;

function Milc(obj) {
    Decorator.call(this, obj);
    this.getPrice = function () {
        this._obj.getPrice();
        console.log('2');
    }
}
Milc.prototype.getPrice = function () {
    this._obj.getPrice();
    console.log('2');
}
Milc.prototype = Object.create(Decorator.prototype);
Milc.prototype.constructor = Milc;

function Sugar(obj) {
    Decorator.call(this, obj);
    this.getPrice = function () {
        this._obj.getPrice();
        console.log('3');
    }
}
Sugar.prototype = Object.create(Decorator.prototype);
Sugar.prototype.constructor = Sugar;

var coffee = new Coffee(),
    milc = new Milc(new Coffee()),
    sugar = new Sugar(new Coffee());
var sugarMilc = new Milc(new Sugar(new Coffee()));


// tests
coffee.getPrice()
console.log('-----------------');
milc.getPrice()
console.log('-----------------');
sugar.getPrice()
console.log('-----------------');
sugarMilc.getPrice()