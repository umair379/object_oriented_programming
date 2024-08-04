//  ABSTRACTION
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // method for child
    Animal.prototype.breath = function () {
        console.log("this animal is breathing");
    };
    return Animal;
}());
//inheritance
var tiger = /** @class */ (function (_super) {
    __extends(tiger, _super);
    function tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tiger.prototype.makeSound = function () {
        console.log("roar !!!");
    };
    tiger.prototype.speed = function () {
        console.log("speed is 100");
    };
    return tiger;
}(Animal));
//inheritance
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cat.prototype.makeSound = function () {
        console.log("meow !!!");
    };
    cat.prototype.speed = function () {
        console.log("speed is 20");
    };
    return cat;
}(Animal));
// create objects
var tiger1 = new tiger();
var cat1 = new cat();
// print properties values
tiger1.name = "sultan";
tiger1.color = "orange";
console.log(tiger1);
cat1.name = "tom";
cat1.color = "blue";
console.log(cat1);
// invoke method
cat1.makeSound();
cat1.speed();
cat1.breath();
tiger1.makeSound();
tiger1.speed();
