"use strict";
// 类的访问类型 private，protected，public
// public - 允许我在类的内外被调用
// private - 允许我在类的内部被调用
// protected - 允许我在类的内部和继承的子类中被调用
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3 = /** @class */ (function () {
    // 传统写法
    // public name: string;
    // constructor(name: string) {
    //     this.name = name;
    // }
    // 简化写法
    function Person3(name) {
        this.name = name;
    }
    ;
    Person3.prototype.sayHi = function () {
        console.log('Hi');
    };
    return Person3;
}());
var Teacher3 = /** @class */ (function (_super) {
    __extends(Teacher3, _super);
    function Teacher3(age) {
        var _this = _super.call(this, '小米') || this;
        _this.age = age;
        return _this;
    }
    Teacher3.prototype.sayBye = function () {
        console.log('Bye, ' + this.name + ', ' + this.age);
    };
    ;
    return Teacher3;
}(Person3));
var person3 = new Teacher3(18);
person3.sayHi();
person3.sayBye();
