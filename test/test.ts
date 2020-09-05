/*
 * @Author: Weily
 * @Date: 2020-05-27 11:07:19
 * @Description: file content
 * @LastEditors: Weily
 * @LastEditTime: 2020-06-09 17:50:47
 */ 
interface SearchFun {
  (source:string, subString:string): boolean;
}

let mySearch:SearchFun;
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
}

// 可索引的类型
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['X', 'M'];
let myStr: string = myArray[0];

// 继承接口, 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square> {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;

// 一个对象可以同时做为函数和对象使用，并带有额外的属性
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter():Counter{
  let counter = <Counter> function (start: number) {};
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;