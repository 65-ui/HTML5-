// 1.添加1-100数字
var arr = [];
for (let i = 0; i < 100; i++) {
	arr[i] = i + 1;
}
console.log(arr);

// 2-1.塞选数组 方法1
var arr1 = [1, 4, 66, 66, 77, 98, 0, 42, 88];
var newArr = [];
var j = 0;
for (var i = 0; i < arr1.length; i++) {
	if (arr1[i] >= 10) {
		newArr[j] = arr1[i];
		j++;
	}
}
console.log(newArr);

// 方法2 塞选大于10
var arr1 = [1, 4, 66, 66, 77, 98, 0, 42, 88];
var newArr = [];
for (var i = 0; i < arr1.length; i++) {
	if (arr1[i] >= 10) {
		newArr[newArr.length] = arr1[i];
	}
}
console.log(newArr);
// 塞选没有零数组
var arr2 = [1, 4, 66, 66, 77, 98, 0, 42, 88];
var newArr1 = [];
for (var i = 0; i < arr2.length; i++) {
	if (arr2[i] !== 0) {
		newArr1[newArr1.length] = arr2[i];
	}
}
console.log(newArr1);

// 3.翻转数组
var arr3 = [1, 4, 66, 66, 77, 98, 0, 42, 88];
var newArr2 = [];
for (var i = arr3.length - 1; i >= 0; i--) {
	newArr2[newArr2.length] = arr3[i];
}
console.log(newArr2);
// 4.冒泡排序
var arr4 = [3, 2, 1, 4, 5];
for (var i = 0; i <= arr4.length - 1; i++) {
	for (let j = 0; j <= arr4.length - i - 1; j++) {
		if (arr4[j] > arr4[j + 1]) {
			var temp = arr4[j];
			arr4[j] = arr4[j + 1];
			arr4[j + 1] = temp;
		}
	}
}
console.log(arr4);
