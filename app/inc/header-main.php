<body>
    <header class="header">
        <div class="header__container">
            <!--<img class="header__img" alt="Corentin FLACH" src="img/logo-hd.gif" />-->
            <video class="header__vid" preload="auto">
                <source src="video/logo-flach.mp4" type="video/mp4" />
            </video>
            <h1 class="shadowed">FLACH Corentin</h1>
            <h2 class="header__desc">Storytelling - Motion Design - Front-end development</h2>
            <nav class="header__socials">
                <a href="http://twitter.com/CorentinFlach" target="_blank" class="ion-social-twitter-outline hover-sound" data-hover-sound="sound/hover.mp3"></a>
                <a href="http://www.linkedin.com/in/corentinflach" target="_blank" class="ion-social-linkedin-outline hover-sound" data-hover-sound="sound/hover.mp3"></a>
                <a href="http://www.youtube.com/user/ActiniumStudio" target="_blank" class="ion-social-youtube-outline hover-sound" data-hover-sound="sound/hover.mp3"></a>
                <a href="mailto:hi@corentinflach.fr" class="ion-paper-airplane hover-sound" data-hover-sound="sound/hover.mp3"></a>
            </nav>
            <nav class="header__nav">
                <ul>
                    <li><a class="header__nav--active hover-sound" data-hover-sound="sound/hover.mp3" onclick="grid.it.filter('all');">All</a></li>
                    <li><a class="hover-sound" data-hover-sound="sound/hover.mp3" onclick="grid.it.filter('motion');">Motion</a></li>
                    <li><a class="hover-sound" data-hover-sound="sound/hover.mp3" onclick="grid.it.filter('dev');">Development</a></li>
                    <li><a class="hover-sound" data-hover-sound="sound/hover.mp3" onclick="grid.it.filter('video');">Short-film</a></li>
                    <!--<li><a class="hover-sound" data-hover-sound="sound/hover.mp3">About</a></li>-->
                </ul>
            </nav>
        </div>
    </header>
