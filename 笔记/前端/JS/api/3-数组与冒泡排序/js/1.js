var arr = [1, 2, "pink老师", true, "迪丽热巴"];
// 1.取出数组元素
console.log(arr[2]);
// 2.遍历数组
for (var i = 0; i < 4; i++) {
	console.log(arr[i]);
}
// 3.数组的长度
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
console.log(arr.length);

var str = "";
var sep = "=_=";
for (var i = 0; i < arr.length; i++) {
	str += arr[i] + sep;
}
console.log(str);

// 新增数组
arr[2] = "sansui";
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

var arr1 = [];
for (var i = 0; i < 100; i++) {
	arr1[i] = i + 1;
}
console.log(arr1);
