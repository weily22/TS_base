// 类的访问类型 private，protected，public
// public - 允许我在类的内外被调用
// private - 允许我在类的内部被调用
// protected - 允许我在类的内部和继承的子类中被调用

class Person3 {
    // 传统写法
    // public name: string;
    // constructor(name: string) {
    //     this.name = name;
    // }
    // 简化写法
    constructor(public name: string) {};
    public sayHi() {
        console.log('Hi');
    }
}

class Teacher3 extends Person3 {
    constructor(public age:number) {
        super('小米');
    }
    public sayBye () {
        console.log('Bye, ' + this.name + ', ' + this.age)
    };
}

const person3 = new Teacher3(18);
person3.sayHi();
person3.sayBye();