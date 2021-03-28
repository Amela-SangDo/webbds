$(document).ready(function(){
  $('.tags-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    arrows: false,
    autoplay: true
  });
  
  $('.hp-highlights').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/chevron-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/chevron-right.svg'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.hp-hotnews').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/chevron-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/chevron-right.svg'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#banner-top').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow:false,
    autoplay: true,
    dots: true,
  });

  $('.typicalBusiness').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/chevron-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/chevron-right.svg'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('#relation, #relation2').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/chevron-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/chevron-right.svg'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
  });
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
  $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('#toTop').addClass('fade-in');
      $('#toTop').removeClass('fade-out')
    } else {
      $('#toTop').addClass('fade-in')
      $('#toTop').addClass('fade-out')
    }
  });
  $("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
})
