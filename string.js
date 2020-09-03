var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function test(tpl, name, age) {
    console.log('tpl: ' + tpl);
    console.log('name: ' + name);
    console.log('age: ' + age);
}
var myName = 'xm';
var getAge = function () { return 18; };
test(__makeTemplateObject(["\u6211\u7684\u540D\u5B57\u662F", ", \u6211\u7684\u5E74\u9F84\u662F", ""], ["\u6211\u7684\u540D\u5B57\u662F", ", \u6211\u7684\u5E74\u9F84\u662F", ""]), myName, getAge());
