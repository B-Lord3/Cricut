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