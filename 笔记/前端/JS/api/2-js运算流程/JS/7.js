// 打印五行五列星星
var str = "";
for (var i = 1; i <= 5; i++) {
	for (var j = 1; j <= 5; j++) {
		str = str + "*";
	}
	str = str + "\n";
}
console.log(str);

// 打印n行n列星星;
var rows = prompt("第n行");
var cols = prompt("第n列");
var str = "";
for (var i = 1; i <= rows; i++) {
	for (var j = 1; j <= cols; j++) {
		str = str + "*";
	}
	str = str + "\n";
}
console.log(str);

// 打印倒三角形
var str = "";
for (var i = 1; i <= 5; i++) {
	for (var j = i; j <= 5; j++) {
		str = str + "*";
	}
	str = str + "\n";
}
console.log(str);
