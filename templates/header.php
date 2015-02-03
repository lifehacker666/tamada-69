<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?= $title ?></title>
    <meta name="description" content="<?= $description ?>">
    <meta name="keywords" content="<?= $keywords ?>">
    <link rel="icon" type="image/png" href="/favicon.png">

    <!-- STANDART -->
    <script src="/js/lib/jquery-1.11.0.min.js"></script>
    <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.1/animate.min.css">
    <!-- /STANDART -->

    <!-- UNIQUE -->
    <link rel="stylesheet" href="/css/common.css?v=01">
    <!-- /UNIQUE -->

</head>

<body class="<?= $page_name ?>">
<div id="overflow_div">

    <!--header-->
    <header class="content-wraper">
        <div class="content clearfix">
            <a class="logo" href="/">
                <img src="/img/logo.png" class="animated" alt=""/>
                <div class="text">Энергичный тамада<br> Виктор</div>
            </a>
            <div class="contacts">
                <span>Звоните!</span> с 9 до 23 без выходных!
                <div class="phone">
                    <img class="animated" src="/img/phone.png" alt=""/>
                    +7-960-715-82-65
                </div>
            </div>
        </div>
    </header>

    <!--menu-top-->
    <div class="content-wraper menu-top-container">
        <div class="content">
            <nav class="menu-top">
                <img class="menu-top-left" src="/img/menu-top-left.png" alt=""/>
                <img class="menu-top-right" src="/img/menu-top-right.png" alt=""/>
                <ul>
                    <li><a href="/">Главная</a></li><!--
                       --><li><a href="/about.php">О себе</a></li><!--
                       --><li><a href="/price.php">Цены</a></li><!--
                       --><li><a href="/dj.php">Ди-джей</a></li><!--
                       --><li><a href="/gallery.php">Свадебные фото</a></li><!--
                       --><li><a href="/hardware.php">Аппаратура</a></li><!--
                       --><li><a href="/contact.php">Контакты</a></li><!--
                       --><li class="helper"></li> <!-- доп элемент для выравнивания по ширине -->
                </ul>
            </nav>
        </div>
    </div>

    <? if ( $page_name == 'index-page'){ ?>
    <!--akciya-->
    <div class="content-wraper akciya">
        <div class="content">
            <div>
                <a href="/contact.php" class="akciya-container">
                    <div class="title1">Поздравляем посетителей сайта с грядущими праздниками:</div>
                    <div class="title2">Днем Защитника Отечества и Международным Женским днем!</div>
                    <p>Закажите наши услуги на праздник и сделайте впечатления от него незабываемыми!</p>
                </a>
            </div>
        </div>
    </div>

    <!--index-block-->
    <div class="content-wraper index-block" data-key="animated-block-index">
        <div class="content">
            <div class="clearfix">
                <div class="spisok-uslug clearfix">
                    <h2>Я провожу</h2>
                    <ul class="style1 one">
                        <li class="animated">Свадьбы</li>
                        <li class="animated">Дни рождения и юбилеи</li>
                        <li class="animated">Корпоративные вечера</li>
                        <li class="animated">Детские мероприятия</li>
                    </ul>
                    <ul class="style1 two">
                        <li class="animated">Вечеринки</li>
                        <li class="animated">Новогодние праздники</li>
                        <li class="animated">День защитника Отечества</li>
                        <li class="animated">Международный Женский день</li>
                    </ul>
                </div>
                <div class="zakaz-block animated">
                    Вам нужен тамада или ведущий на праздник?
                    <a href="/contact.php" class="button open-popup">Организовать праздник !!!</a>
                </div>
                <div class="block1-bg"></div>
            </div>
        </div>
    </div>

    <?php } ?>

    <!--content-->
    <div class="content-wraper">
        <div class="content">
            <div class="content-hidden">
                <div class="overflower rightfloating">