# TS_base
>  Typescript 基础学习
>
> **TypeScript 与 JavaScript 的区别**
>
> |                 TypeScript                 |                JavaScript                |
> | :----------------------------------------: | :--------------------------------------: |
> | 是javaScript的超集，可以编译成纯javascript |      一种脚本语言，用于创建动态网页      |
> |         能在编译期间发现并纠正错误         | 作为一种解释型语言，只能在运行时发现错误 |
> |       强类型，支持静态检查和代码重构       |         弱类型，没有静态类型选项         |
> |    需要被编译成javascript，使浏览器理解    |            直接在浏览器中运行            |
> |            支持模块、泛型和接口            |          不支持模块、泛型和接口          |
> |           支持es3,es4,es5,es6等            |       不支持编译es3,es4,es5,es6等        |



## TypeScript

> `Verson: 3.1`
>
> 安装方式：
>
> * 通过npm（Node.js包管理器）
> * 安装Visual Studio的TypeScript插件
> * 其他方式请参考官方文档
>
> ```typescript
> // 以 npm 举例
> npm install -g typescript
> ```



> **TypeScript 基础类型：**
>
> *boolean* 、*number*、*string* 、*array*、*enum* 、*any* 、*void*
>
> *null* 、*undefined*、*never*、*object*



> **TypeScript 定义变量的方式：**
>
> `通过var/let/const关键字 变量名后面+冒号 + 数据类型来指定`
>
> `数组使用”[]“来声明`
>
> ```typescript
> let isOk:bollean = false;
> let aNumber:number = 7;
> let xm:string = 'xiaomi';
> let arr:number[] = [1,2,43]; // number类型数组
> let list:string[] = ['a','b','c']; // 字符串类型数组
> let myArray:Array = [1,2,'x','m',true,3]; // 任意类型数组
> let notSure:any = 4; // 变量notSure的类型为任意类型
> let anylist:any[] = [1, true, 'g']; // 任意类型数组
> ```
>
> `枚举类型 enum 声明方式`：
>
> ```typescript
> // 默认情况下，从0开始为元素编号，后面每一项都增加1
> enum Color { Red, Green, Blue };
> let c:Color = Color.Green; // 1 
> 
> // 为每一项指定特定值
> enum Color2 { Red = 1, Green = 2, Blue = 4 };
> let c2:Color2 = Color2.Green; // 2
> 
> // 通过枚举值得到名字
> enum Color3 { Red = 1, Green, Blue };
> let colorName: string = Color3[2];
> console.log(colorName); // Green
> colorName = Color3[4];
> console.log(colorName); // undefined
> ```
>
> `void 类型与any相反，表示没有任何类型`
>
> ```typescript
> // 这个类型仅能在函数中使用,将函数返回值指定为void,表示该函数不返回任何值
> function warnUser():void {
>     console.log('This is my warning message');
> }
> ```
>
> `null 和 undefined 两者各自有自己的类型分别叫做 undefined 和 null`
>
> ```typescript
> // 默认情况下，null 和 undefined 是所有类型的子类型。
> // 当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和他们各自。
> let u:undefined = undefined;
> let n:null = null;
> ```
>
> `never 表示永不存在的值的类型`
>
> ```typescript
> // 返回 never 的函数 必须存在无法达到的终点
> function error(message:string):never {
>     throw new Error(message);
> }
> ```
>
> `object 是非原始类型`
>
> ```typescript
> declare function create(o:object | null):void;
> create({ props: 0 }); // ok
> create(null); // ok
> create(42); // error
> ```



> **类型断言**
>
> 类型断言是一种告诉编译器变量类型的机制，类型断言好比其他语言里的类型转换，但是不进行数据检查和解构，它只在编译阶段起作用。
>
> 断言形式：
>
> 1. ”尖括号<>“语法
> 2. as 语法
>
> ```typescript
> let sameValue:any = 'This is a string';
> let strLength:number = (<string>sameValue).length;
> let strLength2:number = (sameValue as string).length;
> ```



