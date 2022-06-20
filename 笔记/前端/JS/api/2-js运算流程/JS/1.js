// if (表达式) {
// 	// 表达式
// }
//
// if 如果表达式 为真 执行 if里面语句，否则不执行if 代码
// 网吧案例
var age = prompt("请输入你的年龄");
if (parseInt(age) >= 18) {
	alert("你可以去了");
} else {
	alert("未成年不能进入");
}
// 年份
var year = prompt("请输入年份: ");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	alert("闰年");
} else {
	alert("平年");
}
// 成绩案例
var scroe = prompt("请输入成绩");
if (scroe >= 90) {
	alert("A");
} else if (scroe >= 80) {
	alert("B");
} else if (scroe >= 70) {
	alert("C");
} else if (scroe >= 60) {
	alert("D");
} else {
	alert("E");
}
