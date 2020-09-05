"use strict";
var Person1 = /** @class */ (function () {
    function Person1(config) {
        this.config = config;
    }
    return Person1;
}());
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log('i eat grass');
    };
    return Sheep;
}());
