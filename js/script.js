/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));

//clear signup form onClick
$('input').on('click focusin', function() {
    this.value = '';
});

//set window size 
$(function(){
    $(window).load(function(){ // On load
        $('.container, .overlay').css({'height':(($(window).height()))+'px'});
    });
    $(window).resize(function(){ // On resize
        $('.container, .overlay').css({'height':(($(window).height()))+'px'});
    });
});