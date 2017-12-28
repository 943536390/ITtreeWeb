$(document).ready(function() {
			if($(document).scrollTop() + $(window).height() >= $(document).height()){
				$(".bottom-btn").css('display', 'none');
				    $(".top-btn").css('display', 'block');
				    
				}
				if ($(document).scrollTop() == 0) {
					//alert("111");
					 $(".top-btn").css('display', 'none');
				    $(".bottom-btn").css('display', 'block');
				}

			$(window).bind('scroll', function(event) {
				/* Act on the event */
				if($(document).scrollTop() + $(window).height() >= $(document).height()){
					//alert("333");
				    $(".top-btn").css('display', 'block');
				    $(".bottom-btn").css('display', 'none');
				}
				else if($(document).scrollTop() > 0 ){
					//alert("222");
				    $(".top-btn").css('display', 'block');
				    $(".bottom-btn").css('display', 'block');
				}
				else if ($(document).scrollTop() == 0) {
					//alert("111");
					 $(".top-btn").css('display', 'none');
				    $(".bottom-btn").css('display', 'block');
				}
			});        
		});    