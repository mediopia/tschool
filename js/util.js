// 글쓰기 파일 추가 관련

var flen = 0;
var objTbl;
var objRow;
var objCell;
function add_file(delete_code){
	var upload_count = upload_limit;
	if(upload_count && flen >= upload_count){
		alert("이 게시판은 "+upload_count+"개 까지만 파일 업로드가 가능합니다.");
		return;
	}
	if (document.getElementById){
		objTbl = document.getElementById("variable_files");
	}else{
		objTbl = document.all["variable_files"];
	}

	objRow = objTbl.insertRow(objTbl.rows.length);
	objCell = objRow.insertCell(0);

	objCell.innerHTML = '<input class="write_file" type="file" name="file[]" size="50" title="파일 용량 1,048,576 바이트 이하만 업로드 가능">';
	if (delete_code){
		objCell.innerHTML += delete_code;
	}

	flen++;
}

function del_file()
{
	var file_length = 0;
	var objTbl = document.getElementById("variable_files");
	if (objTbl.rows.length - 1 > file_length){
		objTbl.deleteRow(objTbl.rows.length - 1);
		flen--;
	}
}

//--글쓰기 파일 추가 관련

function open_window(theURL,winName,features){
	window.open(theURL,winName,features);
}

function checkemailaddy(){
	var form = document.edit_form;
	if (form.email_select.value == '1'){
		form.mail2.readOnly = false;
		form.mail2.value = '';
		form.mail2.focus();
	}
	else{
		form.mail2.readOnly = true;
		form.mail2.value = form.email_select.value;
	}
}

function popimage(imagesrc,winwidth,winheight){
	var look='width='+winwidth+',height='+winheight+',';
	popwin=window.open("","",look);
	popwin.document.open();
	popwin.document.write('<title>Image Window</title><body topmargin=0 leftmargin=0><img style=cursor:hand; onclick="self.close()" src="'+imagesrc+'"></body>');
	popwin.document.close();
}

function textarea_decrease(id, row){
	if (document.getElementById(id).rows - row > 0)
		document.getElementById(id).rows -= row;
}

function textarea_original(id, row){
	document.getElementById(id).rows = row;
}

function textarea_increase(id, row){
	document.getElementById(id).rows += row;
}

function textboxHold(val) {
	val = 0;
	if ($('input:radio[name="uniqueRadio_0"]:checked').val() == 'N') {
		$("input[name=unique_s01_" + val + "]").val('학교명');
		$("input[name=unique_s02_" + val + "]").val('년도');
		$("input[name=unique_s03_" + val + "]").val('지명명부번호');
		$("input[name=unique_s01_" + val + "]").attr("disabled", true);
		$("input[name=unique_s02_" + val + "]").attr("disabled", true);
		$("input[name=unique_s03_" + val + "]").attr("disabled", true);
		$("#unique_area_0 option:eq(0)").attr("selected", "selected");
		$("select[name=unique_area_0").attr("disabled", true);
	} else {
		$("input[name=unique_s01_" + val + "]").val('학교명');
		$("input[name=unique_s02_" + val + "]").val('년도');
		$("input[name=unique_s03_" + val + "]").val('지명명부번호');
		$("input[name=unique_s01_" + val + "]").attr("disabled", false);
		$("input[name=unique_s02_" + val + "]").attr("disabled", false);
		$("input[name=unique_s03_" + val + "]").attr("disabled", false);
		$("select[name=unique_area_0]").attr("disabled", false);
	}
	if ($('input:radio[name="uniqueRadio_' + val + '"]:checked').val() == 'N') {
		document.getElementById("frm").submit();
	}

}

