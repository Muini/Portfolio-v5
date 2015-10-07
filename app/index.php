
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
                            <img src="<?php echo $project['thumbnail']; ?>" alt="<?php echo $project['title']; ?>" class="project__thumbnail" />
                            <h1 class="para_move" para-force=20><?php echo $project['title']; ?></h1>
                        </section>
                        <section class="project__content">
                            <header class="project__header">

                            </header>
                            <section class="project__main">

                            </section>
                            <footer class="project__footer">

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


