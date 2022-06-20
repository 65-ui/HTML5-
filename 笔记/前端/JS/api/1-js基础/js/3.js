var temp;
var apple1 = "红苹果";
var apple2 = "绿苹果";
// 把apple1 给我们临时变量temp
temp = apple1;
// 把apple2 给苹果🍎里边的apple1
apple1 = apple2;
// 把temp 赋值给apple2
apple2 = temp;
console.log(apple1);
console.log(apple2);
