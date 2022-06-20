// 1. 逻辑运算符与 && and 两侧都为true 结果是true ,一侧为false 结果是false
console.log(3 > 5 && 3 < 2);
console.log(3 < 5 && 3 > 2);
// 2. 逻辑运算符 || 或 两侧都为false 结果是false 一侧为true 结果是true
console.log(3 < 5 || 3 > 2);
console.log(3 > 5 || 3 < 2);
// 3 逻辑非 !
console.log(!true);
// 4. 中断运算符 如果表达式1 为true 则 返回表达式2,如果表达式1为false 则返回值为表达式1
console.log(123 && 456);
console.log(0 && 234);
// 0 '' undefined NaN null 都是 false
// 或 如果表达式1为true 则返回值为表达式1 如果表达式1为false，则返回表达式2
console.log(123 || 456);
console.log(0 || 456);

var num2 = 0;
console.log(123 || num2++);
console.log(num2);
