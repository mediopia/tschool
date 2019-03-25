var $window;
var $aside;

var setDOMS = function(){
	$window = $(window);
	$aside = $('#aside');
	$gnb_sub_bg = $('.gnb_sub_bg');
};

$(window).load(function(){
	$('body').css('visibility', 'visible');
	setDOMS();

	$gnb_sub_bg.click(function(){
		aside_toggle();
	});

});

function aside_toggle(){
	if($aside.hasClass('open')){
		$aside.removeClass('open');
		$('body').css('overflow-y', 'auto');
	}else{
		$aside.addClass('open');
		$('body').css('overflow-y', 'hidden');
	}
}
