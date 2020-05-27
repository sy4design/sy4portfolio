$(document).ready(function(){
		var wd = $(window);

		$('section[data-type="background"]').each(function(){
				var bg = $(this);

				$(window).scroll(function() {
						var yPos = -(wd.scrollTop() / bg.data('speed'));
						var coords = '50%' + yPos + 'px';
						bg.css({backgroundPosition: coords});
				});
		});

		$(window).scroll(function(){
				if ($(this).scrollTop() < 100){
					$("#gobottom").fadeIn(function(){
						$("#gotop").fadeOut()
					});
				}else{
					$("#gobottom").fadeOut(function(){
						$("#gotop").fadeIn()
					});
				}
		})

		$("#gobottom").click(function(){
				$('body,html').animate({
						scrollTop:$(document).height()
				}, 10000);
				return false;
		});

		$("#gotop").click(function(){
				$('body,html').animate({
						scrollTop:0
				}, 1000);
				return false;
		})
})
