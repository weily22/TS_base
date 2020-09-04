// getter 和 setter
class Person4 {
    constructor(private _name: string) {};
    get name () {
        return this._name;
    }
    set name (name: string) {
        this._name = name;
    }
}

const person4 = new Person4('小米');
console.log(person4.name);
person4.name = 'xiao_米';
console.log(person4.name);

// 单例模式
// static 方法挂在类上，而不是实例上
class Demo {
    private static instance: Demo;
    private constructor () {};
    static getInstance () {
        if (!this.instance) {
            this.instance = new Demo();
        }
        return this.instance;
    }
}

const demo1 = Demo.getInstance();