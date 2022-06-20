// 1.翻转数组; reverse 翻转
function reverse(arr) {
	var newArr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		newArr[newArr.length] = arr[i];
	}
	return newArr;
}
// var arr1 = reverse([1, 3, 66, "好嗨哟", 88]);
// console.log(arr1);

// 2.冒泡排序 sort 排序
function sort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
// console.log(sort([1, 2, 9, 4]));

// 3.判断闰年
function isRunYear(year) {
	var flag = false;
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		flag = true;
	}
	return flag;
}

// 4 用户输入年份,输出当前年份2月份天数
function backDay() {
	var year = prompt("请输入您的年份: ");
	if (isRunYear(year)) {
		alert("当前年份是闰年2月29天");
	} else {
		alert("当前年份是平年2月28天");
	}
}
// backDay();
