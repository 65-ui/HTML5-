var text = document.getElementById("text");
// 获取焦点
text.onfocus = function () {
	if (this.value === "手机") {
		this.value = "";
	}
	this.style.color = "#333";
};
// 失去焦点
text.onblur = function () {
	if (this.value === "") {
		this.value = "手机";
	}
	this.style.color = "#999";
};
