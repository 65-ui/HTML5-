var btn = document.getElementById("btn");
var div = document.querySelector("div");
btn.onclick = function () {
	div.innerText = getDate();
};
var ldh = document.getElementById("ldh");
var zxy = document.getElementById("zxy");
var img = document.querySelector("img");
ldh.onclick = function () {
	img.src = "img/ldh.jpg";
	img.title = "刘德华";
};
zxy.onclick = function () {
	img.src = "img/zxy.jpg";
	img.title = "张学友";
};
