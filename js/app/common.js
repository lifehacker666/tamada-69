$(function(){

    /* Переносим правый блок вправо */
    $('.floatblock.center-min,.floatblock.center-middle').before( $('.floatblock.right').show() );
    $('.padding-right').hide();
    /* /Переносим правый блок вправо */


    /* Активный пункт меню */
    $('.menu-top ul > li').click(function() {
        $(this).parent().find('.selected').removeClass("selected");
        $(this).addClass("selected");
    });
    /* /Активный пункт меню */


    /* placeholder */
    if( $('input').attr('placeholder') ||  $('textarea').attr('placeholder') ) {
        $.getScript( '/js/lib/jquery.placeholder.js', function() {

            $('input[placeholder], textarea[placeholder]').placeholder();

        });
    }
    /* /placeholder */


    /* Динамическое подключение fancybox */
    if( jQuery("a").is(".fancybox-thumb") ){
        jQuery('head').append("<link rel='stylesheet' type='text/css'  href='/css/fancybox/jquery.fancybox.css'/>"); /* Подключим стили */
        jQuery('head').append("<link rel='stylesheet' type='text/css'  href='/css/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7'/>"); /* Подключим стили */
        jQuery.getScript( '/js/lib/fancybox/jquery.fancybox.js?v=2.1.5', function() {/* Подключим скрипт */
        jQuery.getScript( '/js/lib/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7', function() {/* Подключим скрипт */

                /* Подрубаем галерею */
                jQuery(".fancybox-thumb").fancybox({
                    prevEffect	: 'none',
                    nextEffect	: 'none',
                    helpers	: {
                        title	: {
                            type: 'outside'
                        },
                        thumbs	: {
                            width	: 50,
                            height	: 50
                        }
                    }
                });

                /* Открываем автоматом по id через класс */
                var start_id = window.location.href.indexOf("#");
                if( start_id > 0 ){
                    var id = window.location.href.substring( start_id+1 );
                    jQuery('a.fancybox-thumb.id' + id ).click();
                }

            });
        });
    }
    /* /Динамическое подключение fancybox */

    /* фиксированное верхнее меню */
    var menuTop = $('.menu-top-container'),
        scrollTopDocument = $(document).scrollTop();

    $(document).scroll(function() {
        scrollTopDocument = $(document).scrollTop();

        if (scrollTopDocument >= $('header').height() ) {
            menuTop.addClass('fixed');
        } else {
            menuTop.removeClass('fixed');
        }

    });
    /* /фиксированное верхнее меню */

    /* кнопка Наверх */
    $(function() {
        $('body').append('<div class="toTop button">НАВЕРХ</div>');
        $(window).scroll(function() {
            if($(this).scrollTop() >= 350) {
                $('.toTop').fadeIn();
            } else {
                $('.toTop').fadeOut();
            }
        });

        $('.toTop').click(function() {
            $('body,html').animate({scrollTop:0},500);

        });
    });
    /* /кнопка Наверх */

    /* CSS3 анимации */
    var animations = {
        "animated-block1":{
            //скролл сверху вниз CSS3
            down:function($this){
                $this.find('.spisok-uslug li')
                    .removeClass('fadeOut')
                    .addClass('fadeIn');

                $this.find('.zakaz-block')
                    .removeClass('fadeOut')
                    .addClass('zoomIn');
            },
            //скролл сверху вниз IE9
            ie9Down:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            },
            //скролл сверху вниз IE8
            ie8Down:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            },

            //скролл снизу вверх CSS3
            up:function($this){
                $this.find('.spisok-uslug li')
                    .removeClass('fadeIn')
                    .addClass('fadeOut');

                $this.find('.zakaz-block')
                    .removeClass('zoomIn')
                    .addClass('fadeOut');
            },
            //скролл снизу вверх IE9
            ie9Up:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            },
            //скролл снизу вверх IE8
            ie8Up:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            }
        },
        "example":{
            //скролл сверху вниз CSS3
            down:function($this){
                $this.find('h2, .content > .text')
                    .removeClass('fadeOut')
                    .addClass('fadeInDown');

                $this.find('.items-container .item').eq(0)
                    .removeClass('fadeOut')
                    .addClass('fadeInDown');

                $this.find('.items-container .item').eq(1)
                    .removeClass('fadeOut')
                    .addClass('fadeInUp');

                $this.find('.items-container .item').eq(2)
                    .removeClass('fadeOut')
                    .addClass('fadeInDown');

                $this.find('.items-container .item').eq(3)
                    .removeClass('fadeOut')
                    .addClass('fadeInUp');

                $this.find('.items-container .item').eq(4)
                    .removeClass('fadeOut')
                    .addClass('fadeInDown');
            },
            //скролл сверху вниз IE9
            ie9Down:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            },
            //скролл сверху вниз IE8
            ie8Down:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            },

            //скролл снизу вверх CSS3
            up:function($this){
                $this.find('h2, .content > .text')
                    .removeClass('fadeInDown')
                    .addClass('fadeOut');

                $this.find('.items-container .item').eq(0)
                    .removeClass('fadeInDown')
                    .addClass('fadeOut');

                $this.find('.items-container .item').eq(1)
                    .removeClass('fadeInUp')
                    .addClass('fadeOut');

                $this.find('.items-container .item').eq(2)
                    .removeClass('fadeInDown')
                    .addClass('fadeOut');

                $this.find('.items-container .item').eq(3)
                    .removeClass('fadeInUp')
                    .addClass('fadeOut');

                $this.find('.items-container .item').eq(4)
                    .removeClass('fadeInDown')
                    .addClass('fadeOut');
            },
            //скролл снизу вверх IE9
            ie9Up:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            },
            //скролл снизу вверх IE8
            ie8Up:function($this){
                notAnimate($this.find('h2, .content > .text, .items-container .item'));
            }
        }
    };

    //подключаем waypoint к блоку, в котором находятся анимируемые эл-ты
    $('#animated-block1')
        //оффсет 80%
        .waypoint( function (dir) {

            if (dir === 'down') { //скролл сверху вниз
                differentBrowsersDown($(this));
            }
            else { //скролл снизу вверх
                differentBrowsersUp($(this));
            }

        }, {
            offset: '80%'
        })
        //350px от нижнего края
        .waypoint( function (dir) {

            if (dir === 'down') { //скролл вниз
                differentBrowsersUp($(this));
            }
            else { //скролл вверх
                differentBrowsersDown($(this));
            }

        }, {
            offset: function() {
                return -$(this).outerHeight();
            }
        });

    // вызов функций анимации в зависимости от возможностей браузера (down)
    function differentBrowsersDown($this){
        if (Modernizr.cssanimations) {
            animations[$this.attr("id")].down($this);

        } else if (Modernizr.opacity)  {
            animations[$this.attr("id")].ie9Down($this);
        } else {
            animations[$this.attr("id")].ie8Down($this);
        }
    }

    // вызов функций анимации в зависимости от возможностей браузера (up)
    function differentBrowsersUp($this){
        if (Modernizr.cssanimations) {
            animations[$this.attr("id")].up($this);

        } else if (Modernizr.opacity)  {
            animations[$this.attr("id")].ie9Up($this);
        } else {
            animations[$this.attr("id")].ie8Up($this);
        }
    }

    //просто показываем элемент, без анимации
    function notAnimate($this){
        $this.css('visibility','visible');
    }

    //header logo
    setInterval(function() {
        $('header .logo img').removeClass('flip');
        setTimeout(function() {
            $('header .logo img').addClass('flip');
        }, 100);
    }, 15000);
    /* /CSS3 анимации */

}); // END READY