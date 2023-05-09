$(document).ready(function(){//전체를 도큐먼트.레디펑션하나로 묶던가 폼마다 써주거나 두가지 방법 가능
	
	/************************************
				로그인 폼 체크
	************************************/
	/*$("#btnLogin").on("click", function(){});*///이것도 가능!
	$("#btnLogin").click(function(){
		if($("#id").val() == ""){
			alert("아이디를 입력해주세요");
			$("#id").focus();
			return false;
		}else if($("#pass").val() == ""){
			alert("패스워드를 입력해주세요");
			$("#pass").focus();
			return false;
		}else{
			//서버전송
			loginForm.submit();
		}
	}); //btnLogin click
	
	/************************************
		    로그인 폼 - 다시쓰기 버튼 이벤트
	************************************/
	$("#btnLoginReset").click(function(){
		$("#id").val("").focus();
		$("#pass").val("");
	});//btnLoginReset click
	
	/************************************
		회원가입 폼 체크 - 유효성체크(=값의 유무만 확인!) 
	************************************/
	$("#btnJoin").click(function(){
		if($("#id").val() == ""){
			alert("아이디를 입력해주세요");
			$("#id").focus();
			return false;
		}else if($("#pass").val() == ""){
			alert("비밀번호를 입력해주세요");
			$("#pass").focus();
			return false;
		}else if($("#cpass").val() == ""){
			alert("비밀번호 확인을 입력해주세요");
			$("#cpass").focus();
			return false;
		}else if($("#name").val() == ""){
			alert("이름을 입력해주세요");
			$("#name").focus();
			return false;
		}else if($("input[name='gender']:checked").length == 0){//체크된 개수를 체크한다
			alert("성별을 선택해주세요");
			return false;
		}else if($("#email1").val() == ""){
			alert("이메일주소를 입력해주세요");
			$("#email1").focus();
			return false;
		}else if($("#email2").val() == ""){
			alert("이메일 주소를 선택해주세요");
			$("#email3").focus();
			return false;
		}else if($("#addr1").val() == ""){
			alert("주소를 선택해주세요");
			$("#btnSearchAddr").css("border","2px solid black");//버튼이라 focus안나옴 -> css추가하기
			return false;
		}else if($("#addr2").val() == ""){
			alert("상세주소를 입력해주세요");
			$("#addr2").focus();
			return false;
		}else if($("input[name='tel']:checked").length == 0){
			alert("통신사를 선택해주세요");
			return false;
		}else if($("#phone1").val() == "default"){
			alert("폰번호를 선택해주세요");
			$("#phone1").focus();
			return false;
		}else if($("#phone2").val() == ""){
			alert("전화번호를 입력해주세요");
			$("#phone2").focus();
			return false;
		}else if($("#phone3").val() == ""){
			alert("전화번호를 입력해주세요");
			$("#phone3").focus();
			return false;
		}else if($("input[name='hobby']:checked").length == 0){
			alert("취미를 선택해주세요");
			return false;
		}else{
			joinForm.submit();
		}
	});	//btnJoin
	
	
	/************************************
		회원가입 폼 체크 - 비밀번호 & 비밀번호 확인
	************************************/
	$("#cpass").on("blur", function(){
		if($("#pass").val() != "" && $("#cpass").val() != ""){
			if($("#pass").val() == $("#cpass").val()){
				$("#cmsg").text("비밀번호가 동일합니다.").css("color","blue").css("font-size","11px").css("display","block");
				$("#name").focus();
			}else{
				$("#cmsg").text("비밀번호가 동일하지 않습니다. 다시 입력해주세요").css("color","red").css("font-size","11px").css("display","block");
				$("#pass").val("").focus();
				$("#cpass").val("");
			}
		}
		
	});//비밀번호 확인 blur
	
	
	/************************************
		회원가입 폼 - 이메일 체크
	************************************/
	$("#email3").on("change", function(){
		if($("#email3").val() == "default"){
			alert("이메일을 선택해주세요");
			$("#email2").val("");
			$("#email3").focus();
		}else if($("#email3").val() == "self"){
			$("#email2").val("").focus();
		}else{
			$("#email2").val($("#email3").val());//이메일2칸에 이메일3에서 선택한값이 들어가게함.
		}
		
	});
	
	
	/************************************
		회원가입 폼 - 주소찾기 : daum API
	************************************/
	$("#btnSearchAddr").click(function(){
		new daum.Postcode({
			oncomplete: function(data) {
				$("#addr1").val("(" + data.zonecode + ") " + data.address);
				$("#addr2").focus();
			}
		}).open();
		
	});
	
	/************************************
		게시판 글쓰기 폼 체크 
	************************************/
	

}); //ready





























