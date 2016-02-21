$(function() {
	Morris.Donut({
	  element: 'earned-tokens-eleni',
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