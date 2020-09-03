interface IPerson {
    name: String;
    age: Number;
}

class Person1 {
    constructor(public config: IPerson) {}
}

interface Animal {
    eat();
}

class Sheep implements Animal {
    eat() {
        console.log('i eat grass')
    }
}