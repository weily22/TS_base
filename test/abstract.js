"use strict";
// 抽象类
// readonly 只读
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name;
    }
    ;
    return Person5;
}());
var person5 = new Person5('小米');
console.log('person5', person5.name);
// abstract 抽象关键字
// 只能被继承，不能被实例化
var Geom = /** @class */ (function () {
    function Geom() {
    }
    Geom.prototype.getType = function () { return 'Geom'; };
    ;
    return Geom;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.getArea = function () {
        return 123;
    };
    return Circle;
}(Geom));
