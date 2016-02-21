$(function() {
	
		Morris.Bar({
	  element: 'bar-stela-feb21',
	  data: [
	    { y: '06:00', a: 1},
	    { y: '07:10', a: 2},
	    { y: '07:50', a: 1},
	    { y: '08:45', a: 3},
	    { y: '09:30', a: 2},
	    { y: '11:05', a: 1},
	    { y: '12:10', a: 1},
	    { y: '13:30', a: 3},
	    { y: '15:00', a: 3},
	    { y: '16:10', a: 4},
	    { y: '16:50', a: 2},
	    { y: '17:20', a: 1},
	    { y: '19:10', a: 2},
	    { y: '20:20', a: 3}
	  ],
	  xkey: 'y',
	  ykeys: 'a',
	  labels: ['Number of Tokens']
	});
	
	Morris.Bar({
	  element: 'bar-stela-feb22',
	  data: [
	    { y: '06:00', a: 2},
	    { y: '07:10', a: 1},
	    { y: '07:50', a: 1},
	    { y: '08:45', a: 1},
	    { y: '09:30', a: 2},
	    { y: '11:05', a: 3},
	    { y: '12:10', a: 4},
	    { y: '13:30', a: 1},
	    { y: '15:00', a: 0},
	    { y: '16:10', a: 3},
	    { y: '16:50', a: 1},
	    { y: '17:20', a: 2},
	    { y: '19:10', a: 1},
	    { y: '20:20', a: 3}
	  ],
	  xkey: 'y',
	  ykeys: 'a',
	  labels: ['Number of Tokens']
	});
	
	Morris.Donut({
	  element: 'earned-tokens-stela',
	  data: [
	    {label: "Match Task", value: 1},
	    {label: "Color Sort", value: 5},
	    {label: "Smile", value: 10},
	    {label: "Put on Socks", value: 3},
	    {label: "Good Behavior", value: 4},
	    {label: "Brushed Teeth", value: 3}
	  ]
	});
});