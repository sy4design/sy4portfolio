$(function(){
  //alert("ok");



//네비 애니메이션
  $(".contact").click(function(){
    $(".gnb03").css("width","270");
    $(".gnb03").css("height","270");
    $(".gnb03").css("bottom","-100px");
    $(".cont_li").css("display","block");
    $(".cont_p").css("padding-top","15%");
    $(".cont_p").css("font-size","25px");
  })

  $(".gnb03_m").hover(function(){
    $(this).css("height","250");
    $(".cont_li_m").css("display","block");
    $(".contact_m").css("padding-top","15px");
    $(".contact_m").css("font-size","25px");
  },function(){
    $(this).css("height","70");
    $(".cont_li_m").css("display","none");
    $(".contact_m").css("padding-top","0");
    $(".contact_m").css("font-size","18px");
  })

  $(".open").click(function(){
    $("#gnb_m").slideDown(1000);
  })

  $(".close").click(function(){
    $("#gnb_m").slideUp(1000);
  })

  $("#gnb>li").hover(function(){
    $(this).css("width","170");
    $(this).css("height","170");
    $("#gnb>li").not(this).css("width","0");
    $("#gnb>li").not(this).css("height","0");
    $("#gnb>li a img").css("display","none");
  },function(){
    $(".gnb01").css("width","170");
    $(".gnb01").css("height","77");
    $("#gnb>li").not(".gnb01").css("width","77");
    $("#gnb>li").not(".gnb01").css("height","77");
    $("#gnb>li a img").css("display","block");
    $(".cont_li").css("display","none");
    $(".cont_p").css("padding-top","35%");
    $(".cont_p").css("font-size","20px");
    $(".gnb03").css("position","absolute");
    $(".gnb03").css("bottom","0");
  })

  $(document).ready(function() {

        setTimeout(function(){
          $("header").css("height", "250");
          $("header h1").css("top", "10px");
          $("header h1 a").css("width", "430px");
          $("header h1 a").css("height", "436px");
          $("header .txt").fadeOut(1000);
          $("header #gnb").css("right", "40px");
          $(".contWrap").css("height", "2400px");
        })

	});


})
