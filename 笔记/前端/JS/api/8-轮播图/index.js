window.addEventListener("load", function () {
	// 1.获取元素
	var press = document.querySelector(".press");
	var next = document.querySelector(".next");
	var box = document.querySelector(".box");
	var boxWidth = box.offsetWidth;
	// 2.鼠标经过就隐藏
	box.addEventListener("mouseenter", function () {
		press.style.display = "block";
		next.style.display = "block";
		clearInterval(timer);
		timer = null;
	});
	box.addEventListener("mouseleave", function () {
		press.style.display = "none";
		next.style.display = "none";
		timer = setInterval(function () {
			next.click();
		}, 2000);
	});
	// 3.动态生成小圆圈
	var ul = box.querySelector("ul");
	var ol = box.querySelector(".circle");
	// console.log(ul.children.length);
	for (var i = 0; i < ul.children.length; i++) {
		// 4.创建li;
		var li = document.createElement("li");
		li.setAttribute("index", i);
		// 5.ol插入li
		ol.appendChild(li);
		// 6. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
		li.addEventListener("click", function () {
			for (var i = 0; i < ol.children.length; i++) {
				// 干掉所有人 把所有的小li 清除 selected 类名
				ol.children[i].className = "";
			}
			// 留下我自己  当前的小li 设置selected 类名
			this.className = "selected";
			// 7. 点击小圆圈，移动图片 当然移动的是 ul
			var index = this.getAttribute("index");
			num = index;
			circle = index;
			animate(ul, -index * boxWidth);
		});
	}
	// 把ol里面的第一个小li设置类名为 selected
	ol.children[0].className = "selected";

	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	var num = 0;
	var circle = 0;
	var flag = true;
	// 右;侧按钮
	next.addEventListener("click", function () {
		if (flag) {
			flag = false;
			if (num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -num * boxWidth, function () {
				flag = true;
			});

			circle++;
			if (circle == ol.children.length) {
				circle = 0;
			}
			circleChange();
		}
	});
	// 左侧按钮
	press.addEventListener("click", function () {
		if (flag) {
			flag = false;
			if (num == 0) {
				num = ul.children.length - 1;
				ul.style.left = -num * boxWidth + "px";
			}
			num--;
			animate(ul, -num * boxWidth, function () {
				flag = true;
			});

			circle--;
			if (circle < 0) {
				circle = ol.children.length - 1;
			}
			circleChange();
		}
	});
	var timer = setInterval(function () {
		next.click();
	}, 2000);
	function circleChange() {
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = "";
		}
		ol.children[circle].className = "selected";
	}
});
