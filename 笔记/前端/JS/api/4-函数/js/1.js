// 1-100和
function getSum() {
	var sum = 0;
	for (var i = 0; i <= 100; i++) {
		sum += i;
	}
	console.log(sum);
}

getSum();

function getSums(start, end) {
	var sum = 0;
	for (var i = start; i <= end; i++) {
		sum += i;
	}
	console.log(sum);
}

getSums(1, 100);

function getSums(start, end) {
	var sum = 0;
	for (var i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
}

getSums(1, 100);
console.log(getSums(30, 300));

function fu(numb1, numb2) {
	return [numb1 + numb2, numb1 - numb2, numb1 * numb2, numb1 / numb2];
}
var re = fu(4, 4);
for (var i = 0; i < re.length; i++) {
	console.log(re[i]);
}
