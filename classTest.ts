/*
 * @Author: Weily
 * @Date: 2020-06-09 17:54:07
 * @Description: file content
 * @LastEditors: Weily
 * @LastEditTime: 2020-06-09 18:11:26
 */ 
// 类的继承
// 类从基类中继承了属性和方法
// Dog 是一个派生类，它派生自 Animal 基类，通过 extends 关键字，派生类通常被称作子类，基类通常被称作超类。
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();