// rest and spread
function func(a, b, c) {
    console.log('a: ' + a);
    console.log('b: ' + b);
    console.log('c: ' + c);
}
function func2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
var arr = [1, 2, 3, 4];
// func(...arr);
// Expected 3 arguments, but got 0 or more.
func2.apply(void 0, arr);
