$(function(){
		
	$('body #countdown').countdown({
		timestamp	: (new Date()).getTime() + 7*1000,
		callback:function(d, h, m, s){alert(d, h, m, s)},
	});
	window.setTimeout(function(){
	    $('body #countdown').countdown({
	        reset:true
	    });
	}, 5000);
});
