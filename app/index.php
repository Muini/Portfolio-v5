
   <?php include('inc/header-html.php') ?>

   <?php include('inc/header-main.php') ?>

    <div class="loader">
        <div>
            <div>
                <img src='img/loader.gif' class='loader__gif' alt />
            </div>
        </div>
    </div>

    <div class="container">

        <section class="projects">

            <?php
                $json_data = file_get_contents('json/projects.json');
                $json = json_decode($json_data, true);
            ?>

            <?php foreach($json['projects'] as $project): ?>

            <article squary-size="<?php echo $project['size']; ?>" squary-filter="<?php echo $project['category']; ?>" class="project project--entry project-id--<?php echo $project['id']; ?>">
                <div class="project__container">
                    <div class="project__effect"></div>
                    <div class="project__inner">
                        <section class="project__overlay">
                            <div>
                                <img data-parallax-distance=20 src="img/thumbnails/<?php echo $project['thumbnail']; ?>" alt="<?php echo $project['title'];  ?>" class="project__thumbnail parallax"/>
                                <h1 class=""><?php echo $project['title']; ?></h1>
                                <p class=""><?php echo $project['date']; ?></p>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <?php endforeach; ?>

        </section>

        <div class="a_project__overlay"></div>
        <section class="a_project">
            <div class="a_project__close"><span></span><span></span></div>

            <article class="a_project__content">

            </article>

        </section>

    <div class="ivy">
        <canvas id="canvas" />
    </div>

    </div>


   <?php include('inc/footer-main.php') ?>

   <?php include('inc/footer-html.php') ?>


