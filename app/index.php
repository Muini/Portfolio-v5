
   <?php include('inc/header-html.php') ?>

   <?php include('inc/header-main.php') ?>


    <div class="container">

        <section class="projects">

            <?php
                $json_data = file_get_contents('json/projects.json');
                $json = json_decode($json_data, true);
            ?>

            <?php foreach($json['projects'] as $project): ?>

            <article squary-size="<?php echo $project['size']; ?>" squary-filter="<?php echo $project['category']; ?>" class="project project--entry project--<?php echo $project['id']; ?>">
                <div class="project__container">
                    <div class="project__inner">
                        <section class="project__overlay">
                            <div>
                                <img src="img/thumbnails/<?php echo $project['thumbnail']; ?>" alt="<?php echo $project['title'];  ?>" class="project__thumbnail"/>
                                <img src="img/thumbnails/<?php echo $project['thumbnail']; ?>" alt="<?php echo $project['title'];  ?>" class="project__thumbnail duotone" data-gradient-map="rgb(110, 126, 92) 0%, rgb(196, 190, 182) 25%" />
                                <h1 class="shadowed"><?php echo $project['title']; ?></h1>
                                <p class=""><?php echo $project['date']; ?></p>
                            </div>
                        </section>
                        <section class="project__content">
                            <header class="project__header">
                                <h1><?php echo $project['title']; ?></h1>
                                <p class="project__desc"><?php echo $project['desc']; ?></p>
                            </header>
                            <section class="project__main">
                                <?php if( $project['videoSrc'] != NULL ): ?>
                                    <video>

                                    </video>
                                <?php endif; ?>
                                <?php if( count($project['photos']) > 0 ): ?>
                                    <ul class="gallery">
                                        <li><img src alt></li>
                                        <li><img src alt></li>
                                        <li><img src alt></li>
                                    </ul>
                                <?php endif; ?>
                            </section>
                            <footer class="project__footer">
                                <a href="<?php echo $project['url']; ?>">Link to project</a>
                            </footer>
                        </section>
                    </div>
                </div>
            </article>

            <?php endforeach; ?>

        </section>

    </div>


   <?php include('inc/footer-main.php') ?>

   <?php include('inc/footer-html.php') ?>


