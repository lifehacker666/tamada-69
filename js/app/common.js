$(function(){

    /* Переносим правый блок вправо */
    $('.floatblock.center-min,.floatblock.center-middle').before( $('.floatblock.right').show() );
    $('.padding-right').hide();
    /* /Переносим правый блок вправо */


    /* Активный пункт меню */
    $('.menu-top ul > li > a').each(function() {
        if ('http://tamada-69.ru'+$(this).attr('href') == window.location.href){
            $(this).parent().addClass('selected');
        }
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
            $('header').css('marginBottom', menuTop.height());
        } else {
            menuTop.removeClass('fixed');
            $('header').css('marginBottom', 0);
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
        "animated-block-index":{
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
                notAnimate($this.find('.spisok-uslug li, .zakaz-block'));
            },
            //скролл сверху вниз IE8
            ie8Down:function($this){
                notAnimate($this.find('.spisok-uslug li, .zakaz-block'));
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
                notAnimate($this.find('.spisok-uslug li, .zakaz-block'));
            },
            //скролл снизу вверх IE8
            ie8Up:function($this){
                notAnimate($this.find('.spisok-uslug li, .zakaz-block'));
            }
        },
        "animated-block-table":{
            //скролл сверху вниз CSS3
            down:function($this){
                $this.find('.colomn.one')
                    .removeClass('fadeOut')
                    .addClass('fadeInLeft');

                $this.find('.colomn.two')
                    .removeClass('fadeOut')
                    .addClass('fadeInRight');
            },
            //скролл сверху вниз IE9
            ie9Down:function($this){
                notAnimate($this.find('.colomn.one, .colomn.two'));
            },
            //скролл сверху вниз IE8
            ie8Down:function($this){
                notAnimate($this.find('.colomn.one, .colomn.two'));
            },

            //скролл снизу вверх CSS3
            up:function($this){
                $this.find('.colomn.one')
                    .removeClass('fadeInLeft')
                    .addClass('fadeOut');

                $this.find('.colomn.two')
                    .removeClass('fadeInRight')
                    .addClass('fadeOut');
            },
            //скролл снизу вверх IE9
            ie9Up:function($this){
                notAnimate($this.find('.colomn.one, .colomn.two'));
            },
            //скролл снизу вверх IE8
            ie8Up:function($this){
                notAnimate($this.find('.colomn.one, .colomn.two'));
            }
        },
        "animated-block-footer":{
            //скролл сверху вниз CSS3
            down:function($this){
                $this.find('.socials, .phone, .copyright')
                    .removeClass('fadeOut')
                    .addClass('fadeInUp');
            },
            //скролл сверху вниз IE9
            ie9Down:function($this){
                notAnimate($this.find('.socials, .phone, .copyright'));
            },
            //скролл сверху вниз IE8
            ie8Down:function($this){
                notAnimate($this.find('.socials, .phone, .copyright'));
            },

            //скролл снизу вверх CSS3
            up:function($this){
                $this.find('.socials, .phone, .copyright')
                    .removeClass('fadeInUp')
                    .addClass('fadeOut');
            },
            //скролл снизу вверх IE9
            ie9Up:function($this){
                notAnimate($this.find('.socials, .phone, .copyright'));
            },
            //скролл снизу вверх IE8
            ie8Up:function($this){
                notAnimate($this.find('.socials, .phone, .copyright'));
            }
        },
        "animated-block-contact":{
            //скролл сверху вниз CSS3
            down:function($this){
                $this.find('.contacts.one')
                    .removeClass('fadeOutLeftBig')
                    .addClass('fadeInLeftBig');

                $this.find('.contacts.two')
                    .removeClass('fadeOutRightBig')
                    .addClass('fadeInRightBig');
            },
            //скролл сверху вниз IE9
            ie9Down:function($this){
                notAnimate($this.find('.contacts.one, .contacts.two'));
            },
            //скролл сверху вниз IE8
            ie8Down:function($this){
                notAnimate($this.find('.contacts.one, .contacts.two'));
            },

            //скролл снизу вверх CSS3
            up:function($this){
                $this.find('.contacts.one')
                    .removeClass('fadeInLeftBig')
                    .addClass('fadeOutLeftBig');

                $this.find('.contacts.two')
                    .removeClass('fadeInRightBig')
                    .addClass('fadeOutRightBig');
            },
            //скролл снизу вверх IE9
            ie9Up:function($this){
                notAnimate($this.find('.contacts.one, .contacts.two'));
            },
            //скролл снизу вверх IE8
            ie8Up:function($this){
                notAnimate($this.find('.contacts.one, .contacts.two'));
            }
        },
        "example":{
            //скролл сверху вниз CSS3
            down:function($this){

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
    $('.index-block')
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

    $('.table-block')
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

    $('.contact-block')
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

    $('footer')
        //оффсет 80%
        .waypoint( function (dir) {

            if (dir === 'down') { //скролл сверху вниз
                differentBrowsersDown($(this));
            }
            else { //скролл снизу вверх
                differentBrowsersUp($(this));
            }

        }, {
            offset: '100%'
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
            animations[$this.attr("data-key")].down($this);

        } else if (Modernizr.opacity)  {
            animations[$this.attr("data-key")].ie9Down($this);
        } else {
            animations[$this.attr("data-key")].ie8Down($this);
        }
    }

    // вызов функций анимации в зависимости от возможностей браузера (up)
    function differentBrowsersUp($this){
        if (Modernizr.cssanimations) {
            animations[$this.attr("data-key")].up($this);

        } else if (Modernizr.opacity)  {
            animations[$this.attr("data-key")].ie9Up($this);
        } else {
            animations[$this.attr("data-key")].ie8Up($this);
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

    //header phone
    setInterval(function() {
        $('header .phone img').removeClass('wobble');
        setTimeout(function() {
            $('header .phone img').addClass('wobble');
        }, 100);
    }, 7000);
    /* /CSS3 анимации */

}); // END READY