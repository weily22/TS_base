class Person {
    constructor (public name: string) {
        console.log('我是父类，哈哈', name);
    }
    getName() {
        return this.name;
    }
    eat() {
        console.log("I'm eating");
    }
}

let p1 = new Person('batman');
p1.eat();
p1.getName();

class Employee extends Person {
    constructor(name:string, code:string) {
        super(name); // 调用父类的构造函数
        console.log('我是子类，嘻嘻', code);
        this.code = code;
    }
    code: string;
    work() {
        super.eat();
        this.doWork();
    }
    private doWork() {
        console.log('我开始干活了');
    }
}

let el = new Employee("name", "啦啦123");
el.work();

let workers: Array<Person> = []; // Person类型的泛型数组,数组里面只能存储Person类型
workers[0] = new Person('xiaom');

