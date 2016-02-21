$(function() {
	Morris.Bar({
		  element: 'bar-comparison-graph',
		  data: [
		    { y: 'Ben', a: 20},
		    { y: 'Sally', a: 10},
		    { y: 'Tom', a: 15}
		  ],
		  xkey: 'y',
		  ykeys: 'a',
		  labels: ["Number of Tokens Caregiver's Patients Have Earned"]
	});
});