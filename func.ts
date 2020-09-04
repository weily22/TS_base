// 返回值为 never 永远不会执行结束
function errorEmitter():never {
    while (true) {}
}

// 参数结构
function add({ first, second }: { first: number, second: number }) {
    return first + second;
}

add({ first: 2, second: 3 });


// 函数返回值参数写法
const func1 = (str: string):number => {
    return parseInt(str, 10);
};

const func2:(str: string) => number = (str) => {
    return parseInt(str, 10);
};

// 类型推断不出的情况
interface P {
    name: string
}
const rawData = '{"name": "xmi"}';
const data: P = JSON.parse(rawData);

// 多种类型的情况
let temp:number | string = 123;
temp = '123';