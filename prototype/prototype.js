var MathFunctional = function () {
    this.sum = function () {
        console.log('sum = ' + (this.a + this.b));
    };

    this.subtraction = function () {
        console.log('subtraction = ' + (this.a - this.b));
    };
    
    this.multiplication = function() {
        console.log('multiplication = ' + (this.a * this.b));
    };
    
    this.division = function () {
        (this.b == 0) ? 
            console.log('Division by 0 is impossible') :
            console.log('division = ' + (this.a / this.b));
    };
};

function Calc(a, b) {
    this.a = a || 0;
    this.b = b || 0;
}
Calc.prototype = new MathFunctional();

// test
var calc = new Calc(1, 2);

calc.sum(); // sum = 3
calc.subtraction(); // subtraction = -1
calc.multiplication(); // multiplication = 2
calc.division(); // division = 0.5