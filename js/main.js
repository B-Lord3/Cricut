// JavaScript Document

/*------------ Animate logo -----------*/
$(document).ready(function(){
    $('.logo-container').mouseover(function(){
        boxIn();
    });
	
	$('.logo-container').mouseout(function(){
		boxOut();
    });
	
	function boxIn() {
		$('.logo-name').addClass('boxIn');
		$('.logo-name').removeClass('boxOut');
	}
	
	function boxOut() {
		$('.logo-name').addClass('boxOut');
		$('.logo-name').removeClass('boxIn');
	}
	
});


/*------------ Animate info button -----------*/
$(document).ready(function(){
	$('.btn-1 a').mouseover(function(){
		$('.btn-1 .flash').addClass('activate-flash');
    });
    $('.btn-2 a').mouseover(function(){
		$('.btn-2 .flash').addClass('activate-flash');
    });
    $('.btn-3 a').mouseover(function(){
		$('.btn-3 .flash').addClass('activate-flash');
    });
    $('.info-btn a').mouseout(function(){
        $('.flash').removeClass('activate-flash');
    });
});