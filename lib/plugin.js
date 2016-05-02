;(function (window) {
    "use strict";
    var document = window.document,
        $ = window.jQuery
        ;

    /* bxSlider */
    $(document).ready(function() {
        $('#gallery').bxSlider({
            minSlides: 11,
            maxSlides: 15,
            slideMargin: 2,
            ticker: true,
            speed: 70000,
            randomStart: true
        });

        $('#slide').bxSlider({
            auto:true,
            captions: false,
            speed:1000,
            pause:5000,
            pagerCustom:'#bxNav',
            controls: false,
            mode: 'fade'
        });

        /**
         * 初始化unslider
         */
        $('.banner').unslider({
            nav: false,
            arrows: {
                //  Unslider default behaviour
                prev: '<a class="unslider-arrow prev">&lt;</a>',
                next: '<a class="unslider-arrow next">&gt;</a>',
            }
        });
    });

}(window));