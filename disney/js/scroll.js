$(function(){
//부드러운 화면 이동 no
		$("a.sc").click(function(e){
			$.scrollTo(this.hash || 0, 800 )
				e.preventDefault();
		});

//디즈니 로고 클릭 ok
		$("h1 a").click(function(){
				$(".left").css("left","-100%");		//왼쪽 커튼 열림
				$(".right").css("right","-100%");	//오른쪽 커튼 열림
				$("h1 a").fadeOut(1000);	//디즈니 로고 사라짐
				$("nav").animate({left:40},1000);	//네비게이션 노출
				$("#disney").css("right","-860px");	//디즈니 소개 살짝 노출
				$(".showNav").hide(1000);		//네비게이션 보기 버튼 사라짐
		})

//디즈니 소개 호버	ok
		$("#disney").hover(function(){
				$(this).css("right","-320px");	//살짝 보이던 디즈니 소개 전부 보이게
				$(".mikiBox").fadeIn(1000);
				$(".touch").fadeOut(1000);
				$(".dark").fadeIn(1000);
		},function(){
				$(this).css("right","-860px");	//디즈니 소개 살짝 노출
				$(".mikiBox").fadeOut(1000);
				$(".touch").fadeIn(1000);
				$(".dark").fadeOut(1000);
		})

//네비 메뉴 클릭 no
		$("nav a").click(function(){
				$(".left").css("left","0"); //왼쪽 커튼 닫힘
				$(".right").css("right","0"); //오른쪽 커튼 닫힘
				$("h1 a").fadeIn(1000); //디즈니 로고 나타남
				$("#disney").animate({right:-1200},1000) //디즈니 소개 사라짐
		})

//네비 메뉴중 디즈니메뉴 클릭 no
		$(".head a").click(function(){
				$("nav").animate({left:-200},1000); //네비게이션 사라짐
				$(".showNav").show(1000); //네비게이션 보기 버튼 나타남
		});

//네비게이션보기 버튼 클릭 no
		$(".showNav").click(function(){
					$("nav").animate({left:40},1000); //네비게이션 나타남
					$(".showNav").hide(1000); //네비게이션 보기 버튼 사라짐
		});


//섹션별 로고 클릭시 애니메이션 설정 no
		$("#cont1 h3 a").click(function(){
				$(".click1").css("display","none");
				$("#cont1 .say").show(1000);
				$("#cont1 #imgString").show(1000);
		})

		$("#cont2 h3 a").click(function(){
				$(".click2").css("display","none");
				$("#cont2 .say").show(1000);
				$("#cont2 #imgString").show(1000);
		})
		
		$("#cont3 h3 a").click(function(){
				$(".click3").css("display","none");
				$("#cont3 .say").show(1000);
				$("#cont3 #imgString").show(1000);
		})
		
		$("#cont4 h3 a").click(function(){
				$(".click4").css("display","none");
				$("#cont4 .say").show(1000);
				$("#cont4 #imgString").show(1000);
		})

	
})//제이쿼리연결 끝
