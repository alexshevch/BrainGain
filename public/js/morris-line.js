$(function() {


	Morris.Line({
	  element: 'morris-line-chart',
	  data: [
	    { y: '2015-09', a: 70, b: 50 },
	    { y: '2015-10', a: 75,  b: 65 },
	    { y: '2015-11', a: 50,  b: 40 },
	    { y: '2015-12', a: 80,  b: 65 },
	    { y: '2016-01', a: 95,  b: 66 },
	    { y: '2016-02', a: 120, b: 90 }
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Tokens Received', 'Completed Tasks']
	});
});
