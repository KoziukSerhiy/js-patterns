// Factory
function InfoMess() { }

// Public method
InfoMess.prototype.show = function () {
    console.log("InfoMess show: " + this.status);
};

// Factory method
InfoMess.create = function (type) {
    if (InfoMess[type].prototype.show === undefined) {
        InfoMess[type].prototype = new InfoMess();
    }

    return new InfoMess[type]();
};

// Specialized constructors.
InfoMess.error = function () {
    this.status = "Error";
};

InfoMess.good = function () {
    this.status = "Good";
};


// Tests
var errorMess = InfoMess.create('error');

var goodMess = InfoMess.create('good');

errorMess.show();
goodMess.show();