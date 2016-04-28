/**
 * Individual Setting
 */
;(function (window) {
    "use strict";
    var document = window.document,
        $ = window.jQuery
        ;

    $(document).ready(function(){

        $("#index").prepend('<div id="borderTop"></div><div id="borderLeft"></div><div id="borderRight"></div><div id="borderBottom"></div><div id="imgOverlay"></div>');
        $("#nav li:last-child").addClass("lastChild");

        var theWindow = $(window),
            secTopArr = new Array(),
            sec = $('.sec'),
            pageTop = $('html, body'),
            userTabPhone = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0,
            userTab = (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('iPad') > 0,
            userPhone = (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0);

        /*
         RECRUIT modal
         */
        if(userPhone) {
            $('#recruitSp').css({display:'block'})
        }
        $('.recruitOpenBtn').click(function() {
            var contentsHide = $.when(
                $('#recruit').css({display:'block',opacity:'0'}),
                pageTop.animate({ scrollTop: 0 },0),
                $('#headSec').css({display:'none'}),
                $('#whole').css({display:'none'}),
                $('#maximage').css({display:'none'}),
                $('#bxNav').css({display:'none'}),
                $('#imgOverlay').css({display:'none'}),
                $('#recruitSp').css({display:'none'})
            );

            contentsHide.done(function() {
                $('#recruit').delay(300).animate({opacity:'1'},500);
            });

        });

        $('#recruitCloseBtn').click(function() {
            pageTop.animate({ scrollTop: 0 },0);
            $('#container_inner').css({backgroundColor:'#f2f2f2'});
            $('#recruit').css({display:'none'});
            $('#headSec').css({display:'block'});
            $('#whole').css({display:'block'});
            $('#maximage').css({display:'block'});
            $('#bxNav').css({display:'block'});
            $('#imgOverlay').css({display:'block'});
            if(userPhone) {
                $('#recruitSp').css({display:'block'})
            }
            /*bxSlider restart*/
            $('#gallery').bxSlider({
                minSlides: 11,
                maxSlides: 11,
                slideWidth: 280,
                slideMargin: 2,
                ticker: true,
                speed: 70000
            });
        });

        /*
         pageScroll
         */
        $('a[href*=#]').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&　location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length && target;
                if (target.length) {
                    var scldurat = 800,
                        easingEffect = "easeInOutCirc",
                        targetOffset = target.offset().top;
                    pageTop.animate({scrollTop: targetOffset}, {duration: scldurat, easing: easingEffect});
                    return false;
                }
            }
        });

        /*
         setSize,
         resize function
         */
        function setSize() {

            var windowH = theWindow.height(),
                windowW = theWindow.width(),
                imgW = 1200,
                imgH = 740,
                scaleW = windowW / imgW,
                scaleH = windowH / imgH,
                fixScale = Math.max(scaleW, scaleH),
                setW = imgW * fixScale,
                setH = imgH * fixScale,
                gNaviH = windowH - 10,
                bg = $('#maximage img'),
                bxView = $("#maximage .bx-viewport"),
                bxNavi = $("#bxNav"),
                gNav = $("#gNavSec"),
                pageTopBtn = $('#pageTop'),
                whole = $("#whole"),
                headttl = $("#headSec h1"),
                sArrow = $("#scrollArrow"),
                overlay = $("#imgOverlay"),
                ttlIcon = $(".ttlIcon img"),
                sec1 = $("#sec1");

            bg.css({'width': setW, 'height': setH});
            bxView.css({'height': setH});
            overlay.css("height" , windowH + "px");
            sArrow.css("top", windowH /2 + 60 + "px").css("left", windowW /2 - 25 + "px");

            if (userTab) {

                whole.css("top", windowH - 90 + "px")
                headttl.css("top", windowH /2 - 160 + "px").css("left", windowW /2 - 80 + "px");
                /* .sec offSet */
                theWindow.scroll(function(){
                    if (theWindow.scrollTop() > gNaviH - 90) {
                        gNav.css("position", "fixed").css("top", "10px");
                    } else {
                        gNav.css("position","absolute").css("top", "0");
                    }
                });
                //whole.css("top", windowH + "px");
                //gNav.hide();
                //bxNavi.css("bottom","30px");
                //sec1.css({"padding":"90px 0 0 0"});
                //headttl.css("top", windowH /2 - 160 + "px").css("left", windowW /2 - 80 + "px");
                //ttlIcon.show();

            } else if(userPhone) {

                $("img",headttl).attr("width","110").attr("height","110");
                whole.css("top", windowH - 6 + "px");
                gNav.hide();
                //bxNavi.css("bottom","30px");
                sec1.css({"padding":"50px 0 0 0"});
                ttlIcon.show();
                //pageTopBtn.show();
                $(".gold").css("background-color","#B5A869");
                headttl.css("top", windowH /2 - 110 + "px").css("left", windowW /2 - 55 + "px");
                $("#borderTop,#borderBottom").css("height","6px");
                $("#borderLeft,#borderRight").css("width","6px");

            } else {

                whole.css("top", windowH - 90 + "px")
                headttl.css("top", windowH /2 - 160 + "px").css("left", windowW /2 - 80 + "px");
                /* .sec offSet */
                theWindow.scroll(function(){
                    if (theWindow.scrollTop() > gNaviH - 90) {
                        gNav.css("position", "fixed").css("top", "10px");
                    } else {
                        gNav.css("position","absolute").css("top", "0");
                    }
                });

            }

            sec.each(function (i) {
                secTopArr[i] = $(this).offset().top;
            });
        }

        /*
         chengeBG,
         navSelected
         */
        function slideChengeBg() {

            var bgColor = new Array('#f2f2f2','#B5A869', '#f2f2f2', '#B5A869', '#f2f2f2'),
                navItem = new Array('#nav1','#nav2', '#nav3', '#nav4', '#nav5'),
                secIcon = new Array('#icon1 img','#icon2 img', '#icon3 img', '#icon4 img', '#icon5 img'),
                secBtnCol = new Array('1','2', '1', '2', '1'),
                navLi = $('#nav li'),
                arrowBtn = $('#scrollArrow a'),
                pageTopBtn = $('#pageTop'),
                cont = $('#container_inner'),
                moveFlug = false,
                current = -1,
                nav1 = $("#nav1"),
                pbIcon = $("#pbIcon"),
                navAnchor = $("#nav a");

            theWindow.scroll(function () {
                if (userPhone) {

                    // Do not process

                } else {

                    for (var i = secTopArr.length-1; i>=0; i--) {
                        if (theWindow.scrollTop() > secTopArr[i] - 220) {
                            chengeBG(i);
                            break;
                        }
                    }
                    if (theWindow.scrollTop() < secTopArr[0] -220) {
                        nav1.removeClass("selected");
                        pageTopBtn.css("display","none");
                    } else if (theWindow.scrollTop() > secTopArr[0] -220 && theWindow.scrollTop() < secTopArr[1] - 220) {
                        nav1.addClass("selected");
                        pageTopBtn.css("display","block");
                    }

                }
            });

            function chengeBG(secNum) {
                if (secNum != current && moveFlug == false) {
                    current = secNum;

                    /* bgColor chenge */
                    cont.stop().animate({backgroundColor: bgColor[current]}, 300);

                    // secIcon
                    $(secIcon[current]).delay(200).fadeIn(400);

                    //pagetopBtn Color
                    pbIcon.attr('src', "img/pageTopBtn" + secBtnCol[current] + ".png")

                    /* navSelected */
                    $(navItem[current]).addClass("selected");
                    navAnchor.not(navItem[current]).removeClass("selected");
                }
            }

        }

        /* trigger */
        var timer = false;
        theWindow.resize(function() {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                setSize();
                slideChengeBg();
            }, 200);
        }).trigger("resize");

    });
}(window));