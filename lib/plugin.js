;(function (window) {
    "use strict";
    var document = window.document,
        $ = window.jQuery
        ;

    /* bxSlider */
    $(document).ready(function() {
        $('#gallery').bxSlider({
            minSlides: 11,
            maxSlides: 11,
            slideWidth: 280,
            slideMargin: 2,
            ticker: true,
            speed: 70000
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
        /**
         * 轮播hover效果
         */
        var isLock = false;
        $('.unslider-arrow.next').hover(
            function(){
                if(!isLock){
                    isLock = true;
                    $('.unslider ul').animate({
                        margin: '0 0 0 -50px'
                    }, 300, 'linear', function(){isLock = false});
                }
            },function() {
                if(!isLock){
                    isLock = true;
                    $('.unslider ul').animate({
                        margin: '0'
                    }, 300, 'linear', function(){isLock = false});
                }
            }
        );
        $('.unslider-arrow.prev').hover(
            function(){
                if(isLock){
                    isLock = true;
                    $('.unslider ul').animate({
                        margin: '0 0 0 50px'
                    }, 300, 'linear', function(){isLock = false});
                }
            },function() {
                if(isLock){
                    isLock = true;
                    $('.unslider ul').animate({
                        margin: '0'
                    }, 300, 'linear', function(){isLock = false});
                }
            }
        )
    });


    /* googleMap*/
    //var gmg = new google.maps.Geocoder(),
    //    map, mk, mk2;
    //
    //gmg.geocode({'address': '福岡県北九州市八幡西区泉ケ浦3-9-14'}, function(results, status) {
    //    if (status == google.maps.GeocoderStatus.OK) {
    //        initialize();
    //        //icon & shadow
    //        var icon = new google.maps.MarkerImage(
    //                "/common/img/map_icon.png",
    //                new google.maps.Size(70,77),
    //                new google.maps.Point(0,0),
    //                new google.maps.Point(35,77)
    //            ),
    //            shadow = new google.maps.MarkerImage(
    //                "/common/img/map_icon_shadow.png",
    //                new google.maps.Size(218.0, 154.0),
    //                new google.maps.Point(0, 0),
    //                new google.maps.Point(35, 77)
    //            );
    //
    //        //icon size (retina)
    //        icon.scaledSize = new google.maps.Size(70, 77);
    //        shadow.scaledSize = new google.maps.Size(109, 77);
    //
    //        mk = new google.maps.Marker({
    //            map: map,
    //            position: new google.maps.LatLng(33.846585, 130.719203),
    //            icon: icon,
    //            shadow: shadow,
    //            title: 'BRANCH HairDesign Esthetic'
    //        });
    //
    //        // toute
    //        var routeBtn = $("#routeBtn");
    //        routeBtn.click(function(event) {
    //            mk2 = new google.maps.Marker({
    //                map: map,
    //                position: new google.maps.LatLng(33.84654178366185, 130.7276942717583),
    //                animation: google.maps.Animation.DROP
    //            });
    //
    //            var From = new google.maps.LatLng(33.84654178366185, 130.7276942717583); // Post Office
    //            var To = new google.maps.LatLng(33.846683, 130.719256); // Branch
    //            new google.maps.DirectionsService().route({
    //                origin: From,
    //                destination: To,
    //                travelMode: google.maps.DirectionsTravelMode.DRIVING
    //            }, function(result, status) {
    //                if (status == google.maps.DirectionsStatus.OK) {
    //                    var rendererOptions = {
    //                        map: map,
    //                        suppressMarkers : true // Hide default marker
    //                    }
    //                    new google.maps.DirectionsRenderer(rendererOptions).setDirections(result);
    //                }
    //            });
    //            routeBtn.css("display","none");
    //        })
    //    }
    //});
    //
    //function initialize() {
    //    var options = {
    //        center: new google.maps.LatLng(33.84643089887599, 130.71966846445275),
    //        zoom: 16,
    //        mapTypeId: google.maps.MapTypeId.ROADMAP,
    //        mapTypeControl: false,
    //        scrollwheel: false,
    //        streetViewControl: false,
    //        panControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT},
    //        zoomControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT},
    //        styles: [
    //            {featureType: "landscape",
    //                stylers: [{saturation: -100}, {lightness: 10}]
    //            },
    //            {featureType: "water",
    //                stylers: [{hue: "#c3e2ee"}, {saturation: 30}, {lightness: 50}]
    //            },
    //            {featureType: "transit.station.bus",
    //                stylers: [{saturation: 30}, {hue: "#E16200"}]
    //            },
    //            {featureType: "administrative",
    //                stylers: [{lightness: 10}]
    //            },
    //            {featureType: "poi",
    //                stylers: [{lightness: 30}]
    //            },
    //            {featureType: "road",
    //                stylers: [{lightness: 15}]
    //            }
    //        ]
    //    };
    //    map = new google.maps.Map($("#googleMaps").get(0), options);
    //}


}(window));