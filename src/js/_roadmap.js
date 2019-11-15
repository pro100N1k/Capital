$('.roadmap-slider').slick( {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    swipe: false,
    speed: 300,
    dotsClass: 'custom-dots',
    appendArrows: $('.roadmap-slider-arrows'),
    prevArrow: $('.roadmap-slider-arrows__prev'),
    nextArrow: $(' .roadmap-slider-arrows__next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
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
                slidesToScroll: 1,
                swipe: true
            }
        }
    ],
    // beforeChange: function() {
    //     const wrapper = $('.roadmap-slider');
    //     const slick = wrapper.find('.slick-slide');
    //     const slide = slick.closest('.roadmap-slider-item');
    //     const data = slick.attr('aria-hidden');
    //
    //     slick.each(function() {
    //         if($(this).attr('aria-hidden') == "true") {
    //             $(this).css('opacity','0.5');
    //         } else {
    //             $(this).css('opacity','1');
    //         }
    //     });
    // }
});