> **接口**
>
> 在TypeScript 里，接口的作用就是为类型命名和为你的代码或第三方代码定义契约。
>
> ```typescript
> interface LabelledValue {
>   label: string;
> }
> function printLabel(labelledObj: LabelledValue) {
>   console.log(labelledObj.label);
> }
> let myObj = {size: 10, label: "Size 10 Object"};
> printLabel(myObj);
> ```
>
> `可选属性`
>
> ```typescript
> interface SquareConfig {
>     color?:string;
>     width?:number;
> }
> ```
>
> `只读属性`
>
> ```typescript
> interface Point {
>     readonly x:number;
>     readonly y:number;
> }
> ```
>
> `readonly `/ `const`
>
> 作为变量使用的话用 *const* ,若做为属性则使用 *readonly*
>
> 包含任意数量的属性
>
> ```typescript
> interface SquareConfig {
>    color?:string;
>    width?:number;
>    [propName:string]:any;
> }
> ```
>
> `函数类型`
>
> ```typescript
> interface SearchFun {
>   (source:string, subString:string): boolean;
> }
> 
> let mySearch:SearchFun;
> mySearch = function (src, sub) {
>   let result = src.search(sub);
>   return result > -1;
> }
> ```
>
> `可索引的类型`
>
> ```typescript
> interface StringArray {
>   [index: number]: string;
> }
> let myArray: StringArray;
> myArray = ['X', 'M'];
> let myStr: string = myArray[0];
> // 可以给索引签名设置为只读
> interface ReadonlyStringArray {
>     readonly [index:number]: string;
> }
> let myArray2:ReadonlyStringArray = ["Xiao", "mi"];
> myArray2[2] = "Jiang"; // error!因为是只读，所以不能设置
> ```
>
> `类类型`
>
> ```typescript
> // 在接口中描述一个方法，在类里实现它
> interface ClockInterface {
>     currentTime: Date;
>     setTime(d: Date);
> }
> class Clock implements ClockInterface {
>     currentTime: Date;
>     setTime(d: Date) {
>         this.currentTime = d;
>     }
>     constructor(h:number, m:number) {}
> }
> // 接口描述了类的公共部分
> 
> ```
>
> 类具有两个类型：静态部分的类型和实例的类型
>
> `继承接口`
>
> 和类一样，接口也可以相互继承，我们可以从一个接口里复制成员到另一个接口里
>
> ```typescript
> // 继承接口, 一个接口可以继承多个接口，创建出多个接口的合成接口。
> interface Shape {
>   color: string;
> }
> interface PenStroke {
>   penWidth: number;
> }
> 
> interface Square extends Shape, PenStroke {
>   sideLength: number;
> }
> 
> let square = <Square> {};
> square.color = 'blue';
> square.sideLength = 10;
> square.penWidth = 5.0;
> ```
>
> `混合类型`
>
> 一个对象可以同时做为函数和对象使用，并带有额外的属性
>
> ```typescript
> // 一个对象可以同时做为函数和对象使用，并带有额外的属性
> interface Counter {
>   (start: number): string;
>   interval: number;
>   reset(): void;
> }
> 
> function getCounter():Counter{
>   let counter = <Counter> function (start: number) {};
>   counter.interval = 123;
>   counter.reset = function () { };
>   return counter;
> }
> 
> let c = getCounter();
> c(10);
> c.reset();
> c.interval = 5.0;
> ```



> **类**
>
> ```typescript
> class Greeter {
>     greeting: string;  // 属性
>     constructor(message: string) {  // 构造函数
>       this.greeting = message;
>     }
>     greet() {   // 方法
>       return "Hello, " + this.greeting;
>     }
> }
> let greeter = new Greeter("world");
> // 当我们使用 new 构造一个Greeter的实例时，它会调用构造函数，创建一个Greeter类型的新对象，并执行构造函数初始化它。
> ```
>
> `继承`
>
>
>
>





> **函数**
>
> TypeScript 为 JavaScript 函数添加了额外的功能：
>
> 函数类型包含：参数类型和返回类型
>
> * 为函数定义类型
>
> ```typescript
> // 函数声明
> function add (x:number, y:number):number {
>     return x + y;
> }
> // 函数表达式
> let myAdd = function (x:number, y:number):number {
>     return x + y
> };
> // 函数的完整类型
> let myAdd2:(x:number, y:number) => number = function (x:number, y:number):number {
>     return x + y;
> }
> ```
>
> * 可选参数、默认参数、剩余参数
>
> ```typescript
> // 在 TypeScript 中我们可以在参数名后面使用?实现可选参数的功能。
> function myName (firstName:string, lastName?:string) {
>     console.log('firstName: ' + firstName);
>     console.log('lastName: ' + lastName);
> }
> // 设置默认值
> function myName2 (firstName:string, lastName = 'mi') {
>    // ....
> }
> // 剩余参数
> function myName3 (firstName:string, ...restOfName:string[]) {
>    return firstName + " " + restOfName.join(""); 
> }
> let employeeName = myName3("xi", "ao", "m", "i");
> console.log(employeeName) // xiaomi
> ```
>
>