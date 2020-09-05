"use strict";
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['X', 'M'];
var myStr = myArray[0];
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
