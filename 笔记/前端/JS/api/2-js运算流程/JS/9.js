num = 0;
while (num <= 100) {
	console.log("how are you");
	num++;
}
// 打印1~100岁
var year = 1;
while (year <= 100) {
	console.log("我今年第" + year + "岁了");
	year++;
}
// 1~100整数和
var sum = 0;
var i = 1;
while (i <= 100) {
	sum += i;
	i++;
}
console.log(sum);

var message = prompt("你爱我吗?");
while (message !== "我爱你") {
	var message = prompt("你爱我吗");
}
alert("我也爱你");
