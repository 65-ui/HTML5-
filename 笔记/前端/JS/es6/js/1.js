class Father {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	sum() {
		console.log(this.x + this.y);
	}
	say() {
		return "我是父亲";
	}
}
class Son extends Father {
	constructor(x, y) {
		super(x, y);
		this.x = x;
		this.y = y;
	}
	say() {
		console.log(super.say() + "的儿子");
	}
	jian(x, y) {
		console.log(this.x - this.y);
	}
}

var son = new Son(1, 3);
var lsp = new Son(44, 66);
son.sum();
son.say();
son.jian();
