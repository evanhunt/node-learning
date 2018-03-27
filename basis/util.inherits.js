const util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1989;
    this.sayhello = function () {
        console.log('Hello' + this.name);
    }
}

Base.prototype.showName = function() {
    console.log('this is name:' + this.name);
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

const objBase = new Base();
objBase.sayhello();
objBase.showName();
console.log(objBase);

const objSub = new Sub();
// objSub.sayhello();
objSub.showName();
console.log(objSub);
