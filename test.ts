/*
 * @Author: Weily
 * @Date: 2020-05-27 11:07:19
 * @Description: file content
 * @LastEditors: Weily
 * @LastEditTime: 2020-05-29 18:13:14
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