$(function() {
	Morris.Bar({
	  element: 'bar-comparison-graph',
	  data: [
	    { y: 'Ben', a: 20, b:17},
	    { y: 'Sally', a: 10, b:18},
	    { y: 'Tom', a: 15, b:22}
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Tokens Earned Last Week', 'Tokens Earned This Week'],
	});
});