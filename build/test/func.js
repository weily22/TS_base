"use strict";
// 返回值为 never 永远不会执行结束
function errorEmitter() {
    while (true) { }
}
// 参数结构
function add(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
add({ first: 2, second: 3 });
// 函数返回值参数写法
var func1 = function (str) {
    return parseInt(str, 10);
};
var func2 = function (str) {
    return parseInt(str, 10);
};
var rawData = '{"name": "xmi"}';
var data = JSON.parse(rawData);
// 多种类型的情况
var temp = 123;
temp = '123';
