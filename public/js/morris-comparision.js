$(function() {
	Morris.Bar({
	  element: 'bar-comparison-graph',
	  data: [
	    { y: 'Mark', a:15, b:13},
	    { y: 'Eleni', a:17, b:20},
	    { y: 'Lili', a:8, b:10}
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Tokens Earned Last Week', 'Tokens Earned This Week'],
	});
});