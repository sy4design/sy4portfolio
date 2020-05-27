	 $(function(){

		var menu = $("#menu"); //네비게이션 변수선언

				$("a.navicon").click(function(){ //모바일 아이콘 오버시 메뉴 보이기
						menu.toggle(function(){
						menu.animate({right:-20},100);
				});
		});


//슬라이드 설정
		//var sliding = $(".slideBox");//변수 선언

		//슬라이드영역
			var imgs = $(".imgBox");
			var photo =  imgs.find("img");
			var first = photo.eq(0);
			var second = photo.eq(1);
			var third = photo.eq(2);
			var fourth = photo.eq(3);

			function slide(){
			 	 imgs.css("left","0");
				 imgs.animate({left:-760},3000);

				 imgs.animate({left:-1520},3000);

				 imgs.animate({left:-2280},3000);

				 imgs.animate({left:-3040},3000,function(){
						first.appendTo(imgs);
						second.appendTo(imgs);
						third.appendTo(imgs);
						fourth.appendTo(imgs);
						imgs.css("left","0");
				 });
			};

		var timer = null; //변수 선언

	//play 버튼을 클릭했을 때 slide 실행,아이콘 변경
			$("li.play a").click(function(){
					$("li.stop").css("display","block");
					$("li.play").css("display","none");
					timer = setInterval(slide);
			});
	//stop 버튼을 클릭했을 때 slide중지,아이콘 변경
			 $("li.stop a").click(function(){
					clearInterval(timer);
					imgs.stop(true,true);
					$(".now").stop(true,true);
					$("li.play").css("display","block");
					$("li.stop").css("display","none");
			  })
}); //jQuery를 사용할 수 있는 함수
