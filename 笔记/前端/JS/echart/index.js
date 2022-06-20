var myChart = echarts.init(document.querySelector("div"));
option = {
	xAxis: {
		type: "category",
		data: ["1", "2", "3", "4", "5", "6", "7"],
	},
};
myChart.setOption(option);
