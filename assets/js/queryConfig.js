
$(document).ready(function(){
	$("#collapse1").hide();
	$("#navCollapse1").hover(function(){
		$("#collapse1").slideDown(100);
		}, function(){
		$("#collapse1").slideUp(100);
	});
	
	$("#block1").hover(function(){
		$("#block1").toggleClass("contentBlocksActive");
	});
	$("#block2").hover(function(){
		$("#block2").toggleClass("contentBlocksActive");
	});
	$("#block3").hover(function(){
		$("#block3").toggleClass("contentBlocksActive");
	}); 
});
