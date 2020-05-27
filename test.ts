/*
 * @Author: Weily
 * @Date: 2020-05-27 11:07:19
 * @Description: file content
 * @LastEditors: Weily
 * @LastEditTime: 2020-05-27 16:13:00
 */ 
interface LabelledValue {
  label: string;
}

function printLabel(labeledObj: LabelledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 object' };
printLabel(myObj);