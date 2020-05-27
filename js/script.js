$(function(){

//네비 애니메이션
  $(".contact").click(function(){
    $(".gnb03").css("width","270")
    $(".gnb03").css("height","270")
    $(".cont_li").css("display","block")
    $(".cont_p").css("padding-top","15%")
    $(".cont_p").css("font-size","25px")
  })

  $(".gnb03_m").hover(function(){
    $(this).css("height","250")
    $(".cont_li_m").css("display","block")
    $(".contact_m").css("padding-top","15px")
    $(".contact_m").css("font-size","25px")
  },function(){
    $(this).css("height","70")
    $(".cont_li_m").css("display","none")
    $(".contact_m").css("padding-top","0")
    $(".contact_m").css("font-size","18px")
  })

  $("#gnb>li").hover(function(){
    $(this).css("width","170")
    $(this).css("height","170")
    $("#gnb>li").not(this).css("width","0")
    $("#gnb>li").not(this).css("height","0")
    $("#gnb>li a img").css("display","none")
  },function(){
    $(".gnb01").css("width","170")
    $(".gnb01").css("height","77")
    $("#gnb>li").not(".gnb01").css("width","77")
    $("#gnb>li").not(".gnb01").css("height","77")
    $("#gnb>li a img").css("display","block")
    $(".cont_li").css("display","none")
    $(".cont_p").css("padding-top","35%")
    $(".cont_p").css("font-size","20px")
  })




  $(document).ready(function() {
	$(window).fadeThis({
		speed: 1000
	})

        setTimeout(function(){
          $(".ready_left").animate({left:-1000},1000)
          $(".ready_right").animate({right:-1000},1000)
          $(".ready_cont").css("display","none")
        },3500)

        setTimeout(function(){
            $(".ready").css("display","none")
        },4500)

   })

})
