$(function() {
//	
//	Morris.Bar({
//	  element: 'bar-john-feb21',
//	  data: [
//	    { y: '08:30', a: 2},
//	    { y: '10:00', a: 1},
//	    { y: '12:30', a: 3},
//	    { y: '14:00', a: 2},
//	    { y: '16:30', a: 1},
//	    { y: '18:00', a: 3},
//	    { y: '19:10', a: 2},
//	    { y: '20:30', a: 3}
//	  ],
//	  xkey: 'y',
//	  ykeys: 'a',
//	  labels: ['Number of Tokens Earned']
//	});
//	
//	Morris.Bar({
//	  element: 'bar-john-feb22',
//	  data: [
//	    { y: '08:30', a: 0},
//	    { y: '10:00', a: 1},
//	    { y: '12:30', a: 1},
//	    { y: '14:00', a: 2},
//	    { y: '16:30', a: 1},
//	    { y: '18:00', a: 0},
//	    { y: '19:10', a: 2},
//	    { y: '20:30', a: 1}
//	  ],
//	  xkey: 'y',
//	  ykeys: 'a',
//	  labels: ['Number of Tokens Earned']
//	});
	
	Morris.Donut({
	  element: 'earned-tokens-mark',
	  data: [
	    {label: "Washed Hands", value: 6},
	    {label: "Crushed Cans", value: 5},
	    {label: "Folded Towels", value: 4},
	    {label: "Brushed Teeth", value: 6},
	    {label: "Match Task", value: 3}
	  ]
	});
});