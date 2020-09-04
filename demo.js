"use strict";
function demo(data) {
    var rst = Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
    console.log('rst: ' + rst);
    return rst;
}
demo({ x: 3, y: 4 });
