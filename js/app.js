$(document).ready(function(){
    $('#slider').slider({
		width : '350',
		height: '150',
		duration: 500,
		delay: 4000,
		transition: 'slide', // ['slide'] <--- only option for now
		slideDirection: 'top' // ['left', 'up']
	});
});