function check_id(){
	var mb_id = document.getElementById("mb_id").value;
	var cnt = 0;
	var special_char = false;
	if(mb_id.search(/[0-9]/g) != -1 ) cnt ++;
	if(mb_id.search(/[a-zA-Z]/ig)  != -1 ) cnt ++;
	if(mb_id.search(/[!@#$%^&*()?~]/g)  != -1  ){
		special_char = true;
		cnt ++;
	}else if(mb_id.search(/[_]/g) != -1){
		special_char = false;
		cnt ++;
	}else{
		special_char = false;
	}
	console.log(special_char);

	if(mb_id.length < 5 || mb_id.length > 10){
		document.getElementById("msg_id").innerHTML = '아이디는 5자리 이상, 10자리 이하로 입력하세요.';
		document.getElementById("msg_id").style.color="red";
	}else{
		if(special_char){
			document.getElementById("msg_id").innerHTML = '특수문자를 제외해주세요.';
			document.getElementById("msg_id").style.color="red";
		}else if(cnt <= 1){
			document.getElementById("msg_id").innerHTML = '영문, 숫자 2종류 이상의 조합으로 입력해주세요.';
			document.getElementById("msg_id").style.color="red";
		}else{
			document.getElementById("msg_id").innerHTML = '사용하셔도 좋은 아이디 입니다.';
			document.getElementById("msg_id").style.color="blue";
		}
	}
}

function passwordlength(){
	var mb_password = document.getElementById("mb_password").value
	var cnt = 0;
	if(mb_password.search(/[0-9]/g) != -1 ) cnt ++;
	if(mb_password.search(/[a-zA-Z]/ig)  != -1 ) cnt ++;
	if(mb_password.search(/[!@#$%^&*()?_~]/g)  != -1  ) cnt ++;

	if(mb_password.length <= 9){
		//j$('#msg_mb_password').html('비밀번호는 10자리 이상으로 조합해 주세요').css('color', 'red');
		if(cnt > 1){
			document.getElementById("msg_password").innerHTML = '비밀번호는 10자리 이상으로 조합해 주세요';
			document.getElementById("msg_password").style.color="red"
		}else{
			document.getElementById("msg_password").innerHTML = '비밀번호는 10자리 이상, 2종류 이상으로 조합해 주세요.';
			document.getElementById("msg_password").style.color="red"
		}
	}else{
		if(cnt > 1){
			document.getElementById("msg_password").innerHTML = '';
		}else{
			document.getElementById("msg_password").innerHTML = '영문, 숫자, 특수문자 중 2종류 이상의 조합으로 입력해주세요.';
			document.getElementById("msg_password").style.color="red"
		}
	}
}

function passwordidentify(){
	var mb_password = document.getElementById("mb_password").value
	var mb_password_re = document.getElementById("mb_password_re").value

	if(mb_password != mb_password_re){
		//j$('#msg_mb_password_identify').html('비밀번호가 일치하지 않습니다.').css('color', 'red');
		document.getElementById("msg_password_re").innerHTML = '입력한 새 비밀번호가 일치하지 않습니다. 다시 입력해주세요.';
		document.getElementById("msg_password_re").style.color="red"
	}else{
		//j$('#msg_mb_password_identify').html('');
		document.getElementById("msg_password_re").innerHTML = '';
	}
}

function reset_txt(y) {
	if (y.defaultValue == y.value) {
		y.value = "";
	}
}

function tab_btn(target, mode, idx){
	if(mode === 'edu'){ // 메인페이지 - 좌측 교육청 메뉴
		$edu_wrap.find('ul').removeClass('on');
		$edu_wrap.find('.edu_banner.' + target).addClass('on');
		tab_toggle($edu_tab_btns, idx);
	}else if(mode === 'subject_category'){ // 메인페이지 - 과정 카테고리
		if(target === 'all'){
			$subject_list.find('li').show();
		}else{
			$subject_list.find('li').hide();
			$subject_list.find('.' + target).show();
		}
		tab_toggle($subject_tab_btns, idx);
	}else if(mode === 'notice_board'){ // 메인페이지 - 공지사항 탭
		$notice_wrap.find('.content').hide();
		$notice_wrap.find('.' + target).show();
		tab_toggle($notice_btns, idx);
	}else if(mode === 'credit'){ // 직무연수 - 연수신청 - 탭
		tab_toggle($credit_tab_btns, idx);
	}else if(mode === 'lecture_explain'){
		$explain_content.find('li').removeClass('on');
		$explain_content.find('.' + target).addClass('on');
		tab_toggle($explain_tab_btns, idx);
	}
}

function tab_toggle($target, idx){
	$target.find('a').removeClass('on');
	$($target.find('li a')[idx]).addClass('on');
}

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

var SNS = {
	Copy : function() {
		// Create a "hidden" input
		var aux = document.createElement("input");

		// Assign it the value of the specified element
		aux.setAttribute("value", location.href);

		// Append it to the body
		document.body.appendChild(aux);

		// Highlight its content
		aux.select();

		// Copy the highlighted text
		document.execCommand("copy");

		// Remove it from the body
		document.body.removeChild(aux);

		alert("주소가 복사되었습니다.");
	},
	Share : function(title, gb) {
		var url		= location.href,
		o 		= "",
		device 	= (/Android/i.test(navigator.userAgent)) ? "and" : (/iPhone|iPad|iPod/i.test(navigator.userAgent)) ? "ios" : "pc",
		target  = location.href,
		//target 	= "http://www.momntalk.com/snsShare.mnt?tt_no="+tt_no+"&mst_no="+mst_no+"&tt_key="+tt_key,
		//tt_dir	= (tt_key === "cont_no") ? "contents/bod" : (tt_key === "rsch_no") ? "contents/rsch" : "",
		snsimg	= "http://w2.tschool.net/data/banner_main_new/banner_1.jpg";
		//snsimg	= (tt_dir != "") ? "http://www.momntalk.com/upload/"+tt_dir+"/"+tt_no : "http://www.momntalk.com/resources/frontoffice/images/common/kakao_share.jpg";
		switch(gb){
			case 0: //facebook
				o = {
					method:'popup',
					//url:'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(target),
					url:'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(title)+'&src='+encodeURIComponent(snsimg),
					target : "SnS",
					size : "scrollbars=yes, resizable=yes, top=100, left=100, width=1024, height=600"
				};
				break;
			case 1: //kakaostory
				o = {
					method:'_tmpApp',
				};
				if(device == "pc") {
					Kakao.Story.share({
						url : target,
						text : title
					});
				} else if(device == "and" || device == "ios") {
					Kakao.Story.open({
						url : target,
						text : title,
						urlInfo: {
							title: title,
							desc: title,
							name: title,
							images: snsimg
						}
					});
				}
				break;
			case 2: //band
				if(device == "pc" ) {
					o = {
						method:'popup',
						url:'http://www.band.us/plugin/share?body=' + encodeURIComponent(title) + encodeURIComponent('\r\n') + encodeURIComponent(target) + '&route=' + encodeURIComponent(target)
					};
				} else if(device == "and" || device == "ios") {
					o = {
						method:'web2app',
						a_param:'create/post?text=' + encodeURIComponent(title) + encodeURIComponent('\r\n') + encodeURIComponent(target),
						g_param:'create/post?text=' + encodeURIComponent(title) + encodeURIComponent('\r\n') + encodeURIComponent(target),
						a_store:'itms-apps://itunes.apple.com/app/id542613198?mt=8',
						g_store:'market://details?id=com.nhn.android.band',
						a_proto:'bandapp://',
						g_proto:'scheme=bandapp;package=com.nhn.android.band'
					};
				}
				break;
			case 3: //kakaotalk
				o = {
					method:'_tmpApp',
				};
				if(device == "pc") {
					alert("PC환경에서 사용할 수 없습니다.");
				} else if(device == "and" || device == "ios") {
					Kakao.Link.sendTalkLink({
						label : "[티스쿨] " + title,
						image : {
							src: snsimg,
							width: '300',
							height: '300'
						},
						webButton : {
							text : "[티스쿨] " + title,
							url : url
						}
					});
				}
				break;
			case 4: //naver blog
				o = {
					method :'popup',
					url : "http://blog.naver.com/openapi/share?url=" + encodeURIComponent(target) + "&title=" + encodeURI(title)
				};
				break;
			default:
				alert('지원하지 않는 SNS입니다.');
				return false;
				}

				switch(o.method){
					case 'location':
						document.location = o.url;
						break;
					case 'popup':
						var popup = window.open(o.url, "_blank", "scrollbars=yes, resizable=yes, top=100, left=100, width=1024, height=600");
						if(popup == null || popup.screenLeft == 0) {
							alert("팝업차단 설정을 해제해주세요.");
						}
						break;
					case 'web2app':
						if(device == "and"){
							// Android
							setTimeout(function () {
								location.href = 'intent://' + o.g_param + '#Intent;' + o.g_proto + ';end'
							}, 1000);
						}
						else if(device == "ios"){
							// Apple
							setTimeout(function() { location.href = o.a_store }, 2000);
							setTimeout(function() { location.href = o.a_proto + o.a_param }, 1000);
						}
						break;
					case '_tmpApp':
						break;
					default:
						alert('지원하지 않는 SNS입니다.');
		}
	}
}

function popup_close(pop){
	$(pop).hide();
}

function popup_open(pop){
	$(pop).show();
}
