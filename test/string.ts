function test(tpl, name, age) {
    console.log('tpl: ' + tpl);
    console.log('name: ' + name);
    console.log('age: ' + age);
}

const myName = 'xm';
const getAge = function () { return 18; };

test`我的名字是${myName}, 我的年龄是${getAge()}`;