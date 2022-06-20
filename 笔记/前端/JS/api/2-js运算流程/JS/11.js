// continue 跳出当前次循环
for (var i = 1; i <= 5; i++) {
	if (i == 3) {
		continue;
	}
	console.log("我吃了" + i + "包子");
}
// break 跳出整个循环
for (var j = 1; j <= 5; j++) {
	if (j == 3) {
		break;
	}
	console.log("我吃了" + j + "包子");
}
