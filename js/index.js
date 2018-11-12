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