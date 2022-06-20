// 作用域恋 就近原则
var num = 10;
function fu() {
	var num = 20;
	function funs() {
		console.log(num);
	}
	funs();
}
fu();
