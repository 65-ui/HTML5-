// 1~100求和
var sum = 0;
for (var i = 1; i <= 100; i++) {
	sum += i;
}
console.log(sum);

// 1-100 偶数和奇数和
var even = 0;
var odd = 0;
for (var i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		even += i;
	} else {
		odd += i;
	}
}
console.log(even);
console.log(odd);
var num3 = 0; // 求和
var num4 = 0; // 求平均值
var num = prompt("请输入班级总人数: ");
for (var i = 1; i <= num; i++) {
	var num1 = prompt("班级人数第" + i + "人");
	num3 = num3 + parseFloat(num1);
}
num4 = num3 / num;
alert("班级人数成绩和: " + num3);
alert("班级人数平均值: " + num4);

// 一行5星星做法;
var num5 = prompt("请输入小星星");
str = "";
for (var i = 1; i <= 10; i++) {
	str = str + "☆";
}
console.log(str);
