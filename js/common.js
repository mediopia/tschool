var $window;
var $gnb_main_a;
var $nav;
var $gnb_sub_container;
var $cur_category;
var showAd = '';

var setDOMS = function(){
	$window = $(window);
	$gnb_main_a = $('.gnb_main li a');
	$nav = $('#nav');
	$gnb_sub_container = $('.gnb_sub_container');
	$cur_category = $('.search_form .cur_value');
};

$(window).load(function(){
	$('body').css('visibility', 'visible');
	setDOMS();

	//최상단 광고 관련
	showAd = getCookie('showAd');
	if(showAd == 'true' || showAd =='' || showAd == undefined || showAd == 'undefined'){
		$('.ad_container').show();
	}else{
		$('.ad_container').hide();
	}

	$('.ad_close').on('click', function(){
		setCookie('showAd', 'false', 1);
		$('.ad_container').hide();
	});
	//--최상단 광고 관련

	//검색창 관련
//	$('.search_form .category').on('click', function(){
//		var $this = $(this);
//		if($this.hasClass('open')){
//			$this.removeClass('open');
//		}else{
//			$this.addClass('open');
//		}
//	});
//
//	$('.search_form .category li').on('click', function(){
//		$this = $(this);
//		$cur_category.html($this.html());
//	});
	//--검색창 관련

    //검색창 관련
    $('.search').click(function(){
        $(this).toggleClass('on');
        //$(this).parents().find('.search_areaW').slideToggle(200);
        $(this).parents().find('.search_area').toggleClass('show');
    });

    //파일인풋
    $(function(){
		$('.upload_text').val('파일첨부');
		$('.input_file').change(function(){
			var i = $(this).val();
			$('.upload_text').val(i);
		});
	});

	//회원 정보 - 수강 과정 목록 관련
	$('.member_content .subject').on('click', function(){
		var $this = $(this);
		if($this.hasClass('open')){
			$this.removeClass('open');
		}else{
			$this.addClass('open');
		}
	});
	//--회원 정보 - 수강 과정 목록 관련

	//메인, 서브메뉴 관련
	$gnb_main_a.on('mouseover', function(){
		$gnb_main_a.removeClass('on');
		$(this).addClass('on');
		$gnb_sub_container.show();
	});

	$('.gnb_container').on('mouseleave', function(e){
		$gnb_main_a.removeClass('on');
		$gnb_sub_container.hide();
	});

	$('.gnb_sub_container .sub').on('mouseover', function(e){
		$gnb_main_a.removeClass('on');
		$('.gnb_main .' + $(this).attr('data-eq') + ' a').addClass('on');
	});
	//--메인, 서브메뉴 관련
});

//function quick_toggle(){
//	if($nav.hasClass('close')){
//		$nav.removeClass('close');
//	}else{
//		$nav.addClass('close');
//	}
//}
//
//function nav_fix(top){
//	var scroll = $window.scrollTop();
//
//	if(scroll >= top){
//		$nav.css({
//			'top' : scroll - top
//		});
//	}else{
//		$nav.css({
//			'top' : '0'
//		});
//	}
//}
