# TS_base
>  Typescript 基础学习
>
>  **TypeScript 与 JavaScript 的区别**
>
>  |           TypeScript            |      JavaScript       |
>  | :-----------------------------: | :-------------------: |
>  | 是javaScript的超集，可以编译成纯javascript |    一种脚本语言，用于创建动态网页    |
>  |          能在编译期间发现并纠正错误          | 作为一种解释型语言，只能在运行时发现错误  |
>  |         强类型，支持静态检查和代码重构         |     弱类型，没有静态类型选项      |
>  |     需要被编译成javascript，使浏览器理解     |       直接在浏览器中运行       |
>  |           支持模块、泛型和接口            |      不支持模块、泛型和接口      |
>  |       支持es3,es4,es5,es6等        | 不支持编译es3,es4,es5,es6等 |

> **typescript优势**：
>
> 1. 支持 es6
> 2. 强大的IDE支持
> 3. angular2 的开发语言

## TypeScript

> 开发环境：
>
> * 在线 complier 编译
> * 本地 complier  (npm install -g typescript)
>
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
> *boolean* 、*number*、*string* 、*enum* 、*any* 、*void*、symbol
>
> *null* 、*undefined*、*never*
>
> **对象类型**
>
> *{}* ，*class* ，*function* ，*[]*
>
> **类型注解**
>
> ```typescript
> // 我们来告诉 TS 变量是什么类型
> let count:number;
> count = 12;
> ```
>
> **类型推断**
>
> ```typescript
> // TS 会自动尝试分析变量的类型
> let countInference = 123;
> ```
>
> 



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
> let arr:(number|string)[] = [1,'2',43]; // number或string类型数组
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
> 用来建立某种代码约定，使得其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定。
>
> 在TypeScript 里，接口的作用就是为类型命名和为你的代码或第三方代码定义契约。
>
> interface。声明类型。
>
> implement。实现
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
> 访问类型：private，protected，public
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
> // constructor 构造函数只在实例化的时候被执行一次，且为内部函数，不可被外部调用。
>
> interface IPerson {
>     name: String;
>     age: Number;
>     [propName: string]: any;
>     say(): string;
> }
>
> class User implements IPerson {
>   name="xm";
>   say() {
>     return "hello";
>   }
> }
>
> ```
>
> `继承`
>
> `extends`  `super`
>
> 获得继承类的所有属性和方法。
>
> `重写`
>
> **类里面的 setter 和 getter**
>
> ```typescript
> class Person4 {
>     constructor(private _name: string) {};
>     get name () {
>         return this._name;
>     }
>     set name (name: string) {
>         this._name = name;
>     }
> }
>
> const person4 = new Person4('小米');
> console.log(person4.name);
> person4.name = 'xiao_米';
> console.log(person4.name);
>
> =>>>
> 小米
> xiao_米
> ```
>
> **抽象类**
>
> ```typescript
> // abstract 抽象关键字
> // 只能被继承，不能被实例化
> abstract class Geom {
>     getType() { return 'Geom' };
>     width: number;
>     abstract getArea(): number;
> }
>
> class Circle extends Geom {
>     getArea() {
>         return 123;
>     }
> }
>
> ```
>
> 



> **泛型**
>
> 参数化的类型，一般用来限制集合的内容

> **模块**
>
> 在 typescript 中一个模块及一个文件
>
> `export` ` import`

> **类型定义文件** （*.d.ts）
>
> 供指定的框架使用
>
> 例如：jQuery
>
> 引入jquery.d.ts



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
> * generator函数。控制函数的执行过程，手工暂停和恢复代码执行。
> * destructuring析构表达式。通过表达式将对象或数组拆解成任意数量的变量。



> **interface 和 type  关键字**
>
> interface
>
> * 同名的 interface 自动聚合，也可以跟同名的 class 自动聚合。
> * 只能表示 object、class 、function 类型。
>
> type
>
> * 不仅仅能表示 object、class 、function 类型，还能表示基本类型、元素、并集等。
> * 不能重名，扩展已有的 type 需要创建新 type。
> * 支持复杂的类型操作。



> ### 实例
>
> 》 模板字符串  代码文件- string.ts
>
> ```typescript
> function test(tpl, name, age) {
>     console.log('tpl: ' + tpl);
>     console.log('name: ' + name);
>     console.log('age: ' + age);
> }
>
> const myName = 'xm';
> const getAge = function () { return 18; };
>
> test`我的名字是${myName},我的年龄是${getAge()}`;
>
> =>>>
> [LOG]: tpl: 我的名字是,,我的年龄是, 
> [LOG]: name: xm 
> [LOG]: age: 18 
> ```
>
> 》参数类型 代码文件- type.ts
>
> ```typescript
> // typescript 里面有类型推断机制，推断出myName为string类型，所以myName不能赋值给number类型
> var myName = "xm";
> myName = 18;
> =>>>
> Type 'number' is not assignable to type 'string'.
> ```
>
> 》参数默认值 代码文件- paramDefault.ts
>
> ```typescript
> // typescript 里面参数类型没有设置默认值，若少传了参数则提示报错
> function test (a, b, c) {
>   console.log('a: '+a);
>   console.log('b: '+b);
>   console.log('c: '+c);
> }
>
> test('x', 'y');
> =>>>
> Parameter 'a' implicitly has an 'any' type.
> Parameter 'b' implicitly has an 'any' type.
> Parameter 'c' implicitly has an 'any' type.
> Expected 3 arguments, but got 2.
>
> // 正确示范
> function test2(a:string, b:string, c:string = 'c') {
>   console.log('a: '+a);
>   console.log('b: '+b);
>   console.log('c: '+c);
> }
>
> test2('x', 'y');
>
> =>>>
> [LOG]: a: x 
> [LOG]: b: y 
> [LOG]: c: c 
>
> // 可选参数
> function test3(a:string, b?:string, c:string = 'c') {
>   console.log('a: '+a);
>   console.log('b: '+b);
>   console.log('c: '+c);
> }
> test3('x');
> test3('x', '', 'z');
>
> =>>>
> [LOG]: a: x 
> [LOG]: b: undefined 
> [LOG]: c: c 
> [LOG]: a: x 
> [LOG]: b:  
> [LOG]: c: z 
> ```
>
> 》类的继承    代码文件- class.ts
>
> ```typescript
> class Person {
>     constructor (public name: string) {
>         console.log('我是父类，哈哈', name);
>     }
>     eat() {
>         console.log("I'm eating");
>     }
> }
>
> let p1 = new Person('batman');
> p1.eat();
>
> class Employee extends Person {
>     constructor(name:string, code:string) {
>         super(name); // 调用父类的构造函数
>         console.log('我是子类，嘻嘻', code);
>         this.code = code;
>     }
>     code: string;
>     work() {
>         super.eat();
>         this.doWork();
>     }
>     private doWork() {
>         console.log('我开始干活了');
>     }
> }
>
> let el = new Employee("name", "啦啦123");
> el.work();
>
> =>>>
> [LOG]: 我是父类，哈哈,  batman 
> [LOG]: I'm eating 
> [LOG]: 我是父类，哈哈,  name 
> [LOG]: 我是子类，嘻嘻,  啦啦123 
> [LOG]: I'm eating 
> [LOG]: 我开始干活了 
> ```
>
> 》函数解构参数 代码文件-func.ts
>
> ```typescript
> // 参数结构
> function add({ first, second }: { first: number, second: number }) {
>     return first + second;
> }
> add({ first: 2, second: 3 });
> ```
>
> 
>
> 