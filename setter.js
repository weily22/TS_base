"use strict";
// getter 和 setter
var Person4 = /** @class */ (function () {
    function Person4(_name) {
        this._name = _name;
    }
    ;
    Object.defineProperty(Person4.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person4;
}());
var person4 = new Person4('小米');
console.log(person4.name);
person4.name = 'xiao_米';
console.log(person4.name);
// 单例模式
// static 方法挂在类上，而不是实例上
var Demo = /** @class */ (function () {
    function Demo() {
    }
    ;
    Demo.getInstance = function () {
        if (!this.instance) {
            this.instance = new Demo();
        }
        return this.instance;
    };
    return Demo;
}());
var demo1 = Demo.getInstance();
