$(document).ready(function() {

  // MENU
	$(".menu-toggle").click(function() {
		$(".menu-toggle").toggleClass("menu-toggle_active");
		$(".menu").toggleClass("menu_active");
	});

	$(".menu__link").click(function() {
    $(".menu-toggle").removeClass("menu-toggle_active");
    $(".menu").removeClass("menu_active");
  });

  // SMOOTH SCROLL
  $('a[href*="#"]')
 	.not('[href="#"]')
  	.not('[href="#0"]')
  	.click(function(event) {
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    )   {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
         	   return false;
            } else {
           	 $target.attr('tabindex','-1');
           	 $target.focus();
            };
        	});
     		}
    	}
    });

		// SHOW MORE SKILLS
		$(".skills__show-more").click(function() {
			$(".skills__items-hidden").toggleClass("skills__items-hidden_active");

	    $(this).toggleClass(".skills__show-more_active");
	    if($(this).hasClass(".skills__show-more_active")) {
	    	$(this).text('Show Less');
	    } else {
	    	$(this).text('Show More');
	    }

			if(!$(".skills__items-hidden").hasClass("skills__items-hidden_active")) {
				$('html, body').animate({
					scrollTop: $("#skills").offset().top + 0
				}, 1000);
			}
		});

		// WORKS TABS
		$(".works__item").not(":first").hide();
		$(".works__tab").click(function() {
		  $(".works__tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".works__item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".works__tab").click(function() {
		  if($(this).hasClass("works__tab_2")) {
		    $(".progress__line").css("left", "25%");
		  } else if ($(this).hasClass("works__tab_3")) {
		    $(".progress__line").css("left", "50%");
		  } else if ($(this).hasClass("works__tab_4")) {
		    $(".progress__line").css("left", "75%");
		  } else {
		    $(".progress__line").css("left", "0%");
		  }
		});

		// TWEETS SLIDER
		var tweets = $(".tweets__tweet");
		var currentTweet = 0;
		function changeTweet() {
			$(tweets[currentTweet]).fadeOut(300, function() {
				if (currentTweet == tweets.length - 1) {
					currentTweet = 0;
				} else {
					currentTweet++;
				}
				$(tweets[currentTweet]).fadeIn(300);
			});
		}
		var tweetsTimer = setInterval(changeTweet, 3000);

});
