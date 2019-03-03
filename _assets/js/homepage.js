//JS
$(document).ready(function(){

  $(window).resize(function() {
    $('#home, #scream, #contact').height($(window).height()); // Set the height of the window to the .home
  });

  $(window).trigger('resize');

  AOS.init({
    duration: 800,
    delay: 50,
  });

  var top1 = $('#home').offset().top;
  var top2 = $('#about').offset().top;
  var top3 = $('#scream').offset().top;
  var top4 = $('#contact').offset().top;
  var scrollPos = $(document).scrollTop();

  $('.nav__home a, .nav__about a, .nav__scream a, .nav__contact a').removeClass('current');
  if (scrollPos >= top1 && scrollPos < top2) {
    $('.nav__home a').addClass('current');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('.nav__about a').addClass('current');
  } else if (scrollPos >= top3 && scrollPos < top4) {
    $('.nav__scream a').addClass('current');
  } else if (scrollPos >= top3) {
    $('.nav__contact a').addClass('current');
  }

  $(window).scroll(function(){

    AOS.refresh();

    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    if($scrollTop > 0) {
        $("#main-nav").addClass("fixed");
    }
    else {
        $("#main-nav").removeClass("fixed");
    }

    var scrollPos = $(document).scrollTop();
    $('.nav__home a, .nav__about a, .nav__scream a, .nav__contact a').removeClass('current');
    if (scrollPos >= top1 && scrollPos < top2) {
      $('.nav__home a').addClass('current');
    } else if (scrollPos >= top2 && scrollPos < top3) {
      $('.nav__about a').addClass('current');
    } else if (scrollPos >= top3 && scrollPos < top4) {
      $('.nav__scream a').addClass('current');
    } else if (scrollPos >= top3) {
      $('.nav__contact a').addClass('current');
    }


  });

	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');

		$('html, body').animate( { scrollTop: $(page).offset().top }, 600 );
		return false;
	});

});
