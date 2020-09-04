// 抽象类
// readonly 只读

class Person5 {
    constructor(public readonly name: string) {};
}

const person5 = new Person5('小米');
console.log('person5', person5.name);

// abstract 抽象关键字
// 只能被继承，不能被实例化
abstract class Geom {
    getType() { return 'Geom' };
    width: number;
    abstract getArea(): number;
}

class Circle extends Geom {
    getArea() {
        return 123;
    }
}
