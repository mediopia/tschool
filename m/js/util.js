// 쿠키 저장하기
function setCookie(cName, cValue, cDay){
	var expire = new Date();
	expire.setDate(expire.getDate() + cDay);
	cookies = cName + '=' + escape(cValue) + '; path=/ ';
	if(typeof cDay != 'undefined'){
		cookies += ';expires=' + expire.toGMTString() + ';';
	}
	document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
	//log("cName : " + cName);
	cName = cName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cName);
	var cValue = '';
	if(start != -1){
		start += cName.length;
		var end = cookieData.indexOf(';', start);
		if(end == -1)end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}

// 여러줄 말줄임 함수
(function($) {
	$.fn.ellipsis = function(){
		return this.each(function(){
			var el = $(this);
			if(el.css("overflow") == "hidden"){
				var text = el.html();
				var multiline = el.hasClass('multiline');
				var t = $(this.cloneNode(true))
						.hide()
						.css('position', 'absolute')
						.css('overflow', 'visible')
						.width(multiline ? el.width() : 'auto')
						.height(multiline ? 'auto' : el.height());
						el.after(t);
				function height() { return t.height() > el.height(); };
				function width() { return t.width() > el.width(); };
				var func = multiline ? height : width;
				while (text.length > 0 && func()){
					text = text.substr(0, text.length - 1);
					t.html(text + "...");
				}
				el.html(t.html());
				t.remove();
			}
		});
	};
})(jQuery);
