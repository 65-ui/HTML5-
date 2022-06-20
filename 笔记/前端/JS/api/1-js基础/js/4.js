// 1.数字型 Number
// 十六进制;
var num1 = 0x9;
console.log(num1);
// 2.strong
var str = "我是一个'高富帅'的\n程序员";
console.log(str.length);

var num = 10;
console.log(typeof num);
var num3 = undefined;
console.log(typeof num3);
var num4 = null;
console.log(typeof num4);

var stderrr = 10;
var numm3 = stderrr.toString();
console.log(numm3);
console.log(typeof numm3);
console.log(String(stderrr));
console.log(typeof String(stderrr));
console.log(stderrr + "");

console.log(parseInt("120px"));
console.log(parseFloat("3.1415rem"));

var number_Frist = parseFloat(prompt("请输入数字:"));
var number_Secound = parseFloat(prompt("请输入数字🔢"));
var result = number_Frist + number_Secound;
alert(result);

