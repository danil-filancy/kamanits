$(".main-slider-on").slick({
    autoplay: true,
    fade: true,
    dots: false,
    prevArrow: '<div class="left-arr"></div>',
    nextArrow: '<div class="right-arr"></div>',
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="' + thumb + '"></a>';
    },

    /*responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }]*/
});
$(".clients-slider").slick({
    autoplay: false,
    fade: false,
    dots: false,
    prevArrow: '<div class="left-arr-ar"></div>',
    nextArrow: '<div class="right-arr-ar"></div>',
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="' + thumb + '"></a>';
    },

    /*responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }]*/
});

/* When user clicks the Icon */
$('.nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
    event.preventDefault();
});
/* When user clicks a link */
$('.header-nav li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');

});


/***************** Header BG Scroll ******************/

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $('section.navigation').addClass('fixed');
            
            // $('header .member-actions').css({
            //     "top": "26px",
            // });
            // $('header .navicon').css({
            //     "top": "34px",
            // });
        } else {
            $('section.navigation').removeClass('fixed');
            
            // $('header .member-actions').css({
            //     "top": "41px",
            // });
            // $('header .navicon').css({
            //     "top": "48px",
            // });
        }
    });
});




$(document).ready(function(){
    $("a.link-go").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 112;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
    });
});