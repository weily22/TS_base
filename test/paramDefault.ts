function test (a, b, c) {
    console.log('a: '+a);
    console.log('b: '+b);
    console.log('c: '+c);
}

// test('x', 'y');
// Expected 3 arguments, but got 2.

function test2(a:string, b:string, c:string = 'c') {
    console.log('a: '+a);
    console.log('b: '+b);
    console.log('c: '+c);
}

test2('x', 'y');

// 可选参数
function test3(a:string, b?:string, c:string = 'c') {
    console.log('a: '+a);
    console.log('b: '+b);
    console.log('c: '+c);
}
test3('x');
test3('x', '', 'z');