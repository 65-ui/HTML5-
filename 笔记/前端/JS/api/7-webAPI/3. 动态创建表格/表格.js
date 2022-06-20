// 学生数据
var datas = [
	{
		name: "牧云",
		subject: "无上神帝",
		score: 100,
	},
	{
		name: "谭云",
		subject: "无上神帝",
		score: 100,
	},
	{
		name: "紫暮",
		subject: "无上神帝",
		score: 100,
	},
];
// 1.创建tbody行，取决于有多少数据
var tbody = document.querySelector("tbody");
for (var i = 0; i < datas.length; i++) {
	// 2.创建tr
	var tr = document.createElement("tr");
	tbody.appendChild(tr);
	// 3.tr里面创建单元格
	for (var k in datas[i]) {
		// 创建单元格
		var td = document.createElement("td");
		// console.log(datas[i][k]);
		td.innerHTML = datas[i][k];
		tr.appendChild(td);
	}
	// 4.创建有两个字单元格
	var td = document.createElement("td");
	td.innerHTML = '<a href="javascript:;">删除</a>';
	tr.appendChild(td);
}
// 5.删除数据
var as = document.querySelectorAll("a");
for (var i = 0; i < as.length; i++) {
	as[i].onclick = function () {
		tbody.removeChild(this.parentNode.parentNode);
	};
}
