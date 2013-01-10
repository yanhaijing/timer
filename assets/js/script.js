$(function(){
		
	$('#countdown').countdown({
		timestamp	: (new Date()).getTime() + 2*1000,
		callback:function(d, h, m, s){alert(d, h, m, s)}
	});
	
});
