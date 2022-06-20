// var obj = new Object();
// obj.username = "张三丰";
// obj.age = 18;
// obj.sex = "男";
// obj.sayHi = function () {
// 	console.log("Hi");
// };
// console.log(obj.username);
// console.log(obj["sex"]);
// obj.sayHi();
// 构造函数
function Star(username, age, sex) {
	this.name = username;
	this.age = age;
	this.sex = sex;
	this.sing = function (sing) {
		console.log(sing);
	};
}
var zsf = new Star("张三丰", 18, "男");
zsf.sing("冰雨");
var zxy = new Star("张学友", 18, "男");
zxy.sing("李香兰");
// console.log(typeof zsf);
console.log(zsf.name);
console.log(zsf["sex"]);

var obj = {
	username: "三岁",
	age: 18,
	sex: "男",
	fun: function () {},
};
// 遍历对象
for (var k in obj) {
	console.log(obj[k]);
}
