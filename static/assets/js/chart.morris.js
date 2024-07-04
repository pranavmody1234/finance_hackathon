$(function(){
	
	/* Morris Area Chart */
	
	window.mA = Morris.Area({
	    element: 'morrisArea',
	    data: [
	        { y: '2015', a: 710},
	        { y: '2016', a: 740},
	        { y: '2017', a: 690},
	        { y: '2018', a: 750},
	        { y: '2019', a: 770},
	        { y: '2020', a: 780},
	        { y: '2021', a: 770},
			{ y: '2022', a: 742},
			{ y: '2023', a: 760},

	    ],
	    xkey: 'y',
	    ykeys: ['a'],
	    labels: ['Revenue'],
	    lineColors: ['#1b5a90'],
	    lineWidth: 2,
		
     	fillOpacity: 0.5,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	
	/* Morris Line Chart */
	
	window.mL = Morris.Line({
	    element: 'morrisLine',
	    data: [
	        { y: '2024', a: 104.5, b: 84.8},
	        { y: '2025', a: 109.0,  b: 89.6},
	        { y: '2026', a: 113.5,  b: 94.4},
	        { y: '2027', a: 118.0,  b: 99.2},
	        { y: '2028', a: 0,  b: 104.0},
	        { y: '2029', a: 0,  b: 108.8},
	        { y: '2030', a: 0,  b: 113.6},
	        { y: '2031', a: 0,  b: 118.4},
			{ y: '2032', a: 0,  b: 123.2},
			{ y: '2033', a: 0,  b: 0},


	    ],
	    xkey: 'y',
	    ykeys: ['a', 'b'],
	    labels: ['Best Match', 'Your Bank'],
	    lineColors: ['#1b5a90','#ff9d00'],
	    lineWidth: 1,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	$(window).on("resize", function(){
		mA.redraw();
		mL.redraw();
	});

});