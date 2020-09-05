"use strict";
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log('我是父类，哈哈', name);
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.eat = function () {
        console.log("I'm eating");
    };
    return Person;
}());
var p1 = new Person('batman');
p1.eat();
p1.getName();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        console.log('我是子类，嘻嘻', code);
        _this.code = code;
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        console.log('我开始干活了');
    };
    return Employee;
}(Person));
var el = new Employee("name", "啦啦123");
el.work();
var workers = []; // Person类型的泛型数组,数组里面只能存储Person类型
workers[0] = new Person('xiaom');
