interface IPerson {
    name: String;
    age: Number;
    [propName: string]: any;
}

interface Teacher extends IPerson {
    teach(): string;
}

class Person1 {
    constructor(public config: IPerson) {}
}

interface Animal2 {
    eat():any;
}

class Sheep implements Animal2 {
    eat() {
        console.log('i eat grass')
    }
}