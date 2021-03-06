<html lang="en">
    <?php
        //Make a simple counter and store the value in a data attribute that can be read by javascript
        session_start();
        $counter_name = "json/ips.txt";

        // Check if a text file exists. If not create one and initialize it to zero.
        if (!file_exists($counter_name)) {
          $f = fopen($counter_name, "w");
          fwrite($f,"0");
          fclose($f);
        }

        function getRealIpAddr()
        {
            if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
            {
              $ip=$_SERVER['HTTP_CLIENT_IP'];
            }
            elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
            {
              $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
            }
            else
            {
              $ip=$_SERVER['REMOTE_ADDR'];
            }
            return $ip;
        }

        // Read the current value of our counter file
        $f = fopen($counter_name,"r");
        $counterVal = fread($f, filesize($counter_name));
        fclose($f);

        // Has visitor been counted in this session?
        // If not, increase counter value by one
        if(!isset($_SESSION['hasVisited'])){
          $_SESSION['hasVisited']="yes";
          $counterVal++;
          $f = fopen($counter_name, "w");
          fwrite($f, $counterVal);
          fclose($f);
        }

        //echo getRealIpAddr();
        //echo "<br>";
        //echo $counterVal;
    ?>
    <head>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-15013305-9', 'auto');
          ga('send', 'pageview');
        </script>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Corentin Flach • Storyteller - Motion Designer - Front-end developer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <!-- build:css -->
        <link rel="stylesheet" href="styles/production.min.css">
        <!-- endbuild -->
        <link rel="shortcut icon" type="image/png" href="img/favico.png">

        <!-- SEO -->
        <meta name="robots" content="index,follow">
        <meta name="author" content="Corentin Flach">
        <meta name="keywords" content="corentin,flach,flash,flache,director,writer,photographer,photo,webmaster,site,game,video,short,actinium,studio,draw,independant,webdesign,design,videos,designer,cinema,editing,communication,storyteller,VFX,web,tv,cartoon,infographic,animation,multimedia,2d,3d,film,films,pub,pubs,publicity">
        <meta name="description" content="Storytelling with film-making, motion design, interactive &amp; creative front-end development, this is what I like and do as french student &amp; Freelance.">
        <link rel="canonical" href="http://corentinflach.fr/">
        <link rel="publisher" href="https://plus.google.com/105361402906060743268/posts">
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@CorentinFlach">
        <meta name="twitter:creator" content="@CorentinFlach">
        <meta name="twitter:title" content="Corentin Flach • Storyteller - Motion Designer - Front-end developer">
        <meta name="twitter:description" content="Storytelling with film-making, motion design, interactive &amp; creative front-end development, this is what I like and do as french student &amp; Freelance.">
        <meta name="twitter:image:src" content="http://corentinflach.fr/img/cover.jpg">
        <meta name="twitter:domain" content="http://corentinflach.fr/">
        <!-- Facebook -->
        <meta property="og:locale" content="en_US">
        <meta property="og:locale:alternate" content="fr_FR">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Corentin Flach • Storyteller - Motion Designer - Front-end developer">
        <meta property="og:description" content="Storytelling with film-making, motion design, interactive &amp; creative front-end development, this is what I like and do as french student &amp; Freelance.">
        <meta property="og:url" content="http://corentinflach.fr/">
        <meta property="og:site_name" content="Corentin Flach • Storyteller - Motion Designer - Front-end developer">
        <meta property="og:image" content="http://corentinflach.fr/img/cover.jpg">
        <!-- Google Plus -->
        <meta itemprop="name" content="Corentin Flach • Storyteller - Motion Designer - Front-end developer">
        <meta itemprop="description" content="Storytelling with film-making, motion design, interactive &amp; creative front-end development, this is what I like and do as french student &amp; Freelance.">
        <meta itemprop="image" content="http://corentinflach.fr/img/cover.jpg">
        <script type="text/javascript">
            //Font loading
            WebFontConfig = {
              custom: {
                families: ['Baron Neue:n8,n7,n4'],
                urls: ['./styles/production.min.css']
              },
              google: {
                families: ['Open Sans:300,400,600', 'Antic Slab:400']
              },
              timeout: 3000
            };
            (function(d) {
              var wf = d.createElement('script'), s = d.scripts[0];
              wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
              s.parentNode.insertBefore(wf, s);
            })(document);
        </script>
</head>